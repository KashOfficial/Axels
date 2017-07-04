
const Discord = require('discord.js');
const dateFormat = require('dateformat');
const stripIndents = require('common-tags').stripIndents;
dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
exports.run = async (client, msg, args) => {
    let member = msg.guild.member(msg.mentions.users.first());
    let user = msg.mentions.users.first();
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];
    const now = new Date();
    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis/1000/60/60/24;
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined/1000/60/60/24;
    const embed = new Discord.RichEmbed()
                .setAuthor(`${user.username}#${msg.author.discriminator}` , client.user.avatarURL)
                .setColor(Math.floor(Math.random()*16777215))
                .setThumbnail(user.displayAvatarURL)
                .setTimestamp()
                .addField(`❯ Members Details`, `• Username: ${user.username}#${msg.mentions.users.first().discriminator}\n• Roles: ${roles.join(', ')}\n• Joined Discord: ${dateFormat(member.joinedAt)}\n• Nickname: ${member.nickname}`)
                .addField(`❯ User Details`, `• Status: ${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}\n• Game: ${(user.presence.game && user.presence.game && user.presence.game.name) || 'Isn\'t playing a game currently.'}\n• Account Created: ${dateFormat(user.createdAt)}\n• Account ID: ${user.id}\n• Discriminator: #${user.discriminator}`)
                .addField('❯ Other Info', `• Joined This Server ${daysJoined.toFixed(0)} Day's Ago.`)
                .setFooter('As Off')
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
  name: "ui",
  description: "Shows a users info",
  usage: "",
  usageDelim: "",
};