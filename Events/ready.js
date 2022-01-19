const Discord = require('discord.js')
const config1 = require('../config1.json')
var prefix = config1.prefix;
var speudo = config1.speudo;

module.exports = async (client, message) => {
    console.log(`${client.user.username} est en ligne !`);

    setInterval(function() {
        let statusstyle = [
            `${prefix}help`,
            `Dev ${config1.speudo}`
        ]
        
        let status = statusstyle[Math.floor(Math.random() * statusstyle.length)];
        client.user.setPresence({ activity: { name: status}, status: 'dnd' })
    }, 5000)
};