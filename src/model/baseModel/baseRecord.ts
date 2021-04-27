import { uid } from "quasar";
import { BaseEntity } from "./baseEntity";

export class BaseRecord extends BaseEntity {
  /**PK */
  RecordID: string = uid();
  /**mã bản ghi */
  RecordNo = "";
  /**id vận động viên */
  AthletesID = "";
  /**tên vận động viên */
  AthletesName = "";
  /**mã vdv */
  AthletesNo = "";
  /**tên môn thi */
  SubjectID = "";
  /**id môn thi */
  SubjectName = ""
  /**mã môn thi */;
  SubjectNo = "";
  /**thời điểm đo */
  MeasuringTime: Date = new Date();
}
