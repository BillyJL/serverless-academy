import { Pool } from "pg";
import { databaseConfig } from "../config/database";

export class Database {
    private static instance: Database;
    private readonly pool: Pool;

    private constructor() {
        this.pool = new Pool(databaseConfig);
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async query(queryText: string, values?: any[]) {
        try {
            const result = await this.pool.query(queryText, values);
            return result;
        } catch (error) {
            throw new Error(`Error executing query: ${error}`);
        }
    }
}
