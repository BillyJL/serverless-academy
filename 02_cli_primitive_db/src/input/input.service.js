import inquirer from "inquirer";
import { messagesConfig } from "../../config/messages.js";

export class InputService {
    constructor(prompt) {
        this.prompt = prompt;
    }
    users = [];
    
    async getEnteredUsers() {
        while (true) {
            const userInput = await this.getUserInput();
            if (userInput === null) {
                break;
            }
    
            this.users.push(userInput);
        }

        return this.users.length && this.users;
    }

    async getUserInput() {
        const { nameInput, gender, age } = messagesConfig;
        const username = await this.getUserName(nameInput);
        if (username === '') {
            return null;
        }
        const questions = [
            {
                type: "list",
                name: "gender",
                message: gender,
                choices: ["Male", "Female"],
            },
            { type: "input", name: "age", message: age },
        ];

        const answers = await this.prompt(questions);
        answers.name = username;
        return answers;
    }

    async getUserName(message) {
        const answer = await this.prompt({
            type: "input",
            name: "name",
            message: message,
        });

        return answer.name;
    }

    async showSearchProposal() {
        const { searchUser } = messagesConfig;
        const question = {
            type: "confirm",
            name: "search",
            message: searchUser,
        };
        const answer = await inquirer.prompt(question);
        return answer.search;
    }
}
