const logger = require("./logger");

function setupInteractionHandler(client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      logger.error(`Error executing command ${interaction.commandName}:`);
      logger.error(error);
      await interaction
        .reply({
          content: "There was an error executing this command!",
          ephemeral: true,
        })
        .catch(console.error);
    }
  });
}

module.exports = { setupInteractionHandler };