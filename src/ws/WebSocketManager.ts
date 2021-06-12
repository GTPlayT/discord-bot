import { connectWebSocket, WebSocket } from "https://deno.land/std@0.67.0/ws/mod.ts";
import { Constants, OPCODE } from "../constants/Constants.ts";
import { Heartbeat, Identify} from "../constants/Payloads.ts";
import { Payload } from '../interface/Payload.ts';
import Client from '../client/Client.ts';

export default class WebSocketManager {

    private socket!: WebSocket;
    private interval: number = 0;
    private token: string = '';
    constructor(private client: Client){

    };
    async login(token: string){
        this.token = token;
        try{
            this.socket = await connectWebSocket(Constants.GATEWAY);
            for await (const msg of this.socket){
                let payload: Payload
                try{
                    payload = JSON.parse(msg.toString());
                } catch {
                    break
                }
                const {t: event, op} = payload;
                switch (op){

                    case OPCODE.ZERO:
                        break;

                    case OPCODE.HEARTBEAT:
                        const { heartbeat_interval } = payload.d;
                        this.interval = await this.heartbeat(heartbeat_interval);
                        await this.identify(token);
                        break;
                    
                    case OPCODE.ELEVEN:
                        break;
                }
                if (event) {
                    try{
                        const { default: module} = await import(`../handlers/${event}.ts`);
                        module(this.client, payload);
                    } catch(err) {
                        console.log(err);
                    }
                    
                }
            }
        } catch(err){
            console.log(err);
            return err;
        }
    }

    heartbeat(ms: number){
        return setInterval(async () => {
            if(!this.socket.isClosed){
                this.socket.send(JSON.stringify(Heartbeat));
            } else {
                await this.login(this.token)
            };
        }, ms);
    }

    identify(token: string) {
        Identify.d.token = token;
        return this.socket.send(JSON.stringify(Identify));
    }

    async status(name: string, type: number, status: string){
        const activity = [{name: name, type: type}];
        Identify.d.presence.activities = activity;
        Identify.d.presence.status = status;
    }; 
}