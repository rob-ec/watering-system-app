export type IrrigatorScheduleItem = {
    index: number;
    hour: number;
    minute: number;
    duration: number;
    active: boolean;
};

export type Irrigator = {
    name?: string;
    description?: string;
    active: boolean;
    schedule: IrrigatorScheduleItem[];
}