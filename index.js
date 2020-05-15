//Declaring constant variables
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//Declaring modifiable variables
var raidStatus = false;
var dndStatus = false;

//Verify client launches successfully within console log.
client.on('ready', () =>{
    console.log('RaidStatusBot launched successfully.');
})

//Main function of bot. Checks for messages on a loop. If conditions of If or Else If statements are met, reply to who pinged the individual that are in a Raid or DnD state.
client.on('message', (message)=>{
    //Create Date that updates everytime a message in sent
    var dayOfWeek = new Date();
    let current_date = dayOfWeek.getDay();
    let current_hour = dayOfWeek.getHours();
    let current_minute = dayOfWeek.getMinutes();

    //Check to ensure date is updating properly
    console.log("Day of Week: " + current_date + " Hour: " + current_hour + " Minute: " + current_minute);
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

    //Prevent RaidStatusBot from replying to itself or other bots.
    if (message.author.bot) return;

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
})

//login command using token via config.json
client.login(config.token);