import { ICreateItem } from "./createItem";

export interface IRepositoryItem {
  save(item: ICreateItem): Promise<ICreateItem>;

  findOne(name: string): Promise<ICreateItem>;

  findAll(): Promise<ICreateItem>;

  findOneAndRemove(): Promise<ICreateItem>;
}
