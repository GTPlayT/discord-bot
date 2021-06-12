export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let members = await client.getGuildMembers('764001032664776745', 'limit=1000')
    if (!members){members = await client.getGuildMembers('764001032664776745', 'limit=1000')}
    let code: number = 1
    for (const member of members.reverse()){
        if (member.user.bot){continue}
        let patch = {
            nick: `rd - ${code}`,
            roles: ['784360314770161684', '849963929597771817']
        }
        code += 1
        let modify = await client.modifyGuildMember('764001032664776745', member.user.id, patch)
        if(!modify){modify = await client.modifyGuildMember('764001032664776745', member.user.id, patch)}
    }
}