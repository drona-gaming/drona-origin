const { Client, Collection, GatewayIntentBits } = require("discord.js");
const logger = require("./logger");

function createClient() {
  return new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
    ],
  });
}

function setupCollections(client) {
  client.commands = new Collection();
}

async function loginClient(client, token) {
  try {
    await client.login(token);
    logger.info("Bot successfully started and logged in.");
  } catch (error) {
    logger.error("Failed to log in:");
    logger.error(error);
    throw error;
  }
}

module.exports = {
  createClient,
  setupCollections,
  loginClient,
};