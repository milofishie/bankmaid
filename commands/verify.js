const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'verify',
	description: 'generate a random verification code',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}verify`)) {
         if(!args[0]){
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < 10; i++) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return message.reply(` **please type in \`${result}\` in the game (Say/Party Chat advised), and screenshot it.** Post the screenshot here and wait for one of our admins to verify your access to our Grand Market.\n\nNOTE: Your IGN must be visible, otherwise we will request you to repeat the process again.\n\n*Please be patient and wait for our admins to approve of your verification. This may take a few hours.*`);
         }else{
            const taggedUser = message.mentions.members.first();
            //console.log(args[0]);
            var x = taggedUser.toString().replace('@!', '@');
            console.log(x);
            if(args[0] == x || args[0] == taggedUser.toString()){
               x = taggedUser;
               if(message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR")){
                  if(!args[1]){
                     return message.reply(`you need to type the user's ign.`);
                  }else{
                     let data = '';
                     for(var i = 0; i < args.length; i++){
                        data += args[i].toString() + " ";
                     }
                     data += "\n";
                     //console.log(arguments.length)
                     fsLibrary.appendFile("vrlist.txt", data, (error) => {
                        if (error) throw err;
                     })

                     let role = message.guild.roles.cache.find(r => r.id === '772701612862734337');
                     let member = x;
                     member.roles.add(role).catch(console.log);

                     return message.channel.send(`Verified ${taggedUser}.`)
                     //console.log('Verification registered.')
                  }  
               }else{
               return message.reply(`you don't have the permission to do that.`);
               //console.log('noperm');
               }
            }
         }
      }
   }
}