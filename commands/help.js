const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'throw a list of commands and their usages',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}help`)) {
			message.channel.send("```Thanks for using me Master!\n\nMy default prefix is $ and you cannot change it for the time being, my apology for the inconvenience!\n\nHere is the list of my services and their usages:\n\nlend @user <amount>: register an user to loan list\nlist: show a list of the current loaners\nrepay @user: remove an user from loan list```")
		}
	}
}