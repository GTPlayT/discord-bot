import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';
import { Ready } from '../interface/Ready.ts';

export default function(client: Client, payload:Payload) {
    const user: Ready = payload.d
    client.user = user.user;
    client.sessionID = user.session_id;
    client.guilds = user.guilds;
    client.application = user.application;
    client.emit('ready', user);
}
