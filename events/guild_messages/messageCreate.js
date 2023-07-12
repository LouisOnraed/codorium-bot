const prefix = '!';

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(client, message) {
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)){
            if(message.content.startsWith('Salut') || message.content.startsWith('Bonjour') || message.content.startsWith('Bienvenue')){
                message.react('👋');
            } else{
                return;
            }
        };

        const args = message.content.slice(prefix.length).trim().split(/ + /g);
        const cmdName = args.shift().toLowerCase();
        if(cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (cmd) cmd.run(client, message, args);
    }
}