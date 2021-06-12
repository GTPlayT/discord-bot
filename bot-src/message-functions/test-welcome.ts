export default async function(message: any, client: any, value: any) {
    try{
        const { default: module} = await import(`../welcome-functions/${message.guild_id}.ts`);
        message.member.user = message.author
        module(message.member, client)
    } catch (err){console.log(err)}
}