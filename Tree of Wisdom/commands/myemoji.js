const { Util, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'myemoji',
    description: "Embeds!",
    execute(message, args, Discord) {
        message.delete()
        if(!args.length) return message.reply("Please specify some emojis!");

        for(const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);
            if(parsedEmoji.id){
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                message.guild.emojis.create(url, parsedEmoji.name).then((emoji) => message.channel.send(`Added: \`${emoji.url}\``)).then(c => c.delete({timeout: 10000}));
                
            }
        }
    }
}