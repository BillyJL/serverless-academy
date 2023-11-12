import { JsonModel } from "./json.model"

export class JsonService {
    jsonModel: JsonModel = new JsonModel();

    async putJson(path: string, jsonData: string): Promise<void> {
        await this.jsonModel.addJson(path, jsonData);
    }

    async getJson(path: string) {
        const row = (await this.jsonModel.getJson(path)).rows[0];
        return row;
    }
}