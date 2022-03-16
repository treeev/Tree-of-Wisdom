const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'rolecheck',
    description: "yup",
    execute(message, args, Discord){
        message.delete()
        const rolechk = message.content.split(" ").slice(1).join(" ")
        if(message.member.roles.cache.find(r => r.name === rolechk)) {
            message.channel.send(`You have the ${rolechk} role `).then(c => c.delete({ timeout: 3000 }))
       } else if(!message.member.roles.cache.find(r => r.name === rolechk)) {
            message.channel.send(`You do not have the ${rolechk} role `).then(c => c.delete({ timeout: 3000 }))
       }
    }
}


