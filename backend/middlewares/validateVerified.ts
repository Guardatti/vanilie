import { NextFunction, Request, Response } from "express";



export const isVerifed = (req: Request, res: Response, next: NextFunction) => {

    const {verified} = req.body.userConfirmated;

    if (!verified) {
        res.status(401).json({
            msg: 'El usuario no está verificado'
        })
        return
    }

    next();

}