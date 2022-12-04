import { Router } from "express";
import { CreateItemController } from "../controller/CreateItem.controller";
import { CreateOngController } from "../controller/CreateOng.controller";
import { MongoRepositoryItem } from "../repository/repositoryItem";
import { MongoRepository } from "../repository/repositoryOng";
import { CreateItemService } from "../service/CreateItem-service";
import { CreateOngService } from "../service/CreateOng-service";

const ongRouter = Router();

const mongoRepositoryOng = new MongoRepository();
const serviceOng = new CreateOngService(mongoRepositoryOng);
const controllerOng = new CreateOngController(serviceOng);

const mongoRepositoryItem = new MongoRepositoryItem();
const serviceItem = new CreateItemService(mongoRepositoryItem);
const controllerItem = new CreateItemController(serviceItem);

ongRouter.post("/", (req, res) => controllerOng.createOrg(req, res));
ongRouter.get("/", (req, res) => controllerOng.listOngs(res));

ongRouter.post("/item", (req, res) => controllerItem.createItem(req, res));

export default ongRouter;
