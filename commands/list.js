const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'list',
	description: 'list the current loaners',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}list`)) {
        	try {  
 				var data = fsLibrary.readFileSync('list.txt', 'utf8');
    			message.channel.send(data.toString());    
			} catch(e) {
    			message.channel.send('Error:', e.stack);
    		}
    	}
    }
}