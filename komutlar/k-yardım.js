const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('#faff0a')
.setThumbnail(client.user.avatarURL)
.setDescription(`
<a:alarm1:734820437288157204> **Davet Etmek İçin:** \`+davet\`  
<a:tik3:734820425195847760> **Komutlara Bakmak İçin:** \`+yardım\` 
<a:koyukrmztac:759425643460427828> **Prefix:** ${prefix}

**Yardım Menüsü**
:white_small_square: | **${prefix}yetkili** : Moderasyon Komutlarını Listeler.
:white_small_square: | **${prefix}koruma** : Koruma Komutlarını Listeler.
:white_small_square: | **${prefix}kullanıcı** : Kullanıcı Komutlarını Listeler.
:white_small_square: | **${prefix}eğlence** : Eğlence Komutlarını Listeler.
:white_small_square: | **${prefix}bot** : Bot Komutlarını Listeler.

**<a:right:754429737685876807> Linkler**

<a:elmas:759416919471554561> **[Davet Et](https://discord.com/api/oauth2/authorize?client_id=722731500080070737&permissions=8&scope=bot)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<a:elmas:759416919471554561> **[Destek Sunucum](https://discord.gg/hQZPZnw)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<a:elmas:759416919471554561> **[Website](https://pngimage.net/wp-content/uploads/2018/06/yak%C4%B1nda-png-5.png)**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)
.setImage('https://media.discordapp.net/attachments/755384824268718164/760072055592583188/standard_4.gif')
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","h"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};