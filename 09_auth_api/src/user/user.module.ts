import { Router, Request, Response } from "express";
import { UserController } from "./user.controller";
import { verifyAccessToken } from "../auth/middlewares/verifyAccessToken";

export class UserModule {
    private readonly router: Router;
    private readonly userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/me", verifyAccessToken, (req: Request, res: Response) =>
            this.userController.getMe(req, res)
        );
    }

    public getRouter() {
        return this.router;
    }
}