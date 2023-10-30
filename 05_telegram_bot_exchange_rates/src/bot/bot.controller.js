import { BotService } from "./bot.service.js";

export class BotController {
    botService = new BotService();

    sendMessage(textRegexp, callback) {
        this.botService.sendMessage(textRegexp, callback);
    }

    startConversation() {
        this.botService.startConversation();
    }
}
