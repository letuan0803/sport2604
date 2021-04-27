import { EditMode } from "src/common/enumerate";

export class BaseEntity {
  CreatedBy = "lttuan";
  CreatedDate: Date =new Date();
  ModifyBy= "lttuan";
  ModifyDate: Date = new Date();
  EditMode:  EditMode = EditMode.None;
}
