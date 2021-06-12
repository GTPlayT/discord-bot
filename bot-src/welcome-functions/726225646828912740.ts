export default async function (member: any, client: any) {
    let guild = await client.getGuildPreview('726225646828912740')
    if(!guild){guild = await client.getGuildPreview('726225646828912740')}
    let avatar: string = '';
    if (member.user.avatar){avatar = client.avatarUrl(member.user.id, member.user.avatar)}
    const embed = {
        title: 'New Member Join',
        author: {name: client.user.username, icon_url: client.user.avatarUrl},
        footer: {text: `You are the ${guild.approximate_member_count}th member on this guild`, icon_url: client.iconUrl(guild.id, guild.icon)},
        color: 9699539,
        thumbnail: {url: avatar},
        image: {url: 'https://64.media.tumblr.com/c5a35d895fe7fcb3fec2d5ce8d8f767c/b77705af0960daea-3f/s1280x1920/ac5f6f978c1c4cba86d31332f5ae8a3aff64ffce.gif'},
        timestamp: member.joined_at,
        description: `Hey oh! Welcome ${member.user.username} to **${guild.name}**, we hope you love your stay and don't forget to check the what we have to offer. Know more about the server here <#773028642472460288>.\n\n*Thank you for choosing ${guild.name}.*`
    }
    let send = await client.send('843390712409489429', `<@!${member.user.id}>`, embed)
    if(!send){send = await client.send('843390712409489429', `<@!${member.user.id}>`, embed)}
    await client.delay(4000)
    if (member.user.bot){
        let role = await client.addRole(member.guild_id, member.user.id, '728254003783401613')
        while (!role){role = await client.addRole(member.guild_id, member.user.id, '728254003783401613')}
        const _patch = {nick: `🌙「 ${member.user.username} [-] 」`}
        let patch = await client.modifyGuildMember(member.guild_id, member.user.id, _patch)
        if(!patch){patch = await client.modifyGuildMember(member.guild_id, member.user.id, _patch)}

    } else {
        let role = await client.addRole(member.guild_id, member.user.id, '728659356161409064')
        if(!role){role = await client.addRole(member.guild_id, member.user.id, '728659356161409064')}
    }
}