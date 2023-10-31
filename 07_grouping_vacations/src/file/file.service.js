import { readFileSync, writeFileSync } from 'fs';

export class FileService {
    readFile(filePath) {
        return readFileSync(filePath, { encoding: "utf-8" });
    }

    writeFile(filePath, data) {
        writeFileSync(filePath, data);
    }
}