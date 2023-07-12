module.exports = {
    name: 'messageCreate',
    once: false,
    execute(client, message) {
        if(message.author.bot) return;
        if(message.content.startsWith('Salut') || message.content.startsWith('Bonjour') || message.content.startsWith('Bienvenue')){
            message.react('👋');
        } else{
            return;
        }
    }
}