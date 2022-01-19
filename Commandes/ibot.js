const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://www.youtube.com/c/SOUKii')
      .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '----', inline: true },
          { name: '⌨ | Développeur :', value: `${config.Speudo}`, inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(message.user ? message.user.username : message.author.username, message.author.displayAvatarURL({ dynamic: true }));

  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}