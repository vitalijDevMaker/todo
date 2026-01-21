import type { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service.ts";
import appConfig from "../app.config.ts";
import BaseController from "./base.controller.ts";

class AuthController extends BaseController {
  public register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing required field");
    }

    const user = await registerUser(name, email, password);
    const { accessToken } = await this.loginAndSetRefreshToken(
      res,
      email,
      password,
    );

    return BaseController.SendResponse(res, true, 200, {
      email: user.email,
      name: user.name,
      id: user.id,
      accessToken,
    });
  };

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing required field");
    }

    const { accessToken, id } = await this.loginAndSetRefreshToken(
      res,
      email,
      password,
    );

    return BaseController.SendResponse(res, true, 200, {
      accessToken: accessToken,
      email,
      id,
    });
  };

  async loginAndSetRefreshToken(
    res: Response,
    email: string,
    password: string,
  ) {
    const loginData = await loginUser(email, password);
    console.log(loginData);
    res.cookie("refreshToken", loginData.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: appConfig.refresh_token_expired * 24 * 60 * 60 * 1000,
    });

    return loginData;
  }
}

export default new AuthController();
