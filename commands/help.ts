import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default  {
    category: 'Testing',
    description: 'helps you',
    slash: 'both',

    callback: async ({message, text}) => {
        const emded = new MessageEmbed()
            .setDescription("Type .Invite for the Invite URL")
            .setColor('PURPLE')
            .setTitle('Help')

        //return emded
        const newMessage = await message.reply({
            embeds: [emded],
        })
        await new Promise(resolve => setTimeout(resolve, 3000))

        const newEmbed = newMessage.embeds[0]
        newEmbed.setTitle("Help Command")

        newMessage.edit({
            embeds: [newEmbed]
        })
    },
    
} as ICommand