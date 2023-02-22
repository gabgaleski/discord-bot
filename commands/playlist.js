const { SlashCommandBuilder, hyperlink, } = require("discord.js")

const url = 'https://open.spotify.com/album/2vp4dkJx7T9jGybN34IgTT?si=MOykxTRIRNKEKrR1SKDd7A';

const link = hyperlink('Playlist para estudos!', url);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription("Playlist para estudos"),

    async execute(interaction) {
        await interaction.reply(link)
    }
}
