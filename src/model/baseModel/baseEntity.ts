import { EditMode } from "src/common/enumerate";

export class BaseEntity {
  CreatedBy: string = "lttuan";
  CreatedDate: Date =new Date();
  ModifyBy: string= "lttuan";
  ModifyDate: Date = new Date();
  EditMode:  EditMode = EditMode.None;
}
