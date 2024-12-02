const { ActivityType } = require("discord.js");
const logger = require("../utils/logger");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    logger.info(`Logged in as ${client.user.tag}`);

    client.user.setPresence({
      activities: [
        {
          name: "DRØNÀ Gᴀᴍɪɴɢ",
          type: ActivityType.Watching,
        },
      ],
      status: "online",
    });
  },
};