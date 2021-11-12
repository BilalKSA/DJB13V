// import DiscordJS, { Application, Intents, Interaction, Message } from 'discord.js'
// import dotenv from 'dotenv'
// dotenv.config()

// const client = new DiscordJS.Client({
//     intents: [
//         Intents.FLAGS.GUILDS,
//         Intents.FLAGS.GUILD_MESSAGES
//     ]
// })
// client.on('ready', () => {
//     console.log('Bot is online')

//     const guildid = "813586516756529154"
//     const guild = client.guilds.cache.get(guildid)
//     let commands

//     if (guild){
//         commands = guild.commands
        
//     }else{
//         commands = client.application?.commands
//     }
//     commands?.create({
//         name:'ping',
//         description:'return pong',
//     })
//     commands?.create({
//         name:'add',
//         description:'sum two num',
//         options:[
//             {
//                 name: 'num1',
//                 description: 'first num',
//                 required: true,
//                 type:DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//             },
//             {
//                 name: 'num2',
//                 description: 'second num',
//                 required: true,
//                 type:DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//             }
//         ]
//     })
// })
// client.on('interactionCreate', async (interaction) => {
//     if (!interaction.isCommand()){
//         return
//     }
//     const { commandName, options } = interaction
//     if(commandName === 'ping'){
//         interaction.reply({
//             content: 'Pong',
//             ephemeral: false,
//         })
//     }else if(commandName === 'add'){
//         const num1 = options.getNumber('num1')!
//         const num2 = options.getNumber('num2')!
//         interaction.reply({
//             content:`the sum is ${ num1 + num2 }`,
            
//         })
//     }
// })

// client.login(process.env.Token)