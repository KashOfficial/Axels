    const Discord = require('discord.js');
    exports.run = (client, msg, member, args) => {
    let user = msg.mentions.users.first();
    args = msg.content.split(';').slice(1);
    if(!user) return;
     const embed = new Discord.RichEmbed()
     .setTitle(':heart: Love')
     .addField(`${msg.author.username} is capable of loving ${user.username} ${Math.floor(Math.random()*100)}%`, 'This is a beta commad !')
     
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
  name: "love",
  description: "Rings a bell on the server shaming the mentioned person",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};