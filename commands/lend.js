const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'lend',
	description: 'register an user to loan list',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}lend`)) {
        	if (!(args[0] && args [1])) {
            	return message.reply('`$lend @user <amount of spina>`');
        	}else{
            	const taggedUser = message.mentions.users.first();
                console.log(`${taggedUser}`);
            	const amount = parseInt(args[1]);
            	message.channel.send(`Lent ${taggedUser} ${amount}.`);
            	
            	var dueDate = new Date();
                dueDate.setDate(dueDate.getDate() + 21);

            	let data = args[0].toString() + " " + args[1].toString() + ' ' + dueDate.toString() + "\n";
            	fsLibrary.appendFile("list.txt", data, (error) => {
            		if (error) throw err;
            	})
        	}
    	}
	},
};