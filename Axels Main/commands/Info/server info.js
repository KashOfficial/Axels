const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  const now = new Date();
  const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis/1000/60/60/24;
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane'];
    const embed = new Discord.RichEmbed()
                .setAuthor(`${msg.guild.name}` , client.user.avatarURL)
                .setColor(Math.floor(Math.random()*16777215))
                .setTimestamp()
                .addField(`❯ Owner`, `• ${msg.guild.owner.user.username}#${msg.author.discriminator}`)
                .addField('❯ Region',`• ${msg.guild.region}`, true)
                .addField('❯ Roles', `• ${msg.guild.roles.size}`, true)
                .addField('❯ Users', `• ${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
                .addField('❯ Verification Level', `• ${verificationLevels[msg.guild.verificationLevel]}`)
                .addField('❯ Server ID', `• ${msg.guild.id}`, true)
                .addField('❯ Default Channel', `• ${msg.guild.defaultChannel}`, true)
                .addField('❯ Voice Channels', `• ${msg.guild.channels.filter(m => m.type === 'voice').size}`, true)
                .addField('❯ Created', `• ${msg.guild.createdAt}\nThats over ${days.toFixed(0)} days ago !`)
                msg.channel.sendEmbed(embed)
  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["", ""],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 30000,
};

exports.help = {
  name: "si",
  description: "shows server stats",
  usage: "",
  usageDelim: "",
};