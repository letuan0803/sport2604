import { BaseEntity } from './baseEntity';

export class BaseRecord extends BaseEntity {
  /**PK */
  RecordID!: string;
  /**id vận động viên */
  AthletesID: string = '';
  /**tên vận động viên */
  AthletesName: string = '';
  /**tên môn thi */
  SubjectID: string = '';
  /**id môn thi */
  SubjectName: string = '';
  /**thời điểm đo */
  MeasuringTime: Date = new Date();
}
