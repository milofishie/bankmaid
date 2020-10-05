const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'repay',
	description: 'remove an user from loan list',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}repay`)) {
        	if (!args[0]) {
            	return message.reply('`$repay @user`');
        	}else{
        		const taggedUser = message.mentions.users.first();
        		console.log(`${taggedUser}`);
        		var x = taggedUser.toString().replace('@', '@!');
        		console.log(x);
        		
        		var data = fsLibrary.readFileSync('list.txt', 'utf8');
        		var lines = data.toString().split('\n');
        		console.log(lines[1]);
        		
        		for (var i = 0; i < lines.length; i++){
        			var count = lines.length;
        			if (lines[i].includes(x)){
        				lines[i] = '';
        				lines = lines.join();
        				lines = lines.replace(/,/g, '\n');
        				lines = lines.replace(/[\r\n]+/g, '\n');
        				fsLibrary.writeFileSync("list.txt", lines, (error) => {
            				if (error) throw err;
            			})
            			message.channel.send(`${taggedUser} repaid!`);
            			break;
            		}
            		count--;
            		if (count == 0){
                    	message.channel.send(`${taggedUser} has no loaning record!`);
            		}
            	}
        	}
    	}
	}
}