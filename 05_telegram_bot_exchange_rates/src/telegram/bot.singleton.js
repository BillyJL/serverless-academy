import TelegramBot from "node-telegram-bot-api";
import { botConfig } from "../config/bot.js";

let instance;

export class Bot {
    get() {
        if (instance) {
            return instance;
        }

        instance = this.create();

        return instance;
    }

    create() {
        const { botToken } = botConfig;
        const instance = new TelegramBot(botToken, { polling: true });
        return instance;
    }
}
