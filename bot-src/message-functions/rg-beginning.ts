export default async function(message: any, client: any, value: any) {
    const channelWeb = '793740105318793236'
    const guildID = '726225646828912740'
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview(guildID)
    while (!guild){guild = await client.getGuildPreview(guildID)}
    console.log(guild)
    const embeds = [{
        author: {name: 'Royal Garden'},
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/6732460aae5af68c26e03f97c1fa395c/tumblr_p8ho6me3nV1s5mz67o1_500.jpg'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/e63ab66b8a55fc808e43bd13d0a52a9b/tumblr_p8ho6me3nV1s5mz67o2_500.jpg'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/fa2302a5eb594acebeceb949d68e97d5/tumblr_p8ho6me3nV1s5mz67o4_500.jpg'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/fdc50667e4679c789180b13ea8f60ad3/tumblr_p8ho6me3nV1s5mz67o5_500.jpg'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/5442f468b83ae8beb60e066c8c81e36f/tumblr_p8ho6me3nV1s5mz67o6_500.jpg'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/2b9d593eaa6f89104ca41f3052646a85/tumblr_p8ho6me3nV1s5mz67o3_500.jpg'},
        timestamp: '2020-06-27T00:01:26.824Z',
        footer: {text: 'starting nightlight', icon_url: client.iconUrl(guild.id, guild.icon)}   
    },]
    let webhooks = await client.getChannelWebhooks(channelWeb);
    if(!webhooks){webhooks = await client.getChannelWebhooks(channelWeb)}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook(channelWeb, 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
    let send = await client.webhookExecute(webhook.id, webhook.token, '',embeds, `Royal Garden - start`, 'https://64.media.tumblr.com/8a7abc614aeaf5a010d166592c1396ec/tumblr_ppnt1j1SKL1wraorto1_500.jpg')
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, '', embeds, `Royal Garden - start`, 'https://64.media.tumblr.com/8a7abc614aeaf5a010d166592c1396ec/tumblr_ppnt1j1SKL1wraorto1_500.jpg')}
  
}