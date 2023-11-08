import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "../../config/auth";
import { AuthService } from "../auth.service";

export const verifyAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authService = new AuthService();
    const accessToken = authService.getAccessToken(req);

    if (!accessToken) {
        return res.status(401).json({ error: "Access token is missing" });
    }

    try {
        const salt = authConfig.salt;
        verify(accessToken, salt);
        next();
    } catch (error) {
        console.log(error);
        
        return res.status(403).json({ error: "Invalid access token" });
    }
};
