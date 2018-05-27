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
                                                                    //Commande de Base
        
        case "help":
            var help = new Discord.RichEmbed()
                .setTitle("Commandes!")
                .setDescription("Liste des commandes:")
                .addField("*createur","Permet de voir mes Master!")
                .addField("*excalibur","Permet de faire scintiller mon épée! :heart:")
                .addField("*kawaii","Permet de voir des photos KAWAIIII!")
                .addField("*dormir","Tu vois quelqu'un qui dort (comme moi dans Stay Night)!")
                .addField("*kiss","Tu me fais un bisous. Moi aussi je m'aime!")
                .addField("*ubw","Le Noble Phantasm de Emiya.")
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
            number = 3;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1
            switch (random) {
                case 1:message.channel.send("I love u Master!:heart:",{files:["./fichier/kiss.gif"]}); break;
                case 2:message.channel.send("I love u Master!:heart:",{files:["./fichier/kiss2.gif"]}); break;
                case 3:message.channel.send("I love u Master!:heart:",{files:["./fichier/kiss3.gif"]}); break;
            }
            break;

        case "dormir":
        number2 = 3;
        var random2 = Math.floor (Math.random() * (number2 - 1 + 1)) + 1
        switch (random2) {
            case 1:message.channel.send("RHHHH!",{files:["./fichier/dormir.gif"]}); break;
            case 2:message.channel.send("RHHHH!",{files:["./fichier/dormir2.gif"]}); break;
            case 3:message.channel.send("RHHHH!",{files:["./fichier/dormir3.gif"]}); break;
        }
        break;

        case "kawaii" :
            message.channel.send("I'm KAWAIII!",{files:["./fichier/kawaii.jpg"]})
            break;

        case "ubw" :
            message.channel.send("I am the bone of my sword. \nSteel is my body, and fire is my blood. \nI have created over a thousand blades. \nUnknown to Death, \nNor known to Life. \nHave withstood pain to create many weapons. \nYet, those hands will never hold anything. \nSo as I pray, \nUnlimited Blade Works!", {files:["./fichier/ubw.gif"]})
            break;

                                                                //Commande Modération
                     
                                                                        

        }
        
});



bot.login(TOKEN);