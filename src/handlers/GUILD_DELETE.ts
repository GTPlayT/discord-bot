import Client from '../client/Client.ts';
import { Guild } from '../interface/Guild.ts';

export default function(client: Client, payload:Payload) {
    const guild: Guild = payload.d
    let _guilds = client.guilds;
    _guilds.pop(_guilds.indexOf(guild))
    client.guilds = _guilds
    client.emit('guild delete', guild);
}
