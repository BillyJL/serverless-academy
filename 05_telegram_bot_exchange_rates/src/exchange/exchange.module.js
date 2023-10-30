import { ExchangeController } from './exchange.controller.js';
import { BotController } from '../bot/bot.controller.js';
import { eur, usd } from "./constants/regexes.js"

export class ExchangeModule {
    botController = new BotController();
    exchangeController = new ExchangeController();

    run() {
      this.attachEventListeners();
    }

    attachEventListeners() {
      this.botController.sendMessage(
          eur,
          () => this.exchangeController.getEurExchange()
      );

      this.botController.sendMessage(
          usd,
          () => this.exchangeController.getUsdExchange()
      );
    }
}
