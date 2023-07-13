const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    permissions: ['SEND_MESSAGES'],
    description: 'Commande ping!',
    async runInteraction(client, interaction) {
        const tryPong = await interaction.reply({ content: 'On essaye de pong... un instant!', fetchReply: true, ephemeral: true });
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong !')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
                { name: 'La tence BOT', value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true },
                { name: 'Member.roles', value: `${interaction.member.roles}`}
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        interaction.editReply({ content: null, embeds: [embed], ephemeral: true});
    }
}