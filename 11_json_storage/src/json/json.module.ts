import { Application, Request, Response } from "express";
import { JsonBaseController } from "./json.controller";


export class JsonBaseModule {
    jsonBaseController: JsonBaseController = new JsonBaseController();

    constructor(private app: Application) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.app.put("/:json_path", (req: Request, res: Response) =>
            this.jsonBaseController.putJson(req, res)
        );
        this.app.get("/:json_path", (req: Request, res: Response) =>
            this.jsonBaseController.getJson(req, res)
        );
    }
}
