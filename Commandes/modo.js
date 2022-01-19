const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
const modoEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('⚒ ・Liste des commandes de modération.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
	.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
	.addFields(
    { name: '🗑-clear', value: '(Pour supprimer des messages.)' },
	{ name: '💬-msg', value: '(Pour envoyer un message avec le bot.)' },
    { name: '⚠️-kick', value: '(Pour kick.)' },
    { name: '❌-ban', value: '(Pour ban.)' },

    )
	.setTimestamp()
	.setFooter(message.user ? message.user.username : message.author.username, message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send(modoEmbed)
}

module.exports.help = {
    name:"modo"
}