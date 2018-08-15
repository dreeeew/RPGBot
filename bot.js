const Discord = require('discord.js');
const client = new Discord.Client();
client.on("message", message => {
  // Your commands here
  if(message.content === "ping"){
     // the robot answers pong!
     message.channel.send("Pong!");
  };
  if(message.content === "tired"){
    message.channel.send("Sleep is for the weak.");
  };
  if(message.content === "bitch"){
    message.channel.send("You are the bitch.");
  };
});
client.login(process.env.BOT_TOKEN);
