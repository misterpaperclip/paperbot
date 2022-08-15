const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('paperclip')
            .setDescription('Describes my master!'),
    async execute(interaction) {    
        await interaction.reply(`Ang gwapo talaga ni <@568376638199431171>! UwU :heart::heart::heart::heart:`);
    },
}