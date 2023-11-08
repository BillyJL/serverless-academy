import { Request, Response } from "express";
import { validationResult, ValidationChain } from "express-validator";

export function validateSignupRequest(validationRules: ValidationChain[]) {
    return async (req: Request, res: Response, next: () => void) => {
        await Promise.all(
            validationRules.map((validation) => validation.run(req))
        );

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(409).json({
                success: false,
                error: "Incorrect data during registration",
            });
        }

        next();
    };
}
