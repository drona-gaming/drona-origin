const { deployCommands } = require("../deploy-commands");
const { startBot } = require("../../index");
const logger = require("./logger");

async function initialize() {
  try {
    logger.info("Starting initialization process...");
    await deployCommands();
    await startBot();
  } catch (error) {
    logger.error("Failed to initialize the bot:");
    logger.error(error);
    process.exit(1);
  }
}

initialize();