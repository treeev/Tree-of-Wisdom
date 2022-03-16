const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "ban command!",
    execute(message, args, Discord){

        message.delete()
        const target = message.mentions.members.first()
        const reason = message.content.split(" ").slice(2).join(" ")
        const logs = message.guild.channels.cache.get(`813238230248849409`)
        if(target){
            target.ban({
                reason: `${reason}`}).then(() => {
                message.channel.send("Bye BB <@" + target + "> has been banned from the server for " + reason + "!")
                .then(c => c.delete({ timeout: 5000}))
            })
            const embed = new Discord.MessageEmbed()
            .setTitle('BAN')
            .setDescription(`This BAN was executed by: ${message.author}`)
            .addFields(
                {name: 'Name: ', value: `${target}`}, {name: 'ID: ', value: `${target.id}`},
                {name: 'Reason: ', value: `${reason}`})
            .setColor('#9b00ff')
            .setTimestamp()
            logs.send(embed)
        }
    }
}