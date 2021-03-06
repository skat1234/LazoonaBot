const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.member.permissions.has('MANAGE_MESSAGES', true)) {
        if (!args[0]) { 
        return;
        }
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} mensagens foram apagadas.`).then(msg => msg.delete(5000))
        })
    } else if (message.member.permissions.missing('MANAGE_MESSAGES', true)) {
      const err = new Discord.MessageEmbed()
      .setTitle('Calma aí!')
      .setDescription('Você não tem a permissão `GERENCIAR_MENSAGENS`! Para ultilizar esse comando você precisa dessa permissão!')
      .setColor('#2A1250')
        message.channel.send(err)
    }
}