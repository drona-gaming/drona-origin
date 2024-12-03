const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();
const logger = require("./utils/logger");

async function deployCommands() {
  try {
    const commands = [];
    const commandsPath = path.join(__dirname, "commands");
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN
    );

    logger.info("Started refreshing application (/) commands globally.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    logger.info("Successfully registered global application (/) commands.");
  } catch (error) {
    logger.error("Failed to deploy commands:");
    logger.error(error);
    throw error;
  }
}

module.exports = { deployCommands };

// Allow direct execution of deploy commands
if (require.main === module) {
  deployCommands();
}