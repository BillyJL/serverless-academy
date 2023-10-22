import { messagesConfig } from "../config/messages.js";
import { DatabaseModule } from "./database/database.module.js";
import { InputModule } from "./input/input.module.js";

export async function startApp() {
    const input = new InputModule().run();
    const database = new DatabaseModule().run();
    const users = await input.getEnteredUsers();
    database.addUsers(users);
    const answer = await input.showSearchProposal();

    if (answer) {
        database.showDatabase();
        const {nameSearch} = messagesConfig;
        const searchName = await input.getUserName(nameSearch);
        const foundUser = database.findUserByName(searchName);
        if (foundUser) {
            console.log('User found:', foundUser);
        } else {
            console.log('User not found.');
        }
    }
}