// app.module.ts
import express, { Application, json } from "express";
import bodyParser from "body-parser";
import { LinkShorterModule } from "./link-shorter/link-shorter.module";

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
        new LinkShorterModule(this.app)
    }

    public getApp(): Application {
        return this.app;
    }
}
