import { BaseEntity } from "../baseModel/baseEntity";

export class Achievement extends BaseEntity {
  /**PK */
  AchievementID!: string;
  /**thành tích chạy 100m dự báo */
  ForecastAchievement: number = 0;
  /**thời gian dự đoán */
  ForecastTime: Date = new Date();
  /**thành tích chạy 100m thực tế */
  RealAchievements?: number = 0;
  /**tỉ lệ sai số */
  ErrorRate?: number = 0;
}
