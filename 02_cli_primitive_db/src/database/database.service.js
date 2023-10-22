import { readFileSync, writeFileSync } from "fs";
import { deferentFigureBrackets, separatorsAndArray } from "./constants/regularExpression.js";

export class DatabaseService {
    constructor(databaseFilePath) {
        this.databaseFilePath = databaseFilePath;
    }

    loadDatabase() {
        try {
            const data = readFileSync(this.databaseFilePath, "utf8");
            const finalData = this.prepareOutputData(data);
            return JSON.parse(finalData);
        } catch (error) {
            return [];
        }
    }

    saveDatabase(users) {
        writeFileSync(this.databaseFilePath, users, {
            encoding: "utf8",
            flag: "a+",
        });
    }

    findUserByName(name) {
        const users = this.loadDatabase();
        return users.find(
            (user) => user.name.toLowerCase() === name.toLowerCase()
        );
    }

    addUsers(users) {
        const preparedData = this.prepareInputData(users);
        this.saveDatabase(preparedData);
    }

    prepareInputData(data) {
        const stringifiedData = JSON.stringify(data);
        return stringifiedData.match(separatorsAndArray).join("");
    }

    prepareOutputData(data) {
        return '[' + data.replace(deferentFigureBrackets, '},') + ']';
    }
}
