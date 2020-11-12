const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'vrlist',
	description: 'list the current verified users',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}vrlist`)) {
        	try {  
 				var data = fsLibrary.readFileSync('vrlist.txt', 'utf8');
    			message.channel.send(data.toString());    
			} catch(e) {
    			message.channel.send('Error:', e.stack);
    		}
    	}
    }
}