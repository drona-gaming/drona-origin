const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { version, author } = require("../../package.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Shows information about the bot"),
  async execute(interaction) {
    const uptimeInSeconds = Math.floor(process.uptime());

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(uptimeInSeconds / (3600 * 24));
    const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = uptimeInSeconds % 60;

    // Format the uptime string
    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `Information about ${interaction.client.user.username}`,
        iconURL: interaction.client.user.displayAvatarURL(),
      })
      .addFields(
        { name: "Bot Tag", value: interaction.client.user.tag },
        { name: "Version", value: version },
        { name: "Uptime", value: uptime },
        { name: "Developer", value: author }
      )
      .setColor("#7b00ff")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};