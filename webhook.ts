const embed1 = {
    title: '☽⋆˙⊹ミ Welcome to Royal Garden! »',
    description: `⋟ We're a growing community that devotes ourselves to giving all of our members the best experience possible, while fitting into a fantasy theme. We are always taking suggestions to better our server, and activities that will enhance your experience!\n\n**This server has alot of anime features, but we do not draw the line there. This server can be accommodated to anyone's interests as long as you follow our rules, and the Discord TOS.**\nFollow those, and we'll have no problems!`,
    thumbnail: {url: 'https://images-ext-1.discordapp.net/external/4oC6pG_l5G4z4CmE8vPq8rzGuPz_eOkGVxMakVbN1k8/https/4.bp.blogspot.com/-1RNVgiwhBkc/WsBmCn6HdjI/AAAAAAAWgDk/vwsf-65T7MwjkJ0ta5HwrwLVJjAYSf5HgCLcBGAs/s1600/AW891222_20.gif'}
}

const embed2 = {
    title: `☽⋆˙⊹ミ Our server's goal »`,
    description: `⋟ Here, we hope to build a community that is built on respect, communication, family and trust. We want to be somewhere that anyone can feel comfortable being in chat, or using any of the bots for entertainment.\n\n⋟ We don't want to limit what you can talk about, but if you think your topic or any conversation is going to effect how someone else feels, we ask you to not talk about a sensitive topic. A simplified outline is given inside of <#773028250603356160>, but the topics are up to the staff's unbiased discretion.\n**If you need to reach any staff member, you can ping the staff role, or the person directly.**\n⋟ For accessibility, the role you can ping if you need something, would be @deleted-role. Any active staff member will respond to this ping. If needed, you can dm/ping a staff member directly.`.
    thumbnail: {url: `https://images-ext-2.discordapp.net/external/b51W3JTbhUNvtv5WpqdkoYnxt9eQY7ruO1TUZA2Zve8/https/4.bp.blogspot.com/-cnjrc0iuuKY/WsBl7QU6yeI/AAAAAAAWgCc/QD96Rj9FA-I1peuS6TvX2plJdFuLsLbYACLcBGAs/s1600/AW891222_02.gif`}
}

const embed3 = {
    title: `☽⋆˙⊹ミ Interactive Channels »`,
    description: `All the channels here hold value, but there are some channels that are going to be the most useful! Please feel free to refer to these as you wish! We offer many channels for personal interests in the **Castle Quarter** category!\n\n⋟ <#773028250603356160> - These are an outline of our server's rules.\n⋟ <#773028831329648651> - If you're interested in personal roles, this is the place for you!\n⋟ <#773408403350356019> - This channel is for any language that is not English.\n⋟ <#843390712409489429> - Our main chat, that is always active with conversations galore!\n`
}




const content = {embeds:[]}

async function createWebhook(content: any){
    const headers = {'Content-Type': 'application/json'};

    const response = await fetch(`https://discord.com/api/webhooks/846310052968923156/IgeYPgmfItrucHvOygKoxl6vfiMYNEvsQxR0UFvXPJxOHUsLtdfEa0NLFj2KPKkyd-CX`, {
        method: 'POST',
        headers,
        body: JSON.stringify(content)
    });}
createWebhook(content)