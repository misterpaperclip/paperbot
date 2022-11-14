const { Client, Intents, Collection } = require("discord.js");
const { discordToken } = require("./config.json");
const { initializeCommands } = require("./deploy-commands");
const client = new Client({ intents: 8 });
const fs = require("fs");
const path = require("path");

(async () => {
  await initializeCommands();

  client.once("ready", async () => {
    console.log("Paper Bot is ready my liege!");
  });

  client.on("interactionCreate", async (interaction) => {
    if (interaction.isMessageComponent()) {
      if (interaction.message.content === "paper")
        await interaction.reply({ content: "Yes?" });
    }

    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction, client);
      console.log(
        `${interaction.commandName} was used by @${interaction.user.tag} in Channel: ${interaction[0]}.`
      );
    } catch (error) {
      await interaction.reply({
        content: "There was an error while executing your command!" + error,
      });
    }
  });

  client.commands = new Collection();
  const commandFiles = fs
    .readdirSync(path.resolve(__dirname, "./commands"))
    .filter((x) => x.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(path.resolve(__dirname, `./commands/${file}`));
    client.commands.set(command.data.name, command);
  }

  client.login(process.env.TOKEN_VAR);
})();