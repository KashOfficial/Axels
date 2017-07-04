    const Discord = require('discord.js');
    exports.run = (client, msg, args) => {
    let user = msg.mentions.users.first();
    args = msg.content.split(';').slice(1)
    if(!user) return;
     const embed = new Discord.RichEmbed()
     .setAuthor(`${user.username}'s Knowledge Sucks` , user.displayAvatarURL)
     .addField(`${user.username} has a stupidity rate of **${Math.floor(Math.random()*100)}%**`, `Damn Son !`)
     
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
  name: "stupid",
  description: "stupid user",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};