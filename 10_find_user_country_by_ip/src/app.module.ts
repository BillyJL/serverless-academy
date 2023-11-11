import express, { Application, json } from "express";
import bodyParser from "body-parser";
import { LocationModule } from "./location/location.module";
import { appConfig } from "./config";

export class AppModule {
    private readonly app: Application;

    constructor() {
        this.app = express();

        this.bootstrapApplication();
    }

    private bootstrapApplication(): void {
        this.initializeMiddlewares();
        this.initializeModules();
    }

    private initializeMiddlewares(): void {
        this.app.use(json());
        this.app.use(bodyParser.urlencoded());
        this.app.enable(appConfig.trustProxy);
    }

    private initializeModules(): void {
        const locationModule = new LocationModule();

        this.app.use("/location", locationModule.getRouter());
    }

    public getApp(): Application {
        return this.app;
    }
}
