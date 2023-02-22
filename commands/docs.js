const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
    .setCustomId('select')
    .setPlaceholder('Escolha uma tecnologia...')
    .addOptions(
        {
            label: 'JavaScript',
            description: 'Documentação do Javascript',
            value: 'js',
        },
        {
            label: 'CSS',
            description: 'Documentação do CSS',
            value: 'css',
        },
        {
            label: 'React',
            description: 'Documentação do React',
            value: 'react',
        },
        {
            label: 'Bootstrap',
            description: 'Documentação do Bootstrap',
            value: 'bootstrap',
        },
        {
            label: 'Jest',
            description: 'Documentação do Jest',
            value: 'jest',
        },
    )
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('documentation')
        .setDescription("Acessa as documentaçoes"),

    async execute(interaction) {
        await interaction.reply({content:'Selecione uma das tecnologias a baixo', components: [row]})
    }
}
