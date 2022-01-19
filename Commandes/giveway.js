const Discord = require('discord.js')
const { Module } = require('module')
const config = require("./config.json")
const config1 = require("../config1.json")
var prefix = config1.prefix

module.exports.run = async(client, message, args) => {
message.delete()
const patreonEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🎁・Pour lancer un giveaway :')
  .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
  .setDescription('')
	.setThumbnail(config.Image)
	.addFields(
    { name: `${prefix}start #channel 250s 1 Cadeaux`, value: 'Bon giveaway !' },
  )
	.setTimestamp()
	.setFooter(message.user ? message.user.username : message.author.username, message.author.displayAvatarURL({ dynamic: true }))

  message.channel.send(patreonEmbed)
}

module.exports.help = {
    name:"giveaway"
}