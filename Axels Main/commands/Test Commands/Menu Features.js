const Discord = require('discord.js');
exports.run = async (client, msg, member, args) => {
args = msg.content.split(';').slice(1)
    if (args.length <1) return   msg.channel.send({
        embed: {
            author: {
            },
            title: `:gear: Command Usage`,
            fields: [{
                name: 'Usage',
                value: `>mfadd ;version;feature added;`,
            },
            {
                name: "Example",
                value: `>mfadd ;0.0;Money Bags[ETC....];`
            }],
            color: 0xFF0000
        }
            }); 
    const embed = new Discord.RichEmbed()
                
                .setThumbnail('https://i.imgur.com/JqkMiDf.png/')
                .setColor(Math.floor(Math.random()*16777215))
                .setTitle('Menu Feature')
                .addField(`❯ Version`, `• ${args[0]}`)
                .addField('❯ Features Added', `• ${args[1]}`)
               
                msg.channel.sendEmbed(embed)

  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["menuadd", "menufeatures"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "mfadd",
  description: "Shows a users info",
  usage: "",
  usageDelim: "",
};