import { CommandController } from "./command.controller.js";

export class CommandModule {
    run() {
        const commandController = new CommandController();
        return commandController;
    }
}