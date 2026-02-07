export type DeviceInfo = {
  hardwareVersion: string;
  systemTime: {
    year: number;
    month: number;
    day: number;
    dotw: number;
    hour: number;
    min: number;
    sec: number;
  };
};