import { Router, Request, Response } from "express";
import { LocationController } from "./location.controller";

export class LocationModule {
    private readonly router: Router;
    private readonly locationController: LocationController;

    constructor() {
        this.router = Router();
        this.locationController = new LocationController();

        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/detect-location", (req: Request, res: Response) =>
            this.locationController.detectLocation(req, res)
        );
    }

    public getRouter(): Router {
        return this.router;
    }
}