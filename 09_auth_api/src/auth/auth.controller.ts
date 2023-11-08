import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserService } from "../user/user.service";

export class AuthController {
    private authService: AuthService = new AuthService();
    private userService: UserService = new UserService();

    public async register(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const existingUser = await this.userService.getUserByEmail(email);
            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    error: "User with this email already exists",
                });
            }

            const hashedPassword = await this.authService.hashPassword(
                password
            );
            const id = uuidv4();
            const accessToken = this.authService.generateAccessToken(id);
            const refreshToken = this.authService.generateRefreshToken(id);

            await this.userService.addUser(
                id,
                email,
                hashedPassword,
                refreshToken
            );

            return res.status(201).json({
                success: true,
                data: {
                    id,
                    accessToken,
                    refreshToken,
                },
            });
        } catch (error) {
            res.status(409).json({
                success: false,
                error: "Registration Error",
            });
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await this.userService.getUserByEmail(email);
            
            if (!user) {
                return res.status(409).json({
                    success: false,
                    error: "User with this email doesn`t exists",
                });
            }

            const hashedPassword = user.password;
            const validPassword = this.authService.comparePasswords(
                password,
                hashedPassword
            );

            if (!validPassword) {
                return res.status(409).json({
                    success: false,
                    error: "Wrong password",
                });
            }
            const userId = user.id;
            const refreshToken = user.refresh_token;
            const accessToken = this.authService.generateAccessToken(userId);

            res.status(201).json({
                success: true,
                data: {
                    id: userId,
                    accessToken,
                    refreshToken,
                },
            });
        } catch (error) {
            res.status(409).json({
                success: false,
                error: "Login Error",
            });
        }
    }
}
