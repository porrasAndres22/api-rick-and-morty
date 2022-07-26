import { NextFunction, Request, Response} from 'express';
import session from 'express-session'
import config from './config'


const sessionMiddel = (req:Request, res:Response, next:NextFunction) => {
    return session (config.SESSION)(req, res, next)
}

export default sessionMiddel;