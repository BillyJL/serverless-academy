import { DatabaseController } from "./database.controller.js";

export class DatabaseModule {
    run() {
        const databaseController = new DatabaseController();
        return databaseController;
    }
}