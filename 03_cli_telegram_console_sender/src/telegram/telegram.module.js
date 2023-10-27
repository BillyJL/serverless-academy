import { TelegramController } from './telegram.controller.js';
import { appConfig } from './../../config/app.js';

export class TelegramModule {
    constructor() {
        this.BOT_TOKEN = appConfig.TELEGRAM_BOT_TOKEN;
        this.CHAT_ID = appConfig.TELEGRAM_CHAT_ID;
    }

    run() {
        const telegramController = new TelegramController(this.BOT_TOKEN, this.CHAT_ID);
        return telegramController;
    }
}