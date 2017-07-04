const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .addField('Bot Owner', 'IAmNavaz#9489')
        .addField('Curent Version', '0.1.8', true)
        .addField('Developer', 'IAmNavaz#9489', true)
        .addField('PM2', '[PM2 Module](https://http://pm2.keymetrics.io/)', true)
        .addField('Node.js', '[v8.1.2](https://nodejs.org/en/)',true)
        .addField('Discord.js', '[11.1.0](https://discord.js.org/#/)', true)
        .addField('Komada', '[v0.20.0 Framework](https://komada.js.org/komada-pieces.html)', true)
        .addField('Creation Date', '[03/07/2017](02:46 AM)', true)
        .addField('Public Invite', 'Returned False', true)
        .addField('Axels Server', '[Axels](https://discord.gg/ysSptyX)',true)
        .addField('Huge Thanks To', 'Fildon_Prime - JustinWick - ImRaccoonGaming',true)
        .addField('About', 'A fully customizable bot for your need, it is currently a beta version as it is being tested so we can make this a final product.')
        
       message.channel.sendEmbed(embed);
      
    

  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "info",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};