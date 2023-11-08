import { config } from "dotenv";

config();

export const authConfig = {
    salt: process.env.JWT_SECRET as string,
    accessTokenTTL: process.env.ACCESS_TOKEN_TTL || "1h",
}
