const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('paperbot')
            .setDescription('Describes my me!'),
    async execute(interaction) {    
        await interaction.reply({content: `Ang gwapo talaga ni <@1005488664173891584>! UwU :heart::heart::heart::heart:`});
    },
}