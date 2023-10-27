import { TelegramService } from "./telegram.service.js";

export class TelegramController {
    constructor(botToken) {
        this.telegramService = new TelegramService(botToken)
    }

    sendTreeHoursForecast(callback) {
        this.telegramService.sendMessage(/Forecast for every 3 hours/, callback);
    }

    sendSixHoursForecast(callback) {
        this.telegramService.sendMessage(/Forecast for every 6 hours/, callback);
    }
}