const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzYzODA2MTI0ODI1NjQxMDAy.X39D4g.epSYC_nlwaAocghtOEnK3LQkDQg');

client.on('message', message => {
	if (message.content === '-ping') {
		message.channel.send('PONG!');
		message.delete({ timeout: 5000 });
	}
});

client.on('message', message => {
	if (message.content == '-members') {
		const online = new Discord.MessageEmbed()
			.setTitle('Total members in the server!')
			.setDescription(`Total members: ${message.guild.memberCount}`)
			.setThumbnail(message.author.displayAvatarURL())
			.setFooter('Message was requested by: ' + message.author.username)
			.setColor('#0C00FF');
		message.delete({ timeout: 5000 });
		client.users.cache.get(message.author.id).send(online);
	}
});

client.on('message', message => {
	if (message.content == '-me') {
		const info = new Discord.MessageEmbed()
			.setTitle('YOUR INFORMATION!')
			.setDescription('YOUR NAME: ' + message.author.username + '\n' + '\n' + 'YOUR AVATAR: ' + '\n' + '\n' + 'YOUR ID: ' + message.author.id + '\n' + '\n' + 'CREATED: ' + message.author.createdAt)
			.setThumbnail(message.author.displayAvatarURL())
			.setFooter('Message was requested by: ' + message.author.username)
			.setColor('#0C00FF');
		message.delete({ timeout: 5000 });
		client.users.cache.get(message.author.id).send(info);
	}
});

client.on('message', message => {
	if(message.author.bot) return;
	const test = new Discord.MessageEmbed()
		.setTitle('NEW Message has been sent!')
		.setDescription(message.content)
		.setThumbnail(message.author.displayAvatarURL())
		.setFooter('Message has been sent by: ' + message.author.username)
		.setTimestamp()
		.setColor('#0C00FF');
	client.channels.cache.get('776090160231481375').send(test);
});