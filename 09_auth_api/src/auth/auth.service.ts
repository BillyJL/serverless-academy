import { sign, verify, JwtPayload } from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import { authConfig } from "../config/auth";
import { Request } from "express";

export class AuthService {
    public generateAccessToken(userId: string) {
        const { accessTokenTTL, salt } = authConfig;
        return sign({ userId }, salt, {
            expiresIn: accessTokenTTL,
        });
    }

    public generateRefreshToken(userId: string) {
        const { salt } = authConfig;
        return sign({ userId }, salt);
    }

    public async hashPassword(password: string) {
        return hash(password, 10);
    }

    public async comparePasswords(
        plainPassword: string,
        hashedPassword: string
    ) {
        return compare(plainPassword, hashedPassword);
    }

    public getAccessToken(req: Request) {
        return req.headers.authorization?.split(" ")[1];
    }

    public decodeToken(token: string) {
        const { salt } = authConfig;
        const decodedToken = verify(token, salt);
        return decodedToken as JwtPayload;
    }
}
