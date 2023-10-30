import { getApiResponse } from "./utils/getApiResponse.js";
import { monoBankConfig } from "../config/monobank.js";
import NodeCache from "node-cache";

export class MonobankService {
    cache = new NodeCache();

    async getEur() {
        const {
            code: { eur },
        } = monoBankConfig;

        const { rateBuy: buy, rateSell: sale } = await this.getCurrency(eur);

        return { buy, sale };
    }

    async getUsd() {
        const {
            code: { usd },
        } = monoBankConfig;

        const { rateBuy: buy, rateSell: sale } = await this.getCurrency(usd);

        return { buy, sale };
    }

    async getCurrency(code) {
        const {
            apiUrl,
            code: { uah },
        } = monoBankConfig;
        const cacheData = this.cache.get("response");
        if (cacheData) {
            return cacheData.find(
                ({ currencyCodeA, currencyCodeB }) =>
                    currencyCodeA === code && currencyCodeB === uah
            );
        }

        const response = await getApiResponse(apiUrl);
        this.cache.set("response", response.data, 60);

        return response.data.find(
            ({ currencyCodeA, currencyCodeB }) =>
                currencyCodeA === code && currencyCodeB === uah
        );
    }
}
