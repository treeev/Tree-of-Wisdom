const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "muteCommand!",
    execute(message, args, Discord){
        
            message.delete()
           
            const ms = require('ms')
            const logs = message.guild.channels.cache.get(`813238230248849409`)
            let mutedRole = message.guild.roles.cache.get('810708859831582760')
            //let mutedRole = message.guild.roles.cache.find(role => role.name === 'muted');
            const target = message.mentions.members.first();
            let membertarget = message.guild.members.cache.get(target.id);
            if(target){
                if (membertarget.roles.cache.has(mutedRole)) return message.channel.send(`This user already has the muted role`).then(c => c.delete({ timeout: 6000}))
                const reason = message.content.split(" ").slice(3).join(" ")
                
                let timer = args[1]

                if (!timer) return message.channel.send(`Please input a time`).then(c => c.delete({timeout: 3000}))
                let time = ms(ms(timer), {long: true})
                membertarget.roles.add(mutedRole)
                message.channel.send(`${target} has been muted!`).then(c => c.delete({timeout: 3000}))
                const embed = new Discord.MessageEmbed()
                .setTitle('MUTE')
                .setDescription(`This mute was executed by: ${message.author}`)
                .addFields(
                    {name: 'Name: ', value: `${target}`}, {name: 'ID: ', value: `${target.id}`},
                    {name: 'Length: ', value: `${timer}`},
                    {name: 'Reason: ', value: `${reason}`},
                )
                .setColor('#9b00ff')
                logs.send(embed)
                setTimeout(() => {
                    target.roles.remove(mutedRole)
                    message.channel.send(`${target} has been unmuted!`).then(c => c.delete({timeout: 5000}))
                }, ms(timer))    
            } 
        }
    }
