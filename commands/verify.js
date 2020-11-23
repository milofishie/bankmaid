const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'verify',
	description: 'generate a random verification code',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}verify`)) {
         if(!args[0]){
            message.reply(`you need to tell us your in game name.`);
         }else{
            const taggedUser = message.mentions.members.first();
            
            var x = `${taggedUser}`.toString().replace('@!', '@');
            var y = `${taggedUser}`.toString().replace('@', '@!');
            console.log(args[0]);
            console.log(1);
            //console.log(taggedUser);
            console.log(x);
            console.log(2);
            //console.log(taggedUser.toString());

            if(args[0] == x || args[0] == `${taggedUser}`.toString() || args[0] == y){
               x = taggedUser;
               if(message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR")){
                  if(!args[1]){
                     return message.reply(`you need to type the user's ign.`);
                  }else{
                     message.channel.send('This command is under maintenance, sorry for the inconvenience.')
                  }  
               }else{
               return message.reply(`you don't have the permission to do that.`);
               //console.log('noperm');
               }
            }else{
               var result = '';
               var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
               var charactersLength = characters.length;
               for (var i = 0; i < 10; i++) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
               }
               return message.reply(` **please type in \`${result}\` in the game (Say/Party Chat advised), and screenshot it.** Post the screenshot here and wait for one of our admins to verify your access to our Grand Market.\n\nNOTE: Your IGN must be visible, otherwise we will request you to repeat the process again.\n\n*Please be patient and wait for our admins to approve of your verification. This may take a few hours.*`);
            }
         }
      }
   }
}