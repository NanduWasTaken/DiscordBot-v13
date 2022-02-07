const config = require('../config.js');

module.exports = (client) => { // Function for when client has logged in.
  if(!client.user.bot) { console.log("[Tips] Don't self bot idot"); return process.exit() }; // See the logic is that if someone is stupid enough to self bot they wont find this //double check
  client.user.setPresence( // Set's presence data to following object \/
    {
      status: "online", // Makes status "online", (Green Bubble).
      afk: false, // Sets AFK to false, even though it's useless on bots....
      game: { // Game object.
        name: config.statusMessage, // Set's game name to the statusMessage value of the config file.
        url: null, // Set's the game's URL to null because this is a PLAYING presence.
        type: config.statusType // Set's game type to "Playing ..." This is pretty easy to change and cool so here's a doc: https://discord.js.org/#/docs/main/stable/typedef/ActivityType
          }
      }
  );


};