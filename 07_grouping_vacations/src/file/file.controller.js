import { FileService } from "./file.service.js";

export class FileController {
    fileService = new FileService();

    readFile(filePath) {
        const data = this.fileService.readFile(filePath);
        return JSON.parse(data);
    }

    writeFile(filePath, data) {
        const preparedData = JSON.stringify(data)
        this.fileService.writeFile(filePath, preparedData);
    }
}