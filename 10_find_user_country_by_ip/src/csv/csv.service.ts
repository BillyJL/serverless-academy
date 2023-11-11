import { createReadStream } from "fs";
import csv from "csv-parser";
import { CreateStreamArgs } from "./interfaces";
import { promisify } from "../core";
import { TableColumn } from "../config";

export class CsvService<Type extends unknown[]> {
    public readCsv(csvFilePath: string): Promise<Type> {
        return promisify<Type>((resolve, reject) => {
            this.createStream({ csvFilePath, resolve, reject });
        });
    }

    private createStream(args: CreateStreamArgs<Type>) {
        const { csvFilePath, reject, resolve } = args;

        const buffer: unknown[] = [];

        createReadStream(csvFilePath)
            .pipe(
                csv([
                    TableColumn.START,
                    TableColumn.END,
                    TableColumn.COUNTRY_CODE,
                    TableColumn.COUNTRY_NAME,
                ])
            )
            .on("data", (row) => {
                buffer.push(row);
            })
            .on("end", () => {
                resolve(buffer as Type);
            })
            .on("error", (error) => {
                reject(error);
            });
    }
}
