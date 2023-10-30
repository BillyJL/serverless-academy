import { botConfig } from "../config/bot.js";
import { TelegramController } from "./telegram.controller.js";

export class TelegramModule {
    telegramController = new TelegramController(botConfig.token)

    run() {
        return this.telegramController;
    }
}