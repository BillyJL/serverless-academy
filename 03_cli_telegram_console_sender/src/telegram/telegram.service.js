import TelegramBot from 'node-telegram-bot-api';

export class TelegramService {
    constructor(botToken, chatId) {
        this.bot = new TelegramBot(botToken, { polling: true });
        this.chatId = chatId
    }

    async sendMessage(message) {
        await this.bot.sendMessage(this.chatId, message);
    }

    async sendPhoto(path) {
        await this.bot.sendPhoto(this.chatId, path);
    }
}