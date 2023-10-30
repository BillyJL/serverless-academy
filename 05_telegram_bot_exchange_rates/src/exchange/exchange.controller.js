import { MonobankService } from "./monobank.service.js";
import { PrivatbankService } from "./privatbank.service.js";
import { getExchangeResponse } from "./utils/getExchangeResponse.js";

export class ExchangeController {
    monobankService = new MonobankService();
    privatbankService = new PrivatbankService();

    async getEurExchange() {
        const mono = await this.monobankService.getEur();
        const privat = await this.privatbankService.getEur();

        return getExchangeResponse(mono, privat)
    }

    async getUsdExchange() {
        const mono = await this.monobankService.getUsd();
        const privat = await this.privatbankService.getUsd();

        return getExchangeResponse(mono, privat);
    }
}
