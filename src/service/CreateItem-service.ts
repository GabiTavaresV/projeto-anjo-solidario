import { ICreateItem } from "../interfaces/createItem";
import { MongoRepositoryItem } from "../repository/repositoryItem";

export class CreateItemService {
  repository: MongoRepositoryItem;
  constructor(repository: MongoRepositoryItem) {
    this.repository = repository;
  }

  async createItem(createItem: ICreateItem): Promise<any> {
    try {
      if (createItem) {
        const itemData = await this.repository.save(createItem);
        return itemData;
      }
    } catch (err) {
      throw Error("Create ong falied");
    }
  }

  async listItens(): Promise<any> {
    const resultList = await this.repository.findAll();
    return resultList;
  }

  async listItensByName(name: string){
    const resultListByName = await this.repository.findOne(name);
    return resultListByName
  }
}
