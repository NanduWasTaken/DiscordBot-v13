module.exports = {
  prefix: '.', // your bot prefix Example !m/!/-/ etc  anything you eant
  port: '2929', // web server port 
  colours: 'RANDOM', // emmbbed colours of bot emmbeed messages RANDOM means it will show random colour
  statusType: 'PLAYING', // Status Type Example PLAYING/WATCHING/LISTENING/STREAMING
  statusMessage: 'TicTacTo', // Status Message What ever you like
  datapass: 'process.env.DB_URI', // If you dont know what is this dont touch it
  token: process.env.TOKEN // your bot token 
};