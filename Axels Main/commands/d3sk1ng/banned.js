const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    args = msg.content.split(';').slice(1)
    let log = client.channels.get('328446681651609610');
    if (args.length <1) return   msg.channel.send({
        embed: {
            author: {
            },
            title: `:gear: Command Usage`,
            fields: [{
                name: 'Usage',
                value: `>banrep ;version;feature;duration;timeofbann;`,
            },
            {
                name: "Example",
                value: `>banrep ;VIP;RP;30 Day;Yesterday 12.30 PM;`
            }],
            color: 0xFF0000
        }
            }); 
    const embed = new Discord.RichEmbed()
                .setAuthor('Ban Reports' , client.user.avatarURL)
                .setColor(0xFF0000)
                .setThumbnail('https://i.imgur.com/OxcsAhI.png/')
                .addField('Menu used: (VIP OR PREMIUM):', `${args[0]}`)
                .addField('Features Used:', `${args[1]}`)
                .addField('Duration Of Ban:' , `${args[2]}`, true)
                .addField('Time Of Ban:', `${args[3]}`, true)
                .addField('Sent By' ,`${msg.author.username}#${msg.author.discriminator}`)
                msg.delete();
             client.channels.get(log.id).sendEmbed(embed)
                    return msg.channel.send({
        embed: {
            author: {
            },
            fields: [{
                name: 'Confirmation: ',
                value: `:white_check_mark: Report Sent To <#328446681651609610>`
            }],
            color: 0xFF0000
        }
  });
  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["", ""],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "banrep",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};