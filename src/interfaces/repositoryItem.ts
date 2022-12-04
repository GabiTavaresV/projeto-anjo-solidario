import { ICreateItem } from "./createItem";

export interface IRepositoryItem {
  save(item: ICreateItem): Promise<ICreateItem>;

  findOne(): Promise<ICreateItem>;

  findAll(): Promise<ICreateItem>;

  findOneAndRemove(): Promise<ICreateItem>;
}
