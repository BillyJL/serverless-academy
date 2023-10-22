import { InputService } from "./input.service.js";
import { messagesConfig } from "../../config/messages.js";
import inquirer from 'inquirer';

export class InputController {
    prompt = inquirer.createPromptModule();
    inputService = new InputService(this.prompt);

    getEnteredUsers() {
        return this.inputService.getEnteredUsers();
    }

    getUserName() {
        return this.inputService.getUserName();
    }

    showSearchProposal() {
        return this.inputService.showSearchProposal();
    }
}