import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Return Pong',
    
    slash: 'both',

    callback: ({}) => {
       return 'Pong!'
    }
} as ICommand