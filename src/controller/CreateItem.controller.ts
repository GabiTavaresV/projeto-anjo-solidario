import { Request, Response } from "express";
import { CreateItemService } from "../service/CreateItem-service";

export class CreateItemController {
  service: CreateItemService;
  constructor(service: CreateItemService) {
    this.service = service;
  }

  async createItem(req: Request, res: Response): Promise<Response> {
    const data = await this.service.createItem(req.body);
    return res.json(data);
  }

  async listItens(res: Response): Promise<Response> {
    const resultListItens = await this.service.listItens();
    return res.json(resultListItens).status(200);
  }
}
