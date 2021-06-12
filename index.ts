import Client from './src/client/Client.ts';
import { Identify } from './src/constants/Payloads.ts';

Identify.d.properties.$browser = 'Discord iOS';

const botIdentity = {
    TOKEN: 'NzYzMjk1MjY4NTkzODYwNjE4.X31oHQ.bnmTTn_8zQzdEYvUpskYhZnaby8',
    WAKEUP: 'em ',
    EMBEDCOLOR: 9699539,
    PROCESSING: ['847113439645532181', '847112072474656858', '830738447660351558']
}

const client = new Client();
client.owner = '746369049935740999';

client.login(botIdentity.TOKEN);
client.status(`${botIdentity.WAKEUP}help`, 'online', 2)



client.on('ready', async () => {
    console.log(`>>> Logged in as ${client.user.username} <<<`);
    console.log(`>>> logged in on ${client.guilds.length} guilds <<<`);
    console.log(`>>> Session ID: ${client.sessionID} <<<`);
    console.log(`>>> Bot applicaiton ID: ${client.application.id} <<<`)
    console.log(`>>> Bot owner ID: ${client.owner} <<<`)
});

client.on('guild member add', async (member: any) => {
    try{
        const { default: module} = await import(`./bot-src/welcome-functions/${member.guild_id}.ts`);
        module(member, client)
    } catch (err){console.log(err)}
});

client.on('message', async (message: any) => {
    if (message.content.slice(0, botIdentity.WAKEUP.length) == botIdentity.WAKEUP){
      const _function = message.content.slice(botIdentity.WAKEUP.length,).split(' ', 1)[0]
      const _value = message.content.slice(botIdentity.WAKEUP.length + _function.length + 1,)
      try{
        //  try{client.addReaction(message.channel_id, message.id, 'processing', '847113439645532181')} catch {}
        const { default: module} = await import(`./bot-src/message-functions/${_function}.ts`);
        module(message, client, _value.replace(/\s/g, ""))
      } catch (ERR) {
        console.log(ERR)
        try {
         const res = client.reply(message.channel_id, message.id,`**${_function}** is not a function of the bot, maybe you mispelled it.`)
         if (!res) {
           await client.reply(message.channel_id, message.id, `**${_function}** is not a function of the bot, maybe you mispelled it. [BEING RATE LIMITED]`)
         } 
      }catch (ERR) { console.log(ERR)}
    }
  }
  });


client.on('interaction create', async (interaction: any) => {
  if (interaction.data.custom_id.slice(0, 3) == 'ra_'){
    const roleID = interaction.data.custom_id.slice(3,)
    if (interaction.member.roles.includes(roleID)){
      let role = await client.removeRole(interaction.guild_id, interaction.member.user.id, roleID)
      if(!role){role = await client.removeRole(interaction.guild_id, interaction.member.user.id, roleID)}
      await client.callback(interaction.id, interaction.token, `Role removed <@&${roleID}>`, 64)
    } else {
      let role = await client.addRole(interaction.guild_id, interaction.member.user.id, roleID)
      if(!role){role = await client.addRole(interaction.guild_id, interaction.member.user.id, roleID)}
      await client.callback(interaction.id, interaction.token, `Role given <@&${roleID}>`, 64)
    }
  }
})