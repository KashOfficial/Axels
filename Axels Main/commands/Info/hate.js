    const Discord = require('discord.js');
    exports.run = (client, msg, args) => {
    let user = msg.mentions.users.first();
    args = msg.content.split(';').slice(1)
    if(!user) return;
     const embed = new Discord.RichEmbed()
     .setTitle(':rage: User Has Been Disliked')
     .addField(`${msg.author.username} dislikes ${user.username} at a whopping **${Math.floor(Math.random()*100)}%**`, `${args[0]}`)
     
      msg.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "hate",
  description: "Rings a bell on the server shaming the mentioned person",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};