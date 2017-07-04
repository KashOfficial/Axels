const Discord = require('discord.js');
exports.run = async (client, msg, member, args) => {
args = msg.content.split(';').slice(1)
    const embed = new Discord.RichEmbed()
                
                .setColor(Math.floor(Math.random()*16777215))
                .setTimestamp()
                .addField(`❯ ImRaccoonGaming`, `• ${args[0]}`)
                .addField('❯ Other', '${args[1]}')
                msg.channel.sendEmbed(embed)

  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["hw", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "lol1",
  description: "Shows a users info",
  usage: "",
  usageDelim: "",
};