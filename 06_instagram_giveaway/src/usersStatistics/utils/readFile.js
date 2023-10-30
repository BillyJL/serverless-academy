import { readFileSync } from "fs";

export function readFile(filePath) {
    return readFileSync(filePath, { encoding: "utf-8" });
}
