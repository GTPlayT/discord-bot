import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';
import { Message } from '../interface/Message.ts';   

export default async function(client: Client, payload:Payload) {
    const message = payload.d
    client.emit('message', message);
}