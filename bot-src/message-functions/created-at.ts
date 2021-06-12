export default async function(message: any, client: any, value: any) {
    try{
    const accountCreatedAt: any = await client.snowflake(value);
    console.log(accountCreatedAt.date)
    console.log(accountCreatedAt)
    let send = await client.send(message.channel_id, `This ID: **${value}** was created at **${accountCreatedAt.date.toDateString()} during ${accountCreatedAt.date.toTimeString()}**.`)
    } catch {await client.send(message.channel_id, `This ID: **${value}** is invalid`)}
}