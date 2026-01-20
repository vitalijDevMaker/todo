import type {Request, Response} from "express";
import {loginUser, registerUser} from "../services/auth.service.ts";
import appConfig from "../app.config.ts";

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

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

     if (!email || !password) {
         return res.status(400).json("Missing required field");
     }

    const {accessToken, refreshToken, id} = await loginUser(email, password);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: appConfig.refresh_token_expired * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        accessToken: accessToken,
        email,
        id
    })
}