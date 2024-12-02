const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with bot and API latency"),
  async execute(interaction) {
    const sent = await interaction.reply({
      content: "Calculating ping...",
      fetchReply: true,
    });
    const pingLatency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = interaction.client.ws.ping;

    await interaction.editReply(
      `Bot latency: ${pingLatency}ms\nAPI Latency: ${apiLatency}ms`
    );
  },
};