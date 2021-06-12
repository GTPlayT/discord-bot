import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';
import { Guild } from '../interface/Guild.ts';

export default function(client: Client, payload:Payload) {
    const guild: Guild = payload.d
    let _guilds = client.guilds;
    if(guild.unavailable){
        _guilds.push({unavailable: true, id: guild.id})
    } else {
        _guilds.push({unavailable: false, id: guild.id})
    }
    client.guilds = _guilds
    client.emit('guild create', guild);
}
