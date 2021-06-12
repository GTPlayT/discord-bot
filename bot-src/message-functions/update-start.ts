export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview('764001032664776745')
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    const embeds = [{
        author: {name: 'Theme month - June'},
        color: 3092790,
        image: {url: 'https://images-ext-1.discordapp.net/external/CAjrWFTM8MhNOiu2F4ehuWswUb71iEoydNCPUZDnwGU/https/64.media.tumblr.com/f39fa0af5b5d3b3cb0607b84e802e078/tumblr_p9nr6ruvyL1t08lggo1_500.png'}   
    },
    {
        color: 3092790,
        image: {url: 'https://images-ext-1.discordapp.net/external/oezfLlj72ka9vu5SX1185nU5uDQIfPKWINrvu6m2aGQ/https/64.media.tumblr.com/2b08c2141afea067a02c1464305fb8ed/tumblr_p9nr6ruvyL1t08lggo2_500.png'}   
    },
    {
        color: 3092790,
        image: {url: 'https://images-ext-1.discordapp.net/external/dXZzSv1f8tqlvHW3kDnFALaGbHhCAHv_frF4GLiklk0/https/64.media.tumblr.com/6b7bca543365793c00cdfd15effb544b/tumblr_p9nr6ruvyL1t08lggo3_500.png'}   
    },
    {
        color: 3092790,
        image: {url: 'https://images-ext-2.discordapp.net/external/FHnok-vqZ8gOX_v0rlSeFZ628S29kPAzvyjffBat9tw/https/64.media.tumblr.com/79a3714ddbac380308dfeb1433b8096b/tumblr_p9nr6ruvyL1t08lggo4_500.png'},
        timestamp: '2021-07-01T07:00:00.000Z',
        footer: {text: 'Next theme  '}   
    },]
    let webhooks = await client.getChannelWebhooks('849157436752789514');
    if(!webhooks){webhooks = await client.getChannelWebhooks('849157436752789514')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('849157436752789514', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
    let send = await client.webhookExecute(webhook.id, webhook.token, '',embeds, `${guild.name} - start`, 'https://64.media.tumblr.com/c62b26a321786ab1255f937534139a0e/73d6c035f516b682-12/s250x400/4d1ef3ebfffff89dcdb816bb3353e775d98407d9.jpg')
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, '', embeds, `${guild.name} - start`, 'https://64.media.tumblr.com/c62b26a321786ab1255f937534139a0e/73d6c035f516b682-12/s250x400/4d1ef3ebfffff89dcdb816bb3353e775d98407d9.jpg')}
  
}