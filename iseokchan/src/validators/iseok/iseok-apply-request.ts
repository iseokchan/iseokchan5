export type IseokApplyRequest = {
  iseokType: number;
  teacher?: number;
  students?: number[];
  location?: string;
  startTime: Date;
  endTime: Date;
  reason?: string;
};
