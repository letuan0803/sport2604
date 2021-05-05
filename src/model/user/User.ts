import { BaseEntity } from "../baseModel/baseEntity";

export class User extends BaseEntity {
  UserID!: string;
  UserName!: string;
  Password!: string;
}
