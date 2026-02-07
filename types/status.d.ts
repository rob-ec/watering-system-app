import { Clock } from "./clock";
import { HumidityAndTemperature } from "./humidity_temperature";
import { Irrigator } from "./irrigator";
import { Wifi } from "./wifi";

export type Status = {
    clock: Clock;
    irrigator: Irrigator;
    sensors: HumidityAndTemperature;
    wifi: Wifi;
};