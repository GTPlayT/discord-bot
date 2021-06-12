import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';

export default function(client: Client, payload:Payload) {
    client.emit('guild role delete', payload.d);
}