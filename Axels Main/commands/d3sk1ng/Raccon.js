
const Discord = require('discord.js');
exports.run = async (client, msg, member, args) => {

    const embed = new Discord.RichEmbed()
                
                .setColor(Math.floor(Math.random()*16777215))
                .setTimestamp()
                .addField(`❯ Justin Twat`, `• hey guys this sucks. I pulled an all nighter last night and around 6 in the morning I was snooping around the house and found my dads viagra and decided to take it and then jack off to porn. I had completely forgot i had a doctors appointment and my mom came to wake me up while i was jacking off in my room so i had to run over to the door and hold it shut, which took all my strength to hold that bitch out. Now i was very arroused from watching porn and being disrupted in the middle of session. We get in the car and get to the doctors office and i go in and im in the room. Finally the doctor comes in (who looks about 80 years old). Anyways i lie down and as he fondles my testicles i get a raging boner and i almost instantly cum all over his hand and my self. I was so embarassed, i didnt know what to do and in an attempt to somehow cover it i said "hahaha sorry man i forgot to tell you im gay". At this point he just bert stared me and i just put my head down.`)
                .setFooter('HUGE TWAT')
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
  name: "justin",
  description: "Shows a users info",
  usage: "",
  usageDelim: "",
};