
// Message Handling Coded by Nandu 

// This Has Been Explained Very Strictly For Your Understanding of the machanics

const config = require('../config.js');

module.exports = (client, message) => { // Function for when a message is sent. "message" = the message object of said new message.

  if(!message.content.startsWith(config.prefix)) return; // Stop if the message doesn't start with the specified prefix.

  if(message.author.bot) return; // Stop if the account that sent the message is a bot. This avoids loops and bot abuse, trust me, keep this.

  

// Command and Argument Defining.

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Sets "args" to the seperate arguments, Ex: message: "Hello there world!" will be turned into ["Hello", "there", "world!"].

  const command = args.shift().toLowerCase() // This will remove the first argument of "args" which is actually going to be the command. The cool thing though is this will return the value that is removed meaning we define "command" of the removed argument and voila we have command defined and "args" no longer contains the command.

  // Command Handling.

var cmd = client.commands.get(command); // Fetches command from client.commands collection.

  if(!cmd) return; // This will make it so that if the bot doesn't have the specified command, it won't run it. Obviously..

  cmd(client, message, args); // Run's the command, passing through client, message and args.

  /** Note! If you change the structure of your command export you might have to change how this line runs things!!*/

}
