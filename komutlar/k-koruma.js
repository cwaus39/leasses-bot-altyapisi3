const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Leasess - Koruma Komutları`, client.user.avatarURL)
.setColor('RED')
.setTitle('Koruma Komutları')
.setDescription(`
**Yakında**`) 
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'koruma'
};