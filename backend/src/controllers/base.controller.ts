import type { Response } from "express";

class BaseController {
  constructor() {}

  static SendResponse(
    res: Response,
    success: boolean,
    code: number,
    data: any,
    message: string = "Message",
  ) {
    return res.status(code).json({
      success,
      code,
      message,
      data,
    });
  }
}

export default BaseController;
