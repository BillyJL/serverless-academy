import express, { Application, json } from "express";
import bodyParser from "body-parser";
import { JsonBaseModule } from "./json/json.module";

export class AppModule {
    private readonly app: Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeModules();
    }

    private initializeMiddlewares(): void {
        this.app.use(json());
        this.app.use(bodyParser.urlencoded());
    }

    private initializeModules(): void {
        new JsonBaseModule(this.app);
    }

    public getApp(): Application {
        return this.app;
    }
}
