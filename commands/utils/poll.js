const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'sondage',
    description: 'Faire un sondage',
    
    options: [
        {
            name: 'titre',
            description: 'Quelle est le titre de votre sondage ?',
            type: 'STRING',
            required: true,
        },
        {
            name: 'question',
            description: 'Quelle est la question ?',
            type: 'STRING',
            required: true,
        }
    ],
    async runSlash(client, interaction) {
        const pollTitle = interaction.options.getString('titre');
        const pollContent = interaction.options.getString('question');

        const embed = new MessageEmbed()
            .setTitle(pollTitle)
            .setColor('#00a3b5')
            .setDescription(pollContent)
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!` })

        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('✅');
        poll.react('❌');
    }
};