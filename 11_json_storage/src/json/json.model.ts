import { Database } from "../database/database.singleton";

export class JsonModel {
    private db: Database = Database.getInstance();

    constructor() {
        this.createTable();
    }

    public async getJson(path: string) {
        const checkUserQuery = "SELECT * FROM json_data WHERE path = $1";
        const checkUserValues = [path];
        const json = await this.db.query(checkUserQuery, checkUserValues);

        return json;
    }

    public async addJson(
        path: string,
        data: string,
    ) {
        const query =
            "INSERT INTO json_data (path, data) VALUES($1, $2) RETURNING *";
        const values = [path, data];

        await this.db.query(query, values);
    }

    private async createTable() {
        try {
            const query = `
            CREATE TABLE IF NOT EXISTS "json_data" (
            "path" TEXT NOT NULL,
            "data" TEXT NOT NULL,
            PRIMARY KEY ("path")
        );`;

        await this.db.query(query);
        } catch(error) {
            console.log(error);
        }
    }
}
