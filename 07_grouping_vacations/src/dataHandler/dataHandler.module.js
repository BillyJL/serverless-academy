import { DataHandlerController } from "./dataHandler.controller.js";

export class DataHandlerModule {
    run() {
        const dataHandlerController = new DataHandlerController();
        return dataHandlerController;
    }
}