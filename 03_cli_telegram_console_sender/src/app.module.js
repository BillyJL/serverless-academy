import { CommandModule } from "./command/command.module.js";
import { TelegramModule } from "./telegram/telegram.module.js";

export function startApp() {
    const telegram = new TelegramModule().run();
    const commands = new CommandModule().run()

    commands.sendMessage(async (message) => {
        await telegram.sendMessage(message);
        process.exit();
    });

    commands.sendPicture(async (path) => {
        await telegram.sendPhoto(path);
        process.exit();
    });

    commands.displayHelp();

    commands.parseInput();

}
