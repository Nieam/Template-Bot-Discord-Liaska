const Discord = require('discord.js')
const moment = require("moment")
const config = require('./config.json')

module.exports.run = async(client, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "🟢 - En ligne",
        idle: "🟠 - Absent",
        dnd: "🔴 - Ne pas déranger",
        offline: "⚫ - Hors ligne/invisble"
      }
        

const Target = message.mentions.users.first() || message.author || message.author.id
const member = message.guild.members.cache.get(Target.id)

if (member.user.bot === true) {
    bot = "✔️ - Oui";
  } else {
    bot = "❌ - Non";
  }

            let embed = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setThumbnail((Target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Nom du membres", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Surnom", `${member.nickname !== null ? `✔️ Surnom: ${member.nickname}` : "❌ Ne possède pas de surnom"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Joue", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "❌ Ne joue pas"}`,inline, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "❌ Ne possède pas de rôle(s)"}`, true)
                .setFooter(message.user ? message.user.username : message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
    
            message.author.send(embed)

            message.delete()
}

module.exports.help = {
    name:"userinfo"
}