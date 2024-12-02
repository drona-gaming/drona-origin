require("dotenv").config();
const {
  createClient,
  setupCollections,
  loginClient,
} = require("./src/utils/clientManager");
const { loadCommands } = require("./src/utils/commandLoader");
const { loadEvents } = require("./src/utils/eventLoader");
const { setupInteractionHandler } = require("./src/utils/interactionHandler");
const logger = require("./src/utils/logger");

async function startBot() {
  try {
    // Initialize client
    const client = createClient();
    setupCollections(client);

    // Load commands and events
    loadCommands(client);
    loadEvents(client);

    // Setup interaction handling
    setupInteractionHandler(client);

    // Login
    await loginClient(client, process.env.DISCORD_TOKEN);
  } catch (error) {
    logger.error("Failed to start bot:");
    logger.error(error);
    throw error;
  }
}

module.exports = { startBot };

// Allow direct execution of the bot
if (require.main === module) {
  startBot();
}