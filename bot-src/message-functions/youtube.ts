export default async function(message: any, client: any, value: any) {
    let invite: any
    await client.reply(message.channel_id, message.id, "Join any voice channel")
    let notjoined: boolean = true

    client.on('voice update', async(voice: any)=>{
        if (voice.user_id == message.author.id && voice.guild_id && voice.channel_id){
            try {
                invite = await client.youtubeTogether(voice.channel_id)
                if (!invite){
                    invite = await client.youtubeTogether(voice.channel_id)
                }
                const embed = {
                    title: 'YouTube Together',
                    color: 12395556,
                    timestamp: new Date(),
                    thumbnail: {url: 'https://media.discordapp.net/attachments/821432839048265728/848270076050407434/free-youtube-logo-icon-2431-thumb.png'},
                    footer: {text: client.user.username, icon_url: client.user.avatarUrl},
                    author: {name: message.author.username, icon_url: client.avatarUrl(message.author.id, message.author.avatar)},
                    description: `**YouTube Together** in <#${voice.channel_id}>. [Click Here](https://discord.gg/${invite.code}) to enable / join the YouTube Together show.`
                }
                
                let reply = await client.reply(message.channel_id, message.id, '', embed)
                if (!reply){
                    await client.reply(message.channel_id, message.id, '**Being ratelimited*', embed)
                }
                notjoined = false
            } catch{
                await client.reply(message.channel_id, message.id, '**Channel could not be found or invite could not be created :(**')
                notjoined = false
            }
        }})
    await client.delay(20000)
    client.removeAllListeners('voice update')
    if (notjoined){const res = await client.reply(message.channel_id, message.id, "Try to join any voice channel under 20 seconds.")}
}