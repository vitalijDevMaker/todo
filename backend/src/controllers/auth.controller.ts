import type {Request, Response} from "express";
import {registerUser} from "../services/auth.service.ts";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("Missing required field");
    }

    const user = await registerUser(name, email, password);

    return res.status(200).json({
        email: user.email,
        name: user.name,
        id: user.id,
    });

}