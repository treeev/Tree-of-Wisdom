const { Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'gayrate',
    description: "How gay are you?",
    execute(message, args){
        message.delete()
        const user = message.mentions.members.first();
        if(message.author.id === `530476803072983051`) {
            const embed = new MessageEmbed()
            .setTitle(`GayRate Machine`)
            .setDescription(`<@530476803072983051> is 100% Gay` )
            .setColor('#9b00ff')
            .setFooter(`Command ran by ${message.author.tag}`)
            message.channel.send(embed)
        } else {
        if(user) {
            const rater = Math.floor((Math.random() * 100) + 1);
            if(user.id === `530476803072983051`){
                const embed = new MessageEmbed()
                .setTitle(`GayRate Machine`)
                .setDescription(`<@530476803072983051> is 100% Gay` )
                .setColor('#9b00ff')
                .setFooter(`Command ran by ${message.author.tag}`)
                message.channel.send(embed)
            } else {
            const embed = new MessageEmbed()
            .setTitle(`GayRate Machine`)
            .setDescription(`${user} is ${rater}% Gay` )
            .setColor('#9b00ff')
            .setFooter(`Command ran by ${message.author.tag}`)
            message.channel.send(embed)
            }
        } else {
            const rate = Math.floor((Math.random() * 100) + 1);
            const embed = new MessageEmbed()
            .setTitle(`GayRate Machine`)
            .setDescription(`${message.author} is ${rate}% Gay` )
            .setColor('#9b00ff')
            .setFooter(`Command ran by ${message.author.tag}`)
            message.channel.send(embed)
            }
        }
    }
}