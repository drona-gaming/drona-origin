const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with bot and API latency"),
  async execute(interaction) {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });

    const botLatency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = interaction.client.ws.ping;

    await interaction.editReply(
      `🏓 Pong!\n` +
        `Bot Latency: ${botLatency}ms\n` +
        `API Latency: ${apiLatency}ms`
    );
  },
};