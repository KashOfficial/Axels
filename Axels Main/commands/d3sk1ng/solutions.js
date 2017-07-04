const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    args = msg.content.split(';').slice(1)
    let log = client.channels.get('313286511292448768');
       msg.delete();
     if (args.length < 1) return msg.channel.send({
        embed: {
            author: {
            },
            title: `:gear: Command Usage`,
            fields: [{
                name: 'Usage',
                value: `>sadd ;solution No;issue/problem;solution`,
            },
            {
                name: "Example",
                value: `>sadd ;1;enter issue/probllems here;Enter Solutions;`
            }],
            color: 0x04FD22
        }
        
     });
    const embed = new Discord.RichEmbed()
                .setColor(0x04FD22)
                .setThumbnail('https://i.imgur.com/dKxZQwp.png/')
                .setTitle('Solution Center')
                .addField('Solution:', `${args[0]}`)
                .addField('Issue/Question::', `${args[1]}`)
                .addField('Solution', `${args[2]}`)
                .addField('Credits:' , `${msg.author.username}`)
                
      client.channels.get(log.id).sendEmbed(embed)
      return msg.channel.send({
        embed: {
            author: {
            },
            fields: [{
                name: 'Confirmation',
                value: `:white_check_mark: Solution Sent To <#313286511292448768>`
            }],
            color: 0x00CC00
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
  name: "sadd",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};