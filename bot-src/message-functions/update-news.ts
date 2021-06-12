export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview('764001032664776745')
    const NEWSIMG = ['https://64.media.tumblr.com/ef27508209d4b8c30d7698f8a87757bf/c92f41f7563d45be-58/s250x400/a49c5391e2637413e2c3ff39239b5d1bbd39fdfe.jpg', 'https://64.media.tumblr.com/ad688b1662f5a2128b405fe7262df2bd/c92f41f7563d45be-15/s250x400/a1438dab744663dd02dac496b7997941b5f0f9ef.jpg', 'https://64.media.tumblr.com/f4af3601c4e675d6f9cd1bcb23ed3f5a/c92f41f7563d45be-5f/s250x400/3f88b9cf93a87258879654500749609132e3a598.jpg', 'https://64.media.tumblr.com/17577db4666d13304909b7ef77863ae0/c92f41f7563d45be-e9/s250x400/0fc5fdaed8cd368060e81343a7ff444bce04dd2c.jpg', 'https://64.media.tumblr.com/e59381bebae6423a8b633ddb62ba43de/c92f41f7563d45be-52/s250x400/dd4fda491960b428463a470164a5c7a060e4e0ff.jpg', 'https://64.media.tumblr.com/716b30e0ebe20d10c3183bba45acb5bd/c92f41f7563d45be-91/s250x400/3bb71b98d06cbc3aff5147fd297ee44332c63aba.jpg']
    const AVATAR = NEWSIMG[Math.floor(Math.random() * (NEWSIMG.length)) - 1]
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    const embeds = [{
        author: {name: 'New theme - June month'},
        description: 'New theme June month is out now, based around monsoon season and city lights.\n\n*Hope you like it...*',
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/92bdb494be31f14f7910cb762ee2b403/fd0c195b933e2d26-22/s500x750/51e561ebb4571c9edc371f14702db64306d007f5.gif'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/7b5a56146981064a84753b85d06ae5f4/fd0c195b933e2d26-8f/s500x750/4dc3e7e2cbc383297923881040e695de44b4995c.gif'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/9b4dacff384b74452af6b2f0f332f027/69fdb790b37a01b1-64/s500x750/42c952e318ded9633a7e671f8a95409fd875c4cc.gif'}   
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/811d62464dc921a5418fa6edc7c5c5e7/fd0c195b933e2d26-46/s500x750/ca4bbe7f1bec5ce81ee4fbed6809887c9db02f5a.gif'},
        timestamp: '2021-07-01T07:00:00.000Z',
        footer: {text: 'Next theme • July month'}   
    },]
    let webhooks = await client.getChannelWebhooks('849146973206347777');
    if(!webhooks){webhooks = await client.getChannelWebhooks('849146973206347777')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('849146973206347777', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
    let send = await client.webhookExecute(webhook.id, webhook.token, '',embeds, `${guild.name} - news letters`, AVATAR)
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, '', embeds, `${guild.name} - news letters`, AVATAR)}
  
}