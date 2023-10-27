import { TelegramService } from "./telegram.service.js";

export class TelegramController {
    constructor(botToken, chatId) {
        this.telegramService = new TelegramService(botToken, chatId);
    }

    sendMessage(message) {
        return this.telegramService.sendMessage(message);
    }

    sendPhoto(photoPath) {
        return this.telegramService.sendPhoto(photoPath);
    }
}