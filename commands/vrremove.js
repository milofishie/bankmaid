const { prefix } = require('../config.json');
const fsLibrary = require('fs');

module.exports = {
	name: 'vrremove',
	description: 'remove an user from verified sellers list',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}vrremove`)) {
            if(message.member.hasPermission("MANAGE_ROLES" || "ADMINISTRATOR")){
                if (!args[0]) {
                    return message.reply('`$vrremove @user`');
                }else{
                    const taggedUser = message.mentions.members.first();
                    var x = taggedUser;
                    console.log(x);
        		
                    var data = fsLibrary.readFileSync('vrlist.txt', 'utf8');
                    var lines = data.toString().split('\n');
        		
                    console.log("1");

                    for (var i = 0; i < lines.length; i++){
                        console.log(10 + i);
                        if (lines[i].includes(x)){
        				    lines[i] = '';
        				    lines = lines.join();
        				    lines = lines.replace(/,/g, '\n');
        				    lines = lines.replace(/[\r\n]+/g, '\n');
        				    fsLibrary.writeFileSync("vrlist.txt", lines, (error) => {
            				    if (error) throw err;
                            })

                            console.log("2");
                            let member = taggedUser;
                            ///console.log(member);
                            role = message.guild.roles.cache.find(r => r.id === '772701612862734337');
                            console.log("3");
                            member.roles.remove(role).catch(console.log);
                            console.log("4");
                            message.channel.send(`Removed ${taggedUser}.`);
                            break;
                        }
                        if(i == lines.length - 1){
                    	   message.channel.send(`${taggedUser} isn't in the list.`);
                        }
                    }
            	}
        	}else{
                return message.reply(`you don't have the permission to do that.`);
            }
    	}
	}
}