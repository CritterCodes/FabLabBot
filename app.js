import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { db } from './lib/database.lib.js';
import path from 'path';

dotenv.config();
const app = express();

app.use(cors({
  origin: '*'
}));

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});



// TODO: Environment based configs
const config = {
  url: process.env.MONGO_URL,
  database: 'process.env.DB',
  minPoolSize: 3,
  maxPoolSize: 10,
};

// db.init(config);
    
// Middleware here
// Routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);

export default app;