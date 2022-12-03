import { Router, Request, Response } from "express";


const ongRouter = Router();


ongRouter.get("/", (req: Request, res: Response) => {
    return res.send('Hello World')
});

export default ongRouter;
