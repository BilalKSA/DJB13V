import DiscordJS, { Application, Intents, Interaction, Message } from 'discord.js'
import path from 'path'
import mongoose from 'mongoose'
import WOKcommands from 'wokcommands'
import 'dotenv/config'
import testSchema from './test-schema'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
client.on('ready', async () => {
   // await mongoose.connect(process.env.MONGO_URI || '',{
     //   keepAlive: true
  //  })
    new WOKcommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['813586516756529154'],
        mongoUri: process.env.MONGO_URI,
        botOwners: ['686666417529159841'],
        
    })
    setTimeout(async () => {
        await new testSchema({
            message: 'hi',
        }).save()
    },1000)
})
client.login(process.env.Token)