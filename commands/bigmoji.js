const { Util, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bigmoji',
    description: "enlargeEmojis",
    execute(message, args, Discord){
        message.delete()
        if(!args.length) return message.reply("Please specify some emojis!");

        for(const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);
            if(parsedEmoji.id){
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                const embed = new Discord.MessageEmbed()
                .setImage(url)
                message.channel.send(embed);
            }
        }
    }
}