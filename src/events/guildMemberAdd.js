const { EmbedBuilder } = require("discord.js");
const logger = require("../utils/logger");

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const welcomeEmbed = new EmbedBuilder()
      .setColor("#39FF14")
      .setTitle(`Welcome to the server, ${member.user.username}!`)
      .setDescription(
        "We hope you will enjoy your time here. Please read the <#700644963427549184> for dedicated role and full access to the server."
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({
        text: "DRØNÀ Gᴀᴍɪɴɢ",
        iconURL: "https://i.imgur.com/FSsmpQR.png",
      });

    member.send({ embeds: [welcomeEmbed] }).catch((error) => {
      logger.error(`Could not send DM to ${member.user.tag}: ${error}`);
    });
  },
};