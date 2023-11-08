import { Database } from "../database/database.singleton";

export class UserModel {
    private db: Database = Database.getInstance();

    constructor() {
        this.createTable();
    }

    public async getUserById(userId: string) {
        const query = "SELECT id, email FROM users WHERE id = $1";
        const values = [userId];
        const user = await this.db.query(query, values);

        return user;
    }

    public async getUserByEmail(email: string) {
        const checkUserQuery = "SELECT * FROM users WHERE email = $1";
        const checkUserValues = [email];
        const user = await this.db.query(checkUserQuery, checkUserValues);

        return user;
    }

    public async addUser(
        id: string,
        email: string,
        password: string,
        refreshToken: string
    ) {
        const query =
            "INSERT INTO users (id, email, password, refresh_token) VALUES($1, $2, $3, $4) RETURNING *";
        const values = [id, email, password, refreshToken];

        await this.db.query(query, values);
    }

    private async createTable() {
        try {
            const query = `
            CREATE TABLE IF NOT EXISTS "users" (
            "id" UUID NOT NULL,
            "email" text NOT NULL,
            "password" text NOT NULL,
            "refresh_token" text NOT NULL,
            PRIMARY KEY ("id")
        );`;

        await this.db.query(query);
        } catch(error) {
            console.log(error);
        }
    }
}
