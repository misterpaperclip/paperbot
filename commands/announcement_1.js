const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('announcement_1')
            .setDescription('Announces more dishes!! :heart:'),
    async execute(interaction) {    
        await interaction.reply(`<@568376638199431171> is teaching <@1005488664173891584> some more BANGUS dishes! UwU :heart::heart::heart::heart:`);
    },
}