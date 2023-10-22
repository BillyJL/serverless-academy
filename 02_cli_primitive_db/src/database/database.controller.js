import { DatabaseService } from "./database.service.js";
import { databaseConfig } from "../../config/database.js";

export class DatabaseController {
    databaseService = new DatabaseService(databaseConfig.path);

    showDatabase() {
        console.log(this.databaseService.loadDatabase());
    }

    addUsers(users) {
        if (users) {
            return this.databaseService.addUsers(users);
        }
    }

    findUserByName(name) {
        return this.databaseService.findUserByName(name);
    }
}