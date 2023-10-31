import { FileController } from "./file.controller.js";

export class FileModule {
    run() {
        const fileController = new FileController();
        return fileController;
    }
}