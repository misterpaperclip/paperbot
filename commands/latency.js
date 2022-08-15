const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('latency')
            .setDescription('(Under Construction)A command that gets the latency for this bot and API!'),
    async execute(interaction) {    
        await interaction.reply('Command under construction. :cry:');
    },
}