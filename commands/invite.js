const Discord = require('discord.js')

exports.run = (bot, message, args, func) => {
    let link = ('https://top.gg/bot/625374033365565465')
    const embed = new Discord.MessageEmbed()
        .setAuthor('Me adicione!', bot.user.displayAvatarURL())
        .setDescription(`Me ajude a fazer mais servidores felizes! [Clique aqui](${link}) e me adicione em seu servidor! `)
        .setColor('#2A1250')
    message.channel.send(message.author, embed)
}