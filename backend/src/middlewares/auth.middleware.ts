import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from "express";
import appConfig from '../app.config.ts';


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {headers} = req;
    if (headers.authorization) {
        const info: any = jwt.verify(
            headers.authorization,
            appConfig.secret_token,
        );

        if (info.userId) {
          next();  
        }
    }

    return res.status(401).json('Not authorization')
}

export default authMiddleware;