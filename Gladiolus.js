const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
  console.log("I am ready!");
});

// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("online");
});

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
    client.user.setGame("with my code");
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  if(command === 'ping') {
  message.channel.send('Pong!');
  } else 
  if (command === 'blah') {
  message.channel.send('Meh.');
}
  
 if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;
  message.channel.send("The prefix has been changed.");

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}
});



client.login(config.token);