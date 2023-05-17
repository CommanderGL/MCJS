import mineflayer from 'mineflayer';
import viewer from 'prismarine-viewer';
import express from 'express';

const server = express();
server.use('/play', express.static('./public/'));

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 25565,
    username: "Player" + Math.round(Math.random() * 100),
    version: '1.19.1'
});

bot.once("spawn", () => {
    viewer.mineflayer(bot, {
        port: 5051,
        firstPerson: true,
        viewDistance: 4
    });
});

server.listen(5050);