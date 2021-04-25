import { Gender } from 'src/common/enumerate';
import { BaseEntity } from '../baseModel/baseEntity';

export class BasePeople extends BaseEntity {
  /**PK */
  AthleteID!: string;
  /**tên */
  Name: string = '';
  /**ngày sinh */
  Birth: Date = new Date(1990, 1, 1);
  /**địa chỉ */
  Address?: string;
  /**tuổi */
  Age: number = new Date().getFullYear() - this.Birth.getFullYear() + 1;
  /**giới tính */
  Gender: Gender = Gender.Male;
}
