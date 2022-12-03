import { Request, Response } from "express";
import { CreateOngService } from "../service/CreateOng-service";

export class CreateOngController {
  service: CreateOngService;
  constructor(service: CreateOngService) {
    this.service = service;
  }

  async createOrg(req: Request, res: Response): Promise<Response> {
    const data = await this.service.createOng(req.body);
    return res.json(data);
  }

  async listOngs(res: Response): Promise<Response> {
    const resultListOrgs = await this.service.listOrgs();
    return res.json(resultListOrgs).status(200);
  }
}
