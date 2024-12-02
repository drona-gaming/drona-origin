const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clear messages from the channel")
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("Number of messages to clear")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");

    try {
      await interaction.channel.bulkDelete(amount);
      await interaction.reply({
        content: `Successfully deleted ${amount} messages.`,
        ephemeral: true,
      });
    } catch (error) {
      await interaction.reply({
        content: "There was an error trying to clear messages!",
        ephemeral: true,
      });
    }
  },
};