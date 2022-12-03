import { Router } from "express";
import ongRouter from "./routes";

const routes = Router();

routes.use("/ongs", ongRouter);

export default routes;
