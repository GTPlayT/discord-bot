export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview('764001032664776745')
    const AVATAR = 'https://64.media.tumblr.com/ba328edb91f6918fa8ead3c43c539369/73d6c035f516b682-62/s250x400/2b16b97cfc2ad3aab7ac26dbb8cdeb7ef1048218.png'
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    const embeds = [
    {
        color: 3092790,
        image: {url: 'https://i.imgur.com/XItPr5L.png'}   
    },
    {
        author: {name: '‹𝟹・seraph - server info'},
        color: 3092790  
    },
    {
        color: 3092790,
        image: {url: 'https://i.pinimg.com/564x/9a/28/aa/9a28aa290019fca5cd1dac5df52505ad.jpg'}   
    },
    {   description: `<:bl_letter_r:784959809849917460><:bl_letter_u:784959809719500860><:bl_letter_l:784959809425375283><:bl_letter_e:784959809615167529><:bl_letter_s:784959809757249556>\n\n**˒ ˒ no nsfw, slurs & toxicity!ꜝꜝ ✦𓂅\n₍♡₎・no loopholes, advertising & drama₊₊\n҂﹒follow tos and guidelines𓂃\n**`,
        color: 3092790,
        image: {url: 'https://media.discordapp.net/attachments/803944701463625738/838373655452712980/image3.png?width=1025&height=55'}   
    },
    {   description: `<:bl_letter_b:784959809375174667><:bl_letter_o:784959809744404501><:bl_letter_o:784959809744404501><:bl_letter_s:784959809757249556><:bl_letter_t:784959810030141450>\n\n**˒ ˒ instant pic perms in chat!ꜝꜝ ✦𓂅\n₍♡₎・custom role or auto-responder₊₊\n҂﹒shoutout with @here𓂃\n**`,
        color: 3092790,
        image: {url: 'https://media.discordapp.net/attachments/803944701463625738/838373655452712980/image3.png?width=1025&height=55'}   
    },
    {
        color: 3092790,
        timestamp: '2020-08-07T14:11:34.697Z',
        footer: {text: '‹𝟹・seraph'}   
    },]
    let webhooks = await client.getChannelWebhooks('849275858668748820');
    if(!webhooks){webhooks = await client.getChannelWebhooks('849275858668748820')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('849275858668748820', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
    const content = `**__‹𝟹・seraph__**\n**›  ›  https://discord.gg/R3E4JY36KX\n — anime theme\n — sfw and non-toxic\n — semi-active\n — always hiring pms\n›  ›  https://imgur.com/XItPr5L **`
    let send = await client.webhookExecute(webhook.id, webhook.token, content,embeds, `‹𝟹・seraph - public server`, AVATAR)
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, content, embeds, `‹𝟹・seraph - public server`, AVATAR)}
  
}