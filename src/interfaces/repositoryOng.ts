import { ICreateOng } from "./createOng";

export interface IRepositoryOng {
  save(item: ICreateOng): Promise<ICreateOng>;

  findOne(): Promise<ICreateOng>;

  findAll(): Promise<ICreateOng>;

  findOneAndRemove(): Promise<ICreateOng>;
}
