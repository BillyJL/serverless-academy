import { CommandService } from "./command.service.js";

export class CommandController {
    commandService = new CommandService();

    sendMessage(action) {
        this.commandService.createCommand(
            "m <message>",
            "Send a message to the Telegram bot",
            action
        );
    }

    sendPicture(action) {
        this.commandService.createCommand(
            "p <path>",
            "Send a photo to the Telegram bot",
            action
        );
    }

    displayHelp() {
        this.commandService.createCommand(
            "h",
            "Show example of usage",
            () => {
                console.log("");
                console.log("Example usage:");
                console.log('  $ npm start m "Hello, world!"');
                console.log("  $ npm start p /path/to/photo.jpg");
                console.log("  $ npm start h");
                process.exit();
            }
        );
    }

    parseInput() {
        const commandInput = process.argv;
        this.commandService.parse(commandInput);
    }
}
