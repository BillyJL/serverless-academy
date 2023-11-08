import express, { Application, json } from "express";
import bodyParser from "body-parser";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";

export class AppModule {
    private readonly app: Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeModules();
    }

    private initializeMiddlewares() {
        this.app.use(json());
        this.app.use(bodyParser.urlencoded());
    }

    private initializeModules() {
        const authModule = new AuthModule();
        const userModule = new UserModule();

        this.app.use("/auth", authModule.getRouter());
        this.app.use("/user", userModule.getRouter());
    }

    public getApp() {
        return this.app;
    }
}
