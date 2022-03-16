const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'av',
    description: "Embeds!",
    execute(message, args, Discord){
        message.delete()
               
        if(message.mentions.users.size){
            const user = message.mentions.users.first()
            if(user){
        const embed = new Discord.MessageEmbed()
        .setColor('#83F3E6')
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL({dynamic: true, size: 4096}))
        .setFooter('Brought to you by T.O.W.')
        message.channel.send(embed);
            } else{
                message.channel.send("Sorry no one found with that name. They may have left the server; check mutual servers.")
            }
        }else {
            const embed = new Discord.MessageEmbed()
            .setColor('#83F3E6')
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, size: 64}))
            .setImage(message.author.displayAvatarURL({dynamic: true, size: 4096}))
            .setFooter('Brought to you by T.O.W.')
            message.channel.send(embed);
            }
    }
}