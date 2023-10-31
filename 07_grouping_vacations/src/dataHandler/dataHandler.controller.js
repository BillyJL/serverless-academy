import { DataHandlerService } from "./dataHandler.service.js";

export class DataHandlerController {
    dataHandlerService = new DataHandlerService();

    transformData(inputData) {
        return this.dataHandlerService.transformData(inputData);
    }
}