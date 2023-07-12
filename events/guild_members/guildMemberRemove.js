const dayjs = require("dayjs");
const { MessageEmbed, Formatters } = require("discord.js");

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const userCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const userRelativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const userJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const userRelativeJoinTimestamp = Formatters.time(dayjs(member.user.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const userLeaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const userRelativeLeaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL()})
            .setColor('#dc143c')
            .setDescription(`● Nom d'utilisateur: ${member.displayName}
            ● Crée le: ${userCreationTimestamp} (${userRelativeCreationTimestamp})
            ● Rejoint le: ${userJoinTimestamp} (${userRelativeJoinTimestamp})
            ● Quitté le: ${userLeaveTimestamp} (${userLeaveTimestamp})
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a quitté !' });

        const logChannel = client.channels.cache.get(process.env.LOG_CHANNEL);
        logChannel.send({ embeds: [embed] });
    }
}