import { BotController } from "./bot.controller.js";

export class BotModule {
  botController = new BotController();

  run() {
    this.botController.startConversation();
  }
}