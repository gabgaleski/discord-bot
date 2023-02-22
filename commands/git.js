const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor('Orange')
	.setTitle('Principais comandos do Git')
	.setURL('https://www.codigofonte.com.br/artigos/top-25-comandos-do-git')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Cria um repositorio novo no local', inline: true },
		{ name: '$ git clone', value: 'Utilizado para copiar um repositorio ja existente', inline: true },
		{ name: '$ git add', value: 'Adiciona arquivos especificos ou todos que foram alterados a partir do comando "git add ."', inline: true },
        { name: '$ git commit', value: 'Ele executa o commit dos arquivos que foram adicionados (git add).', inline: true },
		{ name: '$ git branch', value: 'As branchs sao as ramificações do seu repositorio, ou seja, as diversas versoes do mesmo.', inline: true },
        { name: '$ git checkout', value: 'Utilizado para trocar de uma branch para outra', inline: true },
        { name: '$ git remote', value: 'O comando estabelece conexão entre o respositorio local e o remoto', inline: true },
        { name: '$ git push', value: 'Comando utilizado para subir as modificações feitas para o repositorio remoto', inline: true },
        { name: '$ git pull', value: 'O git pull baixa o conteúdo que foi alterado no repositorio remoto', inline: true },
	)
    .setTimestamp()
    .setFooter({ text: 'Relembrando os comandos do git', iconURL: 'https://cdn-icons-png.flaticon.com/512/4494/4494740.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription("Comandos Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}
