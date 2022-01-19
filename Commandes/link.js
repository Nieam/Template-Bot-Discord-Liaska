const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Voici les liens me concernant.')
	.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
	.addFields(
    { name: 'Youtube', value: config.Youtube },
    { name: 'Twitch', value: config.Twitch },
    { name: 'Twitter', value: config.Twitter },
    { name: 'Tiktok', value: config.Tiktok },
    { name: 'Insta', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(message.user ? message.user.username : message.author.username, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"liens"
}