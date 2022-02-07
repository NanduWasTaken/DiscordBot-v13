// Coded By Nandu
const { Client, MessageEmbed, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config');
const colour = require('colour');
const { readdirSync, fs } = require('fs');
const prefix = config.prefix;
const web = require('./server');
console.log(`NodeJS Version ${process.version}`);
// End of importing modules

// Global Variables Collections
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

// Reading command and event handler
// Command handler
for(const file of readdirSync('./commands/')) { // Iterates through every file in the ./commands/ folder.
  if(!file.endsWith(".js")) return; // This is to prevent any files that aren't .js files from being processed as a command.
  var fileName = file.substring(0, file.length - 3); // Removes last three characters from file name to get rid of the .js extension (which should™ be .js ^^) for propper file name.

  var fileContents = require(`./commands/${file}`); // Defines fileContents of the export of the command in question.
  client.commands.set(fileName, fileContents); // Adds the command name to the client.commands collection with a value of it's respective exports.
  }
// Event Handler
for(const file of readdirSync('./events/')) { // Iterates through every file in the ./events/ folder.
  if(!file.endsWith(".js")) return; // This is to prevent any files that aren't .js files from being processed as a command.
  var fileName = file.substring(0, file.length - 3); // Removes last three characters from file name to get rid of the .js extension (which should™ be .js ^^) for propper file name.
  
  var fileContents = require(`./events/${file}`); // Defines fileContents of the export of the event in question.

  client.on(fileName, fileContents.bind(null, client)); // Set's the event of whatever the file name is to the bound function of said export (this will automatically make the first parmater of the export function to client.
  delete require.cache[require.resolve(`./events/${file}`)]; // Removes the cache of the required file to make it easier to reload and not take of more memory than needed.
}
 // sends console log when the bot is ready 
client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`.green));

// Bot Login
client.login(config.token)


