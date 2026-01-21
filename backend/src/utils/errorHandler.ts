import type { NextFunction, Request, Response } from "express";
import BaseController from "../controllers/base.controller.ts";

export const errorHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      let message = "Internal server error";

      if (error instanceof Error) {
        message = error.message;
      }

      return BaseController.SendResponse(res, false, 500, null, message);
    }
  };
