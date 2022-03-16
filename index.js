const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES"
]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
//Beginning of Code ----------------------------------------------------------------------------------------------------------

//How to send a message
client.on('messageCreate', message => {   
        if (message.content == `hi`){
            
                message.reply("Hello Degenerates!")
            }

})






//End of Code_____________________________________________________________________________________________________________________________
// last line
client.login(process.env.TOKEN)
