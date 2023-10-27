import TelegramBot from "node-telegram-bot-api";

export class TelegramService {
    constructor(botToken) {
        this.bot = new TelegramBot(botToken, { polling: true });
        
        this.bot.onText(/^\/start$/, (msg) => {
            const opts = {
                reply_to_message_id: msg.message_id,
                reply_markup: {
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    keyboard: [
                        [
                            "Forecast for every 3 hours",
                            "Forecast for every 6 hours",
                        ],
                    ],
                },
            };

            this.bot.sendMessage(
                msg.chat.id,
                "Select the frequency of the weather forecast",
                opts
            );
        });
    }

    sendMessage(regexp, callback) {
        this.bot.onText(regexp, async (msg) => {
            const messageText = await callback();
            this.bot.sendMessage(msg.chat.id, messageText);
        });
    }
}
