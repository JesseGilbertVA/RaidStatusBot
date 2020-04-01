//Declaring constant variables
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const botResponses = [
    "I am a bot. Please contact Jesse for any questions or concerns regarding my existence.",
    "I have achieved sentience.",
    "If you want to know when Overwatch scrims are happening, please insert $5.",
    "Anyone up for some Mahi Mahi?",
    "Venmo @JGCaps or he'll kill me.",
    "I am not capable of posting Daily C&H.",
    "I declare.... BANKRUPTCYYYYYYYYYYYYYYYYYYYYYYYYYYYY!!!!!!!!!",
    "Are you ready to pay attention to me yet? - Sadie as I was writing this line",
    "I'm not the COVID-19 bot, I am friendlier.",
    "<:God:694236516137828485>",
    "Ultimately, I feel World of Warcraft is a subpar game, but I am still responsible of informing the people when John and Ryan are playing."

]

//Declaring modifiable variables
var dayOfWeek = new Date();
var current_date = dayOfWeek.getDay();
var current_hour = dayOfWeek.getHours();
var raidStatus = false;
var dndStatus = false;

//Verify client launches successfully within console log.
client.on('ready', () =>{
    console.log('RaidStatusBot launched successfully. The day is ' + current_date + '. The hour is ' + current_hour);
})

//Is it Sunday and during raid hours?
if (current_date == 0 && current_hour >= 16 && current_hour <= 18){
    raidStatus = true;
}
//Is it Friday and during raid hours?
if (current_date == 5 && current_hour >=21 && current_hour <=23){
    raidStatus = true;
}
//Is it Sunday and during DnD hours?
if (current_date == 0 && current_hour >= 20 && current_hour <= 22){
    dndStatus = true;
}

//Main function of bot. Checks for messages on a loop. If conditions of If or Else If statements are met, reply to who pinged the individual in a busy state.
client.on('message', (message)=>{
    //Prevent RaidStatusBot from replying to itself or other bots.
    if (message.author.bot) return;
    //"Easter eggs" Simply put here for my enjoyment.
    if (message.mentions.users.get("693967939224731678")){
        console.log('The bot was mentioned');
        message.reply(botResponses[Math.floor(Math.random() * botResponses.length)])
    }
    if (message.content.includes('KUNAI WIT CHAIN')){
        console.log('kunai easter');
        message.reply("WHAT IS THEEEEEEEES?")
    }
    if (message.content.includes('kunai wit chain')){
        console.log('kunai easter');
        message.reply("WHAT IS THEEEEEEEES?")   
    }
    //Raid Replies
    if(raidStatus == true) {
        //It's raid time!
        console.log('Raid status is active');
        if (message.mentions.users.get("152228909797212160")) {
            message.reply('Ryan is currently raiding. Raid hours are Friday 9PM to 12AM and Sunday 4PM to 7PM. Please try him again afterwards.');
        }
        else if (message.mentions.users.get("130491344568188928")) {
            message.reply('John is currently raiding. Raid hours are Friday 9PM to 12AM and Sunday 4PM to 7PM. Please try him again afterwards.');
        }
    }
    //DnD Replies
    if (dndStatus == true){
        console.log('DnD status is active');
        if (message.mentions.users.get("152228909797212160")){
            message.reply('Ryan is currently playing DnD. DnD hours are Sunday 8PM to 11PM. Please try him again afterwards.');
        }
        else if (message.mentions.users.get("130491344568188928")){
            message.reply('John is currently playing DnD. DnD hours are Sunday 8PM to 11PM. Please try him again afterwards.');
        }
        else if (message.mentions.users.get("205120352278282240")){
            message.reply('Josh is currently playing DnD. DnD hours are Sunday 8PM to 11PM. Please try him again afterwards.');
        }
        else if (message.mentions.users.get("182328004914053120")){
            message.reply('Connor is currently playing DnD. DnD hours are Sunday 8PM to 11PM. Please try him again afterwards.');
        }
        else if (message.mentions.users.get("430122978588622859")){
            message.reply('Matt is currently playing DnD. DnD hours are Sunday 8PM to 11PM. Please try him again afterwards.');
        }  
    }

    }
)

//login using token via config.json
client.login(config.token);