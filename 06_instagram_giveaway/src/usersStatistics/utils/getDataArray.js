import { readFile } from "./readFile.js";

export async function getDataArray() {
    const filePromises = Array.from({ length: 20 }, (_, index) => {
        return readFile(`./data/out${index}.txt`).split("\n");
    });

    const dataArray = await Promise.all(filePromises);

    return dataArray;
}