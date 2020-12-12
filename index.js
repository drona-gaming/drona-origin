const Discord = require('discord.js')
const client = new Discord.Client()

const { MessageEmbed } = require('discord.js')
const { version } = require('./package.json')
const { prefix } = require('./package.json')
const { author } = require('./package.json')

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is online!')

  command(client, ['ping', 'test'], (message) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  })

  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

  command(client, 'status', (message) => {
    const content = message.content.replace('+status ', '')
    // "+status hello world" -> "hello world"

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  })
})

  command(client, 'info', (message) => {
    message.reply
      const embed = new MessageEmbed()
        .setAuthor(
          `Information about the ${client.user.username} Bot`,
          client.user.displayAvatarURL()
        )
        .addFields(
          {
            name: 'BOT Tag:',
            value: client.user.tag,
          },
          {
            name: 'Version:',
            value: version,
          },
          {
            name: "Server's Command Prefix:",
            value: prefix,
          },
          {
            name: 'BOT Owner:',
            value: author,
          },
          {
            name: 'Time since last restart:',
            value: `${process.uptime().toFixed(2)}s`,
          },
        )

      message.channel.send(embed)
    }
  )

client.login(config.token)