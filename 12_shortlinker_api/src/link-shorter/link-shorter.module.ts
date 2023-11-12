import { Application, Response, Request } from "express";
import { LinkShorterController } from "./link-shorter.controller";

export class LinkShorterModule {
    linkShorterController: LinkShorterController = new LinkShorterController();

    constructor(private app: Application) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.app.post("/shorten", (req: Request, res: Response) =>
            this.linkShorterController.shortenLink(req, res)
        );
        this.app.get("/original", (req: Request, res: Response) =>
            this.linkShorterController.redirectToOriginalUrl(req, res)
        );
    }
}
