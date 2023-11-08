import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { AuthController } from "./auth.controller";
import { validateSignupRequest } from "./middlewares/validateSignupRequest";

export class AuthModule {
    private readonly router: Router;
    private readonly authController: AuthController;

    constructor() {
        this.router = Router();
        this.authController = new AuthController();

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(
            "/sign-up",
            validateSignupRequest([
                body("email").isEmail().withMessage("Invalid email format"),
                body("password")
                    .isLength({ min: 6 })
                    .withMessage("Password must be at least 6 characters long"),
            ]),
            (req: Request, res: Response) =>
                this.authController.register(req, res)
        );

        this.router.post("/sign-in", (req: Request, res: Response) =>
            this.authController.login(req, res)
        );
    }

    public getRouter() {
        return this.router;
    }
}
