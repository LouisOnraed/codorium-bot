const dayjs = require("dayjs");
const { MessageEmbed, Formatters } = require("discord.js");

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        const userCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const userRelativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const userJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const userRelativeJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL()})
            .setColor('#21ff81')
            .setDescription(`● Nom d'utilisateur: ${member}
            ● Crée le: ${userCreationTimestamp} (${userRelativeCreationTimestamp})
            ● Rejoint le: ${userJoinTimestamp} (${userRelativeJoinTimestamp})
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a rejoint !' });

        const logChannel = client.channels.cache.get(process.env.LOG_CHANNEL);
        logChannel.send({ embeds: [embed] });
    }
}