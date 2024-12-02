const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { version } = require("../../package.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get information about the bot"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#39FF14")
      .setTitle(`Information about ${interaction.client.user.username}`)
      .addFields(
        { name: "Bot Tag", value: interaction.client.user.tag },
        { name: "Version", value: version },
        { name: "Uptime", value: `${Math.floor(process.uptime())}s` },
        { name: "Developer", value: "DRONA Gaming" }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};