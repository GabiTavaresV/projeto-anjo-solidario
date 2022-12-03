import { Router } from "express";
import { CreateOngController } from "../controller/CreateOng.controller";
import { MongoRepository } from "../repository/repository";
import { CreateOngService } from "../service/CreateOng-service";

const ongRouter = Router();

const mongoRepository = new MongoRepository();
const service = new CreateOngService(mongoRepository);
const controller = new CreateOngController(service);

ongRouter.post("/", (req, res) => controller.createOrg(req, res));
ongRouter.get("/", (req, res) => controller.listOngs(res));

export default ongRouter;
