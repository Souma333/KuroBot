const Dc = require('discord.js')
const bot  = new Dc.Client()
const client.login('Q_8WWHinEfN6Ip1v8_5X1MMC13XyWsGM')
require('dotenv').config()
const PREFIX = "_";
//==============
bot.on('ready', () => {
    console.log("bot music started!!!")
})
bot.on('message', (msg) => {
    let argument = msg.content.substring(PREFIX.length).split(" ")
    console.log(argument)
    switch(argument[0]){ //argument terbaru
        case 'play':
            if(!argument[1]) //cek ada argument link / gk
        break;
        
    }

})
//==============
bot.login(process.env.KEY);
