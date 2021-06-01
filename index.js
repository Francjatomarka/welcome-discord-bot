const Discord = require("discord.js")
const bot = new Discord.Client();
bot.on("ready", () => {
    console.log(bot.user.username + " is online.")
});
bot.on('message', async message =>{
    if (message.content === '!ping') {
        message.reply('Pong!');
      }
})

bot.on('guildMemberAdd',async member =>{
    const guild = member.guild;
    const welcomeembed = new Discord.MessageEmbed()
    .setColor('#33ff00')
    .setTitle(member.user.username +"#"+ member.user.discriminator)
    .setDescription('Witamy na serwerze '+ member.guild.name + '.Cieszymy się że z nami jestes, mamy nadzieję że zostaniesz z nami na dłużej! Pamiętaj aby przeczytać regulamin serwera. Jesteś naszym '+ guild.memberCount +' użytkownikiem!')
    .setTimestamp()
    .setFooter("Witaj!")
    try
    {
    var channel = bot.channels.cache.get("channelid");
    channel.send(welcomeembed) 
    }
    catch(e)
    {
        console.log(e)
    }
})

bot.login('token')