const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'oui-non',
    description: 'Faire une question avec les réponses Oui et Non',
    
    options: [
        {
            name: 'titre',
            description: 'Quelle est le titre de votre question ?',
            type: 'STRING',
            required: true,
        },
        {
            name: 'question',
            description: 'Quelle est la question ?',
            type: 'STRING',
            required: true,
        },
        {
            name: 'image',
            description: 'Un lien vers une image',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction(client, interaction) {
        const pollTitle = interaction.options.getString('titre');
        const pollContent = interaction.options.getString('question');
        const pollImage = interaction.options.getString('image');

        const embed = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('#00a3b5')
            .setDescription(pollContent)
            .setThumbnail(pollImage)
            .setTimestamp()
            .setFooter({ text: `Sondage par ${interaction.user.tag}!` })

        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('✅');
        poll.react('❌');
    }
};