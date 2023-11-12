import { Request, Response } from "express";
import { JsonService } from "./json.service";

export class JsonBaseController {
    private jsonService: JsonService = new JsonService();

    public async putJson(req: Request, res: Response): Promise<void> {
        const jsonPath = req.params.json_path;
        const jsonData = req.body;

        if (!jsonPath || !jsonData) {
            res.status(400).json({ error: "Invalid request format" });
            return;
        }

        await this.jsonService.putJson(jsonPath, jsonData);

        res.status(200).json({ message: "JSON document stored successfully" });
    }

    public async getJson(req: Request, res: Response): Promise<void> {
        const jsonPath = req.params.json_path;
        const json = await this.jsonService.getJson(jsonPath);
        if (!json) {
            res.status(404).json({
                message: "File not found",
            });
            return;
        }
        const data = JSON.parse(json.data);

        res.status(200).json(data);
    }
}
