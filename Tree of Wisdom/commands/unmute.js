const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: "unmute command!",
    execute(message, args, Discord){
        
        message.delete()
        const logs = message.guild.channels.cache.get(`813238230248849409`)
        let mutedRole = message.guild.roles.cache.get('810708859831582760')
        const target = message.mentions.members.first();
        let membertarget = message.guild.members.cache.get(target.id);
        if(target){
            if (!membertarget.roles.cache.has(mutedRole.id)) return message.channel.send(`This user is not muted, dummy :)`).then(c => c.delete({ timeout: 3000}))
            const reason = message.content.split(" ").slice(3).join(" ")
            membertarget.roles.remove(mutedRole)
            message.channel.send(`${target} has been unmuted!`).then(c => c.delete({timeout: 3000}))
            const embed = new Discord.MessageEmbed()
            .setTitle('Unmute')
            .setDescription(`This unmute was executed by: ${message.author}`)
            .addFields(
                {name: 'Name: ', value: `${target}`}, 
                {name: 'ID: ', value: `${target.id}`},
                //{name: 'Reason: ', value: `${reason}`}
            )
            .setColor('#9b00ff')
            logs.send(embed)
        }
    }
}