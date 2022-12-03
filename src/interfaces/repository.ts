import { ICreateOng } from "./createOng";

export interface IRepository {
  save(item: ICreateOng): Promise<ICreateOng>;

  findOne(): Promise<ICreateOng>;

  findAll(): Promise<ICreateOng>;

  findOneAndRemove(): Promise<ICreateOng>;
}
