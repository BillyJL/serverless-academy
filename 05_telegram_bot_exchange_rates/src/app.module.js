import { ExchangeModule } from './exchange/exchange.module.js';
import { BotModule } from "./bot/bot.module.js";

export class AppModule {
    botModule = new BotModule();
    exchangeModule = new ExchangeModule();

    run() {
        this.botModule.run();
        this.exchangeModule.run();
    }
}