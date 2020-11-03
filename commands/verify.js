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
   			for (var i = 0; i < 16; i++) {
   				result += characters.charAt(Math.floor(Math.random() * charactersLength));
   			}
   			message.channel.send(result);
            console.log('done');
		}
	}
}