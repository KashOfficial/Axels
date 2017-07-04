const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let log = client.channels.get('292690057540796427');
    args = message.content.split(' ').slice(1)
     if (args.length < 1) return message.channel.send({
        embed: {
            author: {
            },
            title: `:gear: Command Usage`,
            fields: [{
                name: 'Usage',
                value: `[p]suggest ;Your Suggestions Here;`,
            },
            {
                name: "Example",
                value: `[p]suggest ;BlahBlahBlahBlahBlah;`
            }],
            color: 0xFF0000
        }
            }); 
    const embed = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setTimestamp()
                .setThumbnail('https://i.imgur.com/sQNsuAw.png/')
                .setTitle('New Suggestion')
                .addField('Suggestion Is:', `${args[0]}`)
                .addField('Suggestion By:' , `${message.author.username}`)
                
                
      message.delete();
      client.channels.get(log.id).sendEmbed(embed)
      return message.channel.send({
        embed: {
            author: {
            },
            fields: [{
                name: 'Confirmation',
                value: `:white_check_mark: Suggestion Sent To <#328446681651609610>`
            }],
            color: 0x00CC00
        }
    
      });

};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["suggestion", ""],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "suggest",
  description: "Sends a suggestion to suggestion channel (only for d3sk1ng server)",
  usage: "",
  usageDelim: "",
};