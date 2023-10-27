import { botConfig } from "../../config/bot.js";
import { TelegramController } from "./telegram.controller.js";

export class TelegramModule {
    BOT_TOKEN = botConfig.token;
    telegramController = new TelegramController(this.BOT_TOKEN)

    run() {
        return this.telegramController;
    }
}