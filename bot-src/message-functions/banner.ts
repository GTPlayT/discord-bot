export default async function(message: any, client: any, value: any) {
    let guild = await client.getGuild(message.guild_id);
    if (!guild){guild = await client.getGuild(message.guild_id)};
    if (!guild.banner){return}
    const embed = {
        title: 'Guild Banner',
        timestamp: new Date(),
        author: {name: message.author.username, icon_url: client.avatarUrl(message.author.id, message.author.avatar)},
        footer: {text: guild.name, icon_url: client.user.avatarUrl},
        color: 13404894,
        image: {url: client.bannerUrl(guild.id, guild.banner)}
    }

    let send = await client.send(message.channel_id, '', embed)
    if (!send){send = await client.send(message.channel_id, '', embed)}
}