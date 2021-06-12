export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview('764001032664776745')
    const AVATAR = 'https://64.media.tumblr.com/e9326c61935425bc323c97059f3dd11b/f0873ab31d050f83-92/s500x750/6e6312a16e280e7204cdf0a86446f6d3ec5347b1.jpg'
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    const embeds = [
    {
        author: {name: 'monsūn theme - info'},
        color: 3092790  
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/e5e9d2c9e8240fe49122e60146f5d062/fc91441464a6624b-c8/s500x750/4ab19f70bed191d9dad95d606836240f2a1aaece.gif'}   
    },
    {   description: `*monsūn theme - monsoon season and city lights*\n\nnew roles \n\n›  › <@&849964571695644682>\n›  › <@&849964309647458314>\n›  › <@&849963929597771817>\n\n*recommendation are always open*`,
        color: 3092790,  
    },
    {   color: 3092790,
        image: {url: 'https://64.media.tumblr.com/7cb071a58556fad84b2f6af342ea26ee/tumblr_p67w3aKiem1qk95iao2_500.gif'}   
    },
    {
        color: 3092790,
        timestamp: '2021-06-01T14:11:34.697Z',
        footer: {text: 'monsūn theme'}   
    },]
    let webhooks = await client.getChannelWebhooks('814858757669519381');
    if(!webhooks){webhooks = await client.getChannelWebhooks('814858757669519381')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('814858757669519381', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
     let send = await client.webhookExecute(webhook.id, webhook.token, '',embeds, `billboard - announcement`, AVATAR)
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, '', embeds, `billboard - announcement`, AVATAR)}
  
}
