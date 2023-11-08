import { Request, Response } from "express";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";

export class UserController {
    userService: UserService = new UserService();
    authService: AuthService = new AuthService();

    public async getMe(req: Request, res: Response) {
        const accessToken = this.authService.getAccessToken(req);
        if (accessToken) {
            const userId = this.authService.decodeToken(accessToken).userId;
            const user = await this.userService.getUserById(userId);
            res.status(200).json({
                success: true,
                data: user,
            });
        }
    }
}
