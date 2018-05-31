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
                .addField("*servant","Donne un personnage de Fate aléatoire comme moi!")
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
            message.channel.send("I'm KAWAIII!", {files:["./fichier/kawaii.jpg"]})
            break;

        case "ubw" :
            message.channel.send("I am the bone of my sword. \nSteel is my body, and fire is my blood. \nI have created over a thousand blades. \nUnknown to Death, \nNor known to Life. \nHave withstood pain to create many weapons. \nYet, those hands will never hold anything. \nSo as I pray, \nUnlimited Blade Works!", {files:["./fichier/ubw.gif"]})
            break;

        case "servant" :
            number3 = 7;
            var random3 = Math.floor (Math.random() * (number3 - 1 + 1)) + 1
            switch (random3) {
                case 1:
                var arturia = new Discord.RichEmbed()
                    .setTitle("Arturia Pendragon")
                    .setDescription("Classe: Saber")
                    .addField("Noble Phantasm:","Excalibur, Avalon.")
                    .addField("Histoire:","Héros légendaire de la Grande Bretagne, Le Roi Arthur, Roi des Chevaliers.")
                    .setColor("0x0040ff")
                    .setImage("https://cdn.discordapp.com/attachments/365123280723509249/451465127108280352/arturia.jpg")
                    message.channel.sendEmbed(arturia);
                    break;

                case 2:
                var emiya = new Discord.RichEmbed()
                    .setTitle("Emiya Shirou")
                    .setDescription("Classe: Archer")
                    .addField("Noble Phantasm:","Ultimate Blade Works.")
                    .addField("Histoire:","Représente le futur du Master Emiya Shirou de Fate/Stay Night si il aurait fait un contract avec le Monde.")
                    .setColor("0x6D071A")
                    .setImage("https://cdn.discordapp.com/attachments/449128014702182400/451469301682143258/emiya.jpg")
                    message.channel.sendEmbed(emiya);
                    break;

                case 3:
                var medea = new Discord.RichEmbed()
                    .setTitle("Medea")
                    .setDescription("Classe: Caster")
                    .addField("Noble Phantasm:","Rule Breaker.")
                    .addField("Histoire:","Princesse de la mythologie grecque qui détient la Toison d'Or.")
                    .setColor("0x9400D3")
                    .setImage("https://vignette.wikia.nocookie.net/powerlisting/images/9/9d/Rule_Breaker.jpg/revision/latest?cb=20150411201721")
                    message.channel.sendEmbed(medea);
                    break;

                case 4:
                var tamamo = new Discord.RichEmbed()
                    .setTitle("Tamamo No Mae")
                    .setDescription("Classe: Caster")
                    .addField("Noble Phantasm:","Yata no Kagami")
                    .addField("Histoire:","C'est la Kitsune de l'empereur Toba")
                    .setColor("0xEE82EE")
                    .setImage("https://vignette.wikia.nocookie.net/fategrandorder/images/7/72/Tamamocaster.png/revision/latest/scale-to-width-down/350?cb=20151021214450")
                    message.channel.sendEmbed(tamamo);
                    break;

                case 5:
                var astolfo = new Discord.RichEmbed()
                    .setTitle("Astolfo")
                    .setDescription("Classe: Rider")
                    .addField("Noble Phantasm:","Luna Break Manual")
                    .addField("Histoire:","C'est l'un des Paladins de Charlemagne")
                    .setColor("0xEE82EE")
                    .setImage("https://vignette.wikia.nocookie.net/fategrandorder/images/3/3c/Astolfo1.png/revision/latest/scale-to-width-down/350?cb=20160309054320")
                    message.channel.sendEmbed(astolfo);
                    break;
                
                case 6:
                var Mordred = new Discord.RichEmbed()
                    .setTitle("Mordred")
                    .setDescription("Classe: Saber")
                    .addField("Noble Phantasm:","Clarent Blood Arthur")
                    .addField("Histoire:","Mordred est un Homonculus qui est un clone du Roi Arthur dans le but de prendre sa place mais son père (qui est Arthur) l'a rejeté ce qui lui a mené a une rébéllion et voulut le tuer.")
                    .setColor("0x6D071A")
                    .setImage("https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-396093.png")
                    message.channel.sendEmbed(Mordred);
                    break;

                case 7:
                var heracles = new Discord.RichEmbed()
                    .setTitle("Héraclès")
                    .setDescription("Classe: Berserker")
                    .addField("Noble Phantasm:","God Hand")
                    .addField("Histoire:","Héros de la mythologie grecque, Héraclès est le fils de Zeus et est le héros le plus fort et célèbre. Son exploit est d'avoir fait les travaux d'Eurysthée suite au fait qu'il a tué ses enfants et sa femme.")
                    .setColor("0x6C6464")
                    .setImage("https://cdn.discordapp.com/attachments/451469876956233749/451813711988916224/berserker.jpg")
                    message.channel.sendEmbed(heracles);
                    break;

            }
        break;

                                                                //Commande Modération
                     
                                                                        

        }
        
});



bot.login(TOKEN);