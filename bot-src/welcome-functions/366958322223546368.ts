export default async function (member: any, client: any) {
    if (member.user.bot){
        let role = await client.addRole(member.guild_id, member.user.id, '702782852387045437')
        if(!role){role = await client.addRole(member.guild_id, member.user.id, '702782852387045437')}
    } else {
        const bosses = ['343451852450562050', '746369049935740999', '699476830670946356', '705057129513484441', '366970468219092996'] 
        if (bosses.includes(member.user.id)){return}
        const params = {reason: `Illegal guild join on ${member.joined_at}`};
        let ban = await client.createBan(member.guild_id, member.user.id, params)
        if(!ban){ban = await client.createBan(member.guild_id, member.user.id, params)}
        await client.send('713043989644967978', `A user with user ID: **${member.user.id}** as ${member.user.username}#${member.user.discriminator} tried to join the server, ban is added to the user.`)
    }
}