const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'verify',
	description: 'generate a random verification code',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}verify`)) {
   		var result = '';
   		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   		var charactersLength = characters.length;
			for (var i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
   		}
   		return message.reply('**please type in `${result}` in the game (Say/Party Chat advised), and screenshot it.** Post the screenshot here and wait for one of our admins to verify your access to our Grand Market.\n\nNOTE: Your IGN must be visible, otherwise we will request you to repeat the process again.\n\n*Please be patient and wait for our admins to approve of your verification. This may take a few hours.*');
         console.log('done');
		}
	}
}
