const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
message.delete()

var member = message.mentions.members.first();

if (!args[0]) {
    member = message.member;
}

if (!member) {
    return message.reply("❌ - Erreur:  Merci de mentionner un utilisateur !")
}

const Target = message.mentions.users.first() || message.author || message.author.id
const Member = message.guild.members.cache.get(Target.id)

const creaEmbed = new Discord.MessageEmbed()
    .setAuthor(`${Target.username}`)
    .setColor("#00BDFF")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("Voici la date de création de ton compte discord !", `\`${message.author.createdAt}\``)

message.channel.send(creaEmbed);
}

module.exports.help = {
    name:"crea"
}