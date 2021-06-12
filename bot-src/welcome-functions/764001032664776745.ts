export default async function (member: any, client: any) {
    let guild = await client.getGuildPreview('764001032664776745')
    while (!guild){guild = await client.getGuildPreview('764001032664776745')}
    let avatar: string = '';
    const GIF = ['https://64.media.tumblr.com/2e876f84b4e0b6ba00274923aaebb20d/3db573af223f581d-87/s500x750/3758fe3dc8fdf8df1cff222a7e46153bc3de6f55.gif', 'https://64.media.tumblr.com/3062771fcde76159ee6c5a6ec0ad063a/tumblr_pkpriuSreh1smqdb1o1_400.gif', 'https://64.media.tumblr.com/86d59becc090a2abea75fff3aabf58a1/tumblr_pq784zjxKI1tcvan1o1_500.gif', 'https://64.media.tumblr.com/ae96a949e12d5ee41721c9e950fa2676/tumblr_peo1xiRxr11tcvan1o1_500.gif', 'https://64.media.tumblr.com/eb21f9bf90a2db33335700d14ed6254f/tumblr_pcryisVI0g1tcvan1o1_400.gif', 'https://64.media.tumblr.com/603a6fbda3ad5fdf88711a8192e716d2/ba71af7b7676645b-90/s500x750/9033dca3b680f328e4a842bfb52de3c6685c079e.gif', 'https://64.media.tumblr.com/21b1e0755233eca87febd6e925b4099e/tumblr_psmd1lZxo41vkcgjbo1_500.gif', 'https://64.media.tumblr.com/9c93b609942dc1820ed467a8b8ff9510/3615f0978d17e1a7-f0/s540x810/bfddd492ae23f2e83308a9e4d12ff956a7a52860.gif', 'https://64.media.tumblr.com/70d5bd0115437b8cc3ddcac773cbd401/tumblr_pmja4ppCSy1y58ghuo1_500.gif', 'https://64.media.tumblr.com/cd9af1af11cea701cc91a1fffb91cd43/tumblr_pqi7shGRpv1xggw0so1_500.gif', 'https://64.media.tumblr.com/987a206bf246043f48b0bff871ff9712/tumblr_ps7kczxdoE1xggw0so1_500.gif', 'https://64.media.tumblr.com/945d715d72ec61c857c53278fb45391c/tumblr_p7nm6aRG761x8dkuto1_500.gif', 'https://64.media.tumblr.com/4fe4b049e5e8b60f30ce4a088ff039ab/tumblr_pmcfd2AZbS1xggw0so1_500.gif', 'https://64.media.tumblr.com/e8b844ae0a2e13781d8fbbbdebc3054b/tumblr_p5uev3YzOG1x6a7yto1_500.gif', 'https://64.media.tumblr.com/ba052e360abd74bb294841e7432b6278/3123400cfc078eb7-84/s500x750/6f9a84a73b601ac0aa9df7af2cb0d0aec40fce1e.gif', 'https://64.media.tumblr.com/c269f99f3eee1cf189397160ca70b9cd/tumblr_p669awZ5uA1x6a7yto1_500.gif', 'https://64.media.tumblr.com/9084f13653e6af449d56331b6273a989/tumblr_pni52eX0sk1xggw0so1_500.gif', 'https://64.media.tumblr.com/93a2cdb223f9c6d92434a030f3023538/a2a5fb418a4c0824-a0/s500x750/decbae2bb4663039d7be169842634a0b08999c91.gif', 'https://64.media.tumblr.com/5561b63d01276ec4ecd2cf23d699d6a6/tumblr_pi2x42UTAm1xggw0so1_500.gif', 'https://64.media.tumblr.com/b960510bbd050d99f3975cb0ad6f7aa3/tumblr_p5plez300B1x8dkuto1_500.gif', 'https://64.media.tumblr.com/cdee98bb4c3635015a91259c8475e341/tumblr_p62outDqYW1x6a7yto1_500.gif', 'https://64.media.tumblr.com/c2086a3b7d897c02c088768f6ed52cae/b0d74d041920ec86-84/s500x750/d0fa7b6651b2abc87a581a991a83e472e1cd890b.gif', 'https://64.media.tumblr.com/6bfe150c42e5d3b623c2ea0401ce1336/6335ac40417fc165-6b/s500x750/4ea814fba5c93c4190207ebbea97c692dccfdd8e.gif']
    if (member.user.avatar){avatar = client.avatarUrl(member.user.id, member.user.avatar)}
    const embeds = [{
        title: 'New Member',
        author: {name: `${guild.name} - welcome`},
        footer: {text: `You are the ${guild.approximate_member_count}th member • ${guild.name}`, icon_url: client.iconUrl(guild.id, guild.icon)},
        color: 3092790,
        thumbnail: {url: avatar},
        image: {url: GIF[Math.floor(Math.random() * (GIF.length)) - 1]},
        timestamp: member.joined_at,
        description: `Hey oh! Welcome ${member.user.username} to **${guild.name}**, we hope you love your stay and don't forget to check the what we have to offer. Know more about the server here <#835031523547021362>.\n\n*Thank you for choosing ${guild.name}.*`
    }]
    let webhooks = await client.getChannelWebhooks('764001032664776745');
    if(!webhooks){webhooks = await client.getChannelWebhooks('764001032664776745')}
    let webhook: any;
    if (!webhooks.length){
        webhook = await client.createWebhook('764001032664776745', 'Emilia Webhook');
    } else {
        webhook = webhooks[0]
    }
    let send = await client.webhookExecute(webhook.id, webhook.token, `<@!${member.user.id}>`, embeds, `${guild.name} - welcome`, 'https://64.media.tumblr.com/916f97e3d20b25bfe32950f9839f5444/4788592dd3c09859-b6/s250x400/18eb5e69e8fea9e9f1ff63df4e50f7b3a4cde0a6.jpg')
    if(!send){send = await client.webhookExecute(webhook.id, webhook.token, `<@!${member.user.id}>`, embeds, `${guild.name} - welcome`, 'https://64.media.tumblr.com/916f97e3d20b25bfe32950f9839f5444/4788592dd3c09859-b6/s250x400/18eb5e69e8fea9e9f1ff63df4e50f7b3a4cde0a6.jpg')}
    await client.delay(4000)
    if (member.user.bot){
        try{let role = await client.addRole(member.guild_id, member.user.id, '767958515100155904')
        if(!role){role = await client.addRole(member.guild_id, member.user.id, '767958515100155904')}}catch{return}
    } else {
        try{let role = await client.addRole(member.guild_id, member.user.id, '784360314770161684')
        if(!role){role = await client.addRole(member.guild_id, member.user.id, '784360314770161684')}}catch{return}
    }
}