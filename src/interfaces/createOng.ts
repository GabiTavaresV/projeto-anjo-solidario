import { IAddress } from "./address";

export interface ICreateOng {
  nameOrg: string;
  address: IAddress;
  telephone: number;
  site: string;
}