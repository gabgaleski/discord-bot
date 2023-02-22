const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Sobre mim:')
	.setAuthor({ name: 'Gabriel Galeski Arnaldi', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Estudante de desenvolvimento web.')
	.addFields(
		{ name: 'Projeto', value: 'Projeto realizado com intuito de estudo e aprendizado, buscando melhorar como programador!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Linkedin:', value: 'https://www.linkedin.com/in/gabriel-galeski/', inline: true },
		{ name: 'GitHub', value: 'https://github.com/gabgaleski', inline: true },
	)
	.setImage('https://avatars.githubusercontent.com/u/112609045?s=400&u=5a33c7343dccbc3451c23398792fdefe0736cb14&v=4')
	.setTimestamp()
	.setFooter({ text: 'VQV', iconURL: 'https://cdn-icons-png.flaticon.com/512/619/619175.png' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription("Informações"),

    async execute(interaction) {
        await interaction.reply({ embeds: [embed] })
    }
}
