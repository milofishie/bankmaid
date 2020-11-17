const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'verify',
	description: 'generate a random verification code',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}verify`)) {
			message.channel.send('Shut up this command is broken!');
		}
	}
}
