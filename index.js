const Discord = require("discord.js");
const TOKEN = "NDQ4NTUxOTIwNDYyOTg3Mjgz.Dervvg.rcUiqjxVLd32QlfdEInA2lVHAt4";
const prefix = ("*")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("*help");
    console.log("Master !");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        
        case "help":
            var help = new Discord.RichEmbed()
                .setTitle("Commandes!")
                .setDescription("Liste des commandes:")
                .addField("*createur","Permet de voir mes Master!")
                .addField("*excalibur","Permet de faire scintiller mon épée! :heart:")
                .addField("*kawaii","Permet de voir des photos KAWAIIII!")
                .addField("*dormir","Tu vois quelqu'un qui dort (comme moi dans Stay Night)!")
                .addField("*kiss","Tu me fais un bisous. Moi aussi je m'aime!")
                .setColor("0x0040ff")
            message.channel.sendEmbed(help);
            break;

        case "createur":
            var createur = new Discord.RichEmbed()
                .setTitle("Créateurs")
                .setDescription("Mes Master!")
                .addField("Developpeurs:","Nero et Exa")
                .addField("Images,sons...:","Kuko")
                .addField("Quêtes:","Paukédex")
                .setColor("0x0040ff")
            message.channel.sendEmbed(createur);
            break;

        case "excalibur":
            message.channel.send("EXXX...CALIBURRR!!!",{files:["./fichier/excalibur.gif"]})
            break;

        case "kiss":
                message.channel.send("I love u Master!:heart:",{files:["./fichier/kiss.gif"]})

        case "dormir":
            message.channel.send("I love u Master!:heart:",{files:["./fichier/dormir.gif"]})

        case "kawaii" :
            message.channel.send("I'm KAWAIII!",{files:["./fichier/kawaii.jpg"]})
        }
        
});

function random(min, max) {
    min = Math.cell(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min + 1) + min);
}


bot.login(TOKEN);