import { pathsConfig } from "./config/paths.js";
import { DataHandlerModule } from "./dataHandler/dataHandler.module.js";
import { FileModule } from "./file/file.module.js";

export class AppModule {
    run() {
        const fileController = new FileModule().run();
        const dataHandler = new DataHandlerModule().run();
        const { inputPath, outputPath } = pathsConfig;

        const data = fileController.readFile(inputPath);
        const transformedData = dataHandler.transformData(data);
        fileController.writeFile(outputPath, transformedData);
    }
}
