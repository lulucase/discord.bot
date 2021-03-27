const Discord = require ("discord.js");

const { prefix, token } = require('./config.json');

const Client = new Discord.Client();

Client.once('ready' , () => {
    console.log('Ready!');
});

Client.on('message' , (message) => {
  
});  

Client.login(process.env.TOKEN);