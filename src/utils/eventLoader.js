const fs = require("node:fs");
const path = require("node:path");
const logger = require("./logger");

function loadEvents(client) {
  const eventsPath = path.join(__dirname, "..", "events");

  try {
    const eventFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);
      const event = require(filePath);

      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
    }

    logger.info("Events loaded successfully");
  } catch (error) {
    logger.error("Error loading events:");
    logger.error(error);
    throw error;
  }
}

module.exports = { loadEvents };