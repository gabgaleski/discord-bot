const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor('Yellow')
	.setTitle('Alguns comandos que podemos usar com Javascript Assincrono')
	.setURL('https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous')
    .setThumbnail('https://cdn-icons-png.flaticon.com/512/5968/5968292.png')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'fetch(URL)', value: 'Para Importar uma API, retornando uma promise', inline: true },
		{ name: '.them(response)', value: 'Para resolver a promisse', inline: true },
		{ name: 'assync', value: 'Utiliza para tornar, por exemplo, uma função assyncrona', inline: true },
        { name: 'await', value: 'Espera pela resolução da promisse antes de seguir o codigo', inline: true },
		{ name: '.catch(error)', value: 'Quando a promisse é rejeitada', inline: true },
        { name: '.finally()', value: 'Executa apos o fim da promisse, sendo aceita ou nao', inline: true },
        { name: 'Promise.all', value: 'Resolve todas as promisses', inline: true },
        { name: 'Promise.any', value: 'Retoma a primeira promisse a ser resolvida', inline: true },
	)
    .setTimestamp()
    .setFooter({ text: 'Algumas utilizades para Javascript assincrono', iconURL: 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('assinc')
        .setDescription("Informaçoes e comandos sobre JavaScript Assincrono"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}
