import { BaseRecord } from '../baseModel/baseRecord';

export class Run100Modal extends BaseRecord {
  /**thành tích 30m xuất phát cao - s */
  XPC30m: number = 0;
  /**thành tích 60m xuất phát cao - s*/
  XPC60m: number = 0;
  /**thành tích chạy 30m tốc độ cao - s*/
  TDC30m: number = 0;
  /**thành tích bật xa tại chỗ - m*/
  BXTC: number = 0;
  /**thành tích bật xa ba bước - m*/
  BX3B: number = 0;
}
