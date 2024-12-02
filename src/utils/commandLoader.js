const fs = require("node:fs");
const path = require("node:path");
const logger = require("./logger");

function loadCommands(client) {
  const commandsPath = path.join(__dirname, "..", "commands");

  try {
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      client.commands.set(command.data.name, command);
    }

    logger.info("Commands loaded successfully");
  } catch (error) {
    logger.error("Error loading commands:");
    logger.error(error);
    throw error;
  }
}

module.exports = { loadCommands };