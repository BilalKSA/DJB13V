import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
export default  {
    category: 'Testing',
    description: 'Crate your Own Embed',
    permissions: ["ADMINISTRATOR"],

    callback: ({message, text}) => {
        const json = JSON.parse(text)
        const embed = new MessageEmbed(json)
        
        return embed
    }
}as ICommand