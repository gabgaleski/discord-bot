// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

//dot
const dotenv = require('dotenv');
dotenv.config()
const { TOKEN } = process.env;

//Importação
const fs = require('node:fs');
const path = require('node:path');

const comandsPath = path.join(__dirname, 'commands');
const comandsFile = fs.readdirSync(comandsPath).filter(file => file.endsWith('.js'));
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of comandsFile) {
	const filePath = path.join(comandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	} else {
		console.log(`Esse comando ${filePath} está com data ou execute ausentes`)
	}
}

client.once(Events.ClientReady, c => {
	console.log(`Loguin realizado como: ${c.user.tag}`);
});

//Loguin
client.login(TOKEN);

//Listner
client.on(Events.InteractionCreate, async interaction => {
	if (interaction.isStringSelectMenu()) {
		switch (interaction.values[0]) {
			case 'js':
				await interaction.reply('Documentação do Javascript: https://www.w3schools.com/js/default.asp');
				break;
			case 'css':
				await interaction.reply('Documentação do CSS: https://developer.mozilla.org/en-US/docs/Web/CSS');
				break;
			case 'react':
				await interaction.reply('Documentação do React: https://reactjs.org/docs/getting-started.html');
				break;
			case 'bootstrap':
				await interaction.reply('Documentação do Bootstrap: https://getbootstrap.com/docs/4.1/getting-started/introduction/');
				break;
			case 'jest':
				await interaction.reply('Documentação do Jest: https://jestjs.io/pt-BR/docs/getting-started');
				break;
			default:
				break;
		}
	}
	if (!interaction.isChatInputCommand()) return
	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error('Comando nao encontrado');
		return
	}
	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error);
		await interaction.reply('Houve um erro ao executar esse comando!')
	}
})