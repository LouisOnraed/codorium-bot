module.exports = {
    name: 'emit',
    description: 'Emettre un événement au choix',
    options: [
        {
            name: 'event',
            description: 'Choisir un événement à emettre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                }
            ]
        }
    ],
    runSlash(client, interaction) {
        const evtChoices = interaction.options.getString('event');

        if(evtChoices == 'guildMemberAdd'){
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd émit!', ephemeral: true });
        } else{
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove émit!', ephemeral: true });
        }
    }
}