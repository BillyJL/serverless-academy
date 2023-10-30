import { getApiResponse } from "./utils/getApiResponse.js";
import { privatBankConfig } from "../config/privatbank.js"
import { getProperCcy } from "./utils/getProperCcy.js";

export class PrivatbankService {
    async getEur() {
        const data = await this.getExchange();
        const { buy, sale } = getProperCcy(data, "EUR");

        return { buy, sale };
    }

    async getUsd() {
        const data = await this.getExchange();
        const { buy, sale } = getProperCcy(data, "USD");

        return { buy, sale };
    }

    async getExchange() {
        const { apiUrl } = privatBankConfig;
        const response = await getApiResponse(apiUrl);

        return response.data;
    }
}
