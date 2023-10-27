import { Command } from "commander";

export class CommandService {
    program = new Command();

    createCommand(name, description, action) {
        this.program.command(name).description(description).action(action);
    }

    parse(argv) {
        this.program.parse(argv);
    }
}
