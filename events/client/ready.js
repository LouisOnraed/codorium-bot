module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('####################################');
        console.log('Je suis prêt !');

        const devGuild = await client.guilds.cache.get('1126847075141824583');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
}