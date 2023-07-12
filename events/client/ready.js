module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const StartBotChannel = client.channels.cache.get(process.env.CHANNEL_START_BOT);
        StartBotChannel.send('Je suis de nouveau en ligne avec sûrement des corrections de bug et des nouvelles fonctionnalités !');
        console.log('####################################');
        console.log('Je suis prêt !');

        const devGuild = await client.guilds.cache.get('1126847075141824583');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
}