export default async function(message: any, client: any, value: any) {
    let user: any;
    let footer: any = {text: client.user.username, icon_url: client.user.avatarUrl}
    if (value){
        if (message.mentions.length){user = message.mentions[0]}
        else{
            try{
                user = await client.getUser(value);
                if(!user){user=await client.getUser(value)}
            }catch{
                let reply = await client.reply(message.channel_id, message.id, `Cannot find a user with ID: ${value}`)
                if(!reply){reply = await client.reply(message.channel_id, message.id, `Cannot find a user with ID: ${value} // **being rate limited*`)}
                return
            }
        }
    } else {
        user = message.author;
    }
    if (user != message.author){footer = {text: `${user.username}#${user.discriminator}`, icon_url: client.avatarUrl(user.id, user.avatar)}}
    const embed = {
        title: 'Avatar',
        timestamp: new Date(),
        author: {name: message.author.username, icon_url: client.avatarUrl(message.author.id, message.author.avatar)},
        footer: footer,
        color: 13404894,
        image: {url: client.avatarUrl(user.id, user.avatar)}
    }
    let send = await client.send(message.channel_id, '', embed)
    if(!send){send = await client.send(message.channel_id, `**being rate limited*`, embed)}
}