import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';

export default function(client: Client, payload:Payload) {
    const user = payload.d
    if (user.id == client.user.id){client.user = user.user}
    client.emit('user update', user);
}
