module.exports = {
    name: 'say',
    permissions: ['ADMINISTRATOR'],
    description: 'Faire dire un message de la pars du bot',

    options: [
        {
            name: 'message',
            description: 'Taper votre message',
            type: 'STRING',
            required: true
        }
    ],
    
    runInteraction: (client, interaction) => {
        const contenu = interaction.options.getString('message');
        interaction.reply({ text: "Dit !", ephemeral: true });
        interaction.channel.send(contenu);
    }
};