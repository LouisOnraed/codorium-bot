const { messageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Commande ping!',
    run: (client, message, args) => {
        const embed = new messageEmbed()
            .setTitle('🏓 Pong !')
            .setThumbail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
                { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: message.author.name, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [embed] });
    },
    runSlash: (client, interaction) => {
        const embed = new messageEmbed()
            .setTitle('🏓 Pong !')
            .setThumbail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
                { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.name, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [embed] });
    }
}