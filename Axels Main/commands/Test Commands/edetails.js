const Discord = require('discord.js');
exports.run = (bot, msg) => {

const embed = new Discord.RichEmbed()
.setTitle("Elusive Menu ToS")
.setAuthor(`${msg.author.username}`, bot.user.avatarURL)
.setColor(0x00AE86)
.setImage("http://i.imgur.com/AZodupj.jpg")
.addField('1.','Elusive is not held responsible for any bans caused in GTA Online. Our effort is to make the menu as safe as possible but occasional banwaves may happen, outside of our power.')
.addField('2.','Once you have paid for the menu you cannot charge back. We only accept Friends and Family payments through paypal and steam giftcards. This may expand over time. Chargebacks will result in a menu ban and we will contact PayPal to show we have given you what you paid for. There\'s no point in charging back, basically.')
.addField('3.','If there would be a reason for us to suspend or limit your menu access, we will do so. We will let you message a staff member who will take care of the problem with you.\n Offenses might be stuff like sharing the menu, talk shit about the menu, advertise other menus, etc.\n- First menu suspension: 48 hours\n- Second menu suspension: 10 days\n- Thrird menu suspension: Permanently.')
.addField('4.','We might reject your payment if we feel like you are not serious about buying the menu. If an owner or administrator thinks you\'re fishy, he might reject your payment for that reason.')
.addField('5.','Once you\'ve paid there is no way to revert the payment. If you\'re unsure about buying the menu please buy 3 months first so you know what it is like.')
.addField('6.','Sharing this service with other people that have not paid, without a staff member knowing this, we will suspend/ban you from the menu.')
.addField('7.','If a staff member gets reports of you fucking up other Elusive users, we might suspend your account for 48 hours. We are one community, not here to fuck eachother up! (show proof when reporting other user)**',true)
.addField('If you hereby agree on all our terms reply with' , ' ``I agree with your TOS.``',true)
        msg.delete()
        msg.channel.sendEmbed(embed).console.log(err);
        return;

  };

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["", ""],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "red",
  description: "shows server stats",
  usage: "",
  usageDelim: "",
};