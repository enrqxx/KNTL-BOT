const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwMTI2MTg5NzY1NDg0NTU1.YdxVhA.XiDXs7xUjYFvG4AMs-p_wj6NSik"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi") {
        message.reply("Hello !!")
    }
})

client.login(process.env.TOKEN)