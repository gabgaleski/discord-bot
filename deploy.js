const { REST, Routes } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//Importação
const fs = require('node:fs');
const path = require('node:path');
const comandsPath = path.join(__dirname, 'commands');
const comandsFile = fs.readdirSync(comandsPath).filter(file => file.endsWith('.js'));

const commands = [];

for (const file of comandsFile) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// instância REST
const rest = new REST({ version: '10'}).setToken(TOKEN);

// deploy

(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos`);


          await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log('Comandos registados!')
    } catch (error) {
        console.error(error)
    }
})()