const Discord = require('Discord.js');
exports.run = (client, msg, args) => {
let user = msg.mentions.users.first();

msg.delete();
if (!user) return;
const embed = new Discord.RichEmbed()
.setAuthor(`Fuck Boy Meter !` , user.displayAvatarURL)
.addField(`${user.username} **Fuck Boy** levels are at **${Math.floor(Math.random()*100)}%**`, 'Confirmed Fuck Boy !')

msg.channel.sendEmbed(embed)


};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "fuckboy",
  description: "stupid user",
  usage: "<user:mention>",
  usageDelim: "",
  type: "commands",
};