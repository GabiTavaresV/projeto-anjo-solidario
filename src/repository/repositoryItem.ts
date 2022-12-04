import { ICreateItem } from "../interfaces/createItem";
import { IRepositoryItem } from "../interfaces/repositoryItem";
import Item from "../database/ItemSchema";

export class MongoRepositoryItem implements IRepositoryItem {
  findOneAndRemove(): Promise<ICreateItem> {
    throw new Error("Method not implemented.");
  }
  findOne(): Promise<ICreateItem> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<any> {
    const list = await Item.find();
    return list;
  }

  async save(item: ICreateItem) {
    const result = await Item.create(item);
    item.nameOrg = result.nameOng;
    return item;
  }
}
