import Client from '../client/Client.ts';
import { Payload } from '../interface/Payload.ts';
import { Constants } from '../constants/Constants.ts'

export default function(client: Client, payload:Payload) {
    payload.d.callback = async (content: string, embed?:any) => {return client.callback(payload.d.id, payload.d.token, content, embed)}
    payload.d.member.user.avatar_url = async () => {
        if (payload.d.member.user.avatar.slice(0,2) == 'a_'){
            return `${Constants.CND}/avatars/${payload.d.member.user.id}/${payload.d.member.user.avatar}.gif?size=1024`
        } else {
            return `${Constants.CND}/avatars/${payload.d.member.user.id}/${payload.d.member.user.avatar}.png?size=1024`
        }
    }
    client.emit('interaction create', payload.d);
}
