import { ICreateOng } from "../interfaces/createOng";
import { MongoRepository } from "../repository/repositoryOng";

export class CreateOngService {
  repository: MongoRepository;
  constructor(repository: MongoRepository) {
    this.repository = repository;
  }

  async createOng(createOng: ICreateOng): Promise<any> {
    try {
      if (createOng) {
        const itemData = await this.repository.save(createOng);
        return itemData;
      }
    } catch (err) {
      throw Error("Create ong falied");
    }
  }

  async listOrgs(): Promise<any> {
    const resultList = await this.repository.findAll();
    return resultList;
  }
}
