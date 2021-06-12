export default async function(message: any, client: any, value: any) {
    if (message.author.id != client.owner){return}
    let guild = await client.getGuildPreview('764001032664776745')
    const AVATAR = 'https://64.media.tumblr.com/8de49da6cd977918de67fa290b7c539e/e318db75842a802c-90/s500x750/84eebc814269da6f749036e91a5cd4096944c70e.png'
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    const embeds = [
    {
        author: {name: 'roles'},
        color: 3092790  
    },
    {
        color: 3092790,
        image: {url: 'https://64.media.tumblr.com/2bff98124df32da81793943fb2e63373/tumblr_pp6hzowydi1tmflsso3_500.jpg'}   
    },
    {   description: `*grab your roles here*`,
        color: 3092790,  
    },
    {   color: 3092790,
        image: {url: 'https://64.media.tumblr.com/f2e338688d1f71fbf1ac03288bc51bf0/tumblr_pp6hzowydi1tmflsso2_500.jpg'}   
    },
    {
        color: 3092790,
        timestamp: '2021-06-01T14:11:34.697Z',
        footer: {text: 'monsūn theme roles'}   
    },]
    let webhooks = await client.getChannelWebhooks('852240685376733245');
    if(!webhooks){webhooks = await client.getChannelWebhooks('852240685376733245')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('852240685376733245', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }

    const components = [
        {
            type: 1,
            components: [
                {
                    type: 2,
                    label: "Elite Gang",
                    style: 2,
                    custom_id: "ra_786580194663596062"
                },
                {
                    type: 2,
                    label: 'Brilliance Bricks',
                    style: 2,
                    custom_id: 'ra_793374838914940928'
                },
                {
                    type: 2,
                    label: 'Brave Folks',
                    style: 2,
                    custom_id: 'ra_792708409559744544'
                },
                {
                    type: 2,
                    label: 'Juniors Acade',
                    style: 2,
                    custom_id: 'ra_786650875417722911'
                },
            ]
        }
    ]
    let send = await client.webhookExecute(webhook.id, webhook.token, '',embeds, `roles`, AVATAR, components)
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, '', embeds, `roles`, AVATAR, components)}
  
}
