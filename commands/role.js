const { prefix } = require('../config.json');

module.exports = {
	name: 'role',
	description: 'give a role to the user and remove "verified" role',
	execute(message, args) {
		if (message.content.startsWith(`${prefix}role`)) {
			if(!args[0]){
				return message.reply('choose your role (guild/guest)!');
			}else if (args[0] === 'guild'){
				let role = message.guild.roles.cache.find(r => r.id === '704071483424506026');
				let member = message.member;
				member.roles.add(role).catch(console.log);
				role = message.guild.roles.cache.find(r => r.id === '772453087772016681');
				member.roles.remove(role).catch(console.log);
				message.channel.send('Gave you the role.');
			}else if(args[0] === 'guest'){
				let role = message.guild.roles.cache.find(r => r.id === '702796833453244457');
				let member = message.member;
				member.roles.add(role).catch(console.log);
				role = message.guild.roles.cache.find(r => r.id === '772453087772016681');
				member.roles.remove(role).catch(console.log);
				message.channel.send('Gave you the role.');
			}else{
				message.channel.send('Invalid role.');
			}
		}
	}
}