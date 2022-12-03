import { ICreateOng } from "../interfaces/createOng";
import { IRepository } from "../interfaces/repository";
import Ong from "../database/OngSchema";

export class MongoRepository implements IRepository {

  findOne(): Promise<ICreateOng> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<any> {
    const list = await Ong.find();
    return list;
  }
  findOneAndRemove(): Promise<ICreateOng> {
    throw new Error("Method not implemented.");
  }
  async save(ong: ICreateOng) {
    const result = await Ong.create(ong);
    ong.nameOrg = result.nameOng
    return ong;
  }
}
