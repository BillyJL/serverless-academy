import { start } from "./constants/regexes.js";
import { createOptions } from './utils/createOptions.js';
import { botConfig } from '../config/bot.js';
import { Bot } from '../telegram/bot.singleton.js';

export class BotService {
    bot = new Bot().get();

    sendMessage(textRegexp, callback) {
        this.bot.onText(textRegexp, async (message) => {
            const text = await callback();
            this.bot.sendMessage(message.chat.id, text);
        });
    }

    startConversation() {
        this.bot.onText(start, (message) => {
            this.bot.sendMessage(
                message.chat.id,
                "Getting the exchange rate",
                createOptions(botConfig, message)
            );
        });
    }
}
