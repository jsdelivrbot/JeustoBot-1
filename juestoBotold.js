 
 (function () { 
// Change this to your GitHub username so you don't have to modify so many things.
    var fork = "PowerOfMad";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();
     }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Lietuvos-Botas",
      language: "english",
      chatLink: "https://rawgit.com/PowerOfMad/Ul-Bot/master/lt.json",
      scriptLink: "https://raw.githubusercontent.com/PowerOfMad/Ul-Bot/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 50, // 1-200
      startupVolume: 15, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      autoroulette: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 10000000,
      afkRemoval: false, 
      maximumDc: 120,
      bouncerPlus: true,
      blacklistEnabled: false,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 15,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 6.50,
      autodisable: false,
      commandCooldown: 60,
      usercommandsEnabled: true,
      lockskipPosition: 10,
      lockskipReasons: [
            ["zanras", "Daina yra absurdiška. "],
            ["op", "Daina yra per dažnai leidžiama šiame kambaryje. "],
            ["history", "Ši daina neseniai grojo. "],
            ["nsfw", "Daina kurią paleidote buvo NSFW (erotika arba per daug keiksmažodžių). "],
            ["negroja", "Daina kurią paleidote negroja. "]
      ],
      skipReasons: [
            ["zanras", "Daina yra absurdiška. "],
            ["op", "Daina yra per dažnai leidžiama šiame kambaryje. "],
            ["history", "Ši daina neseniai grojo. "],
            ["nsfw", "Daina kurią paleidote buvo NSFW (erotika arba per daug keiksmažodžių). "],
            ["negroja", "Daina kurią paleidote negroja. "]
      ],
      afkpositionCheck: 0,
      afkRankCheck: "user",
      motdEnabled: true,
      motdInterval: 5,
      motd: "@everyone Čia už „Už Lietuvą“ skype pokalbis prieinamas visiems! - https://join.skype.com/mFvUty4eBXDO // Iškritai iš DJ eilės? Rašyk !dc sugrįžimui. ",
      filterChat: false,
      etaRestriction: true,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: "https://www.facebook.com/Už-Lietuvą-630256890371211",
      twitter: null,
      intervalMessages: ["!roulette", "@djs rulete paleista, norėdami dalyvauti rašykite !play."],
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/PowerOfMad/Ul-Bot/master/blacklists/NSFW.json",
        OP: "https://rawgit.com/PowerOfMad/Ul-Bot/master/blacklists/OP.json",
       BANNED: "https://rawgit.com/PowerOfMad/Ul-Bot/master/blacklists/BANNED.json"
     }
    }));

  // Start the bot and extend it when it has loaded.
    $.getScript("https://raw.githubusercontent.com/PowerOfMad/Ul-Bot/master/basicBot.js", extend);

}).call(this); 
