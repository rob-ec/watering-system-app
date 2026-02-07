export type Clock = {
    name?: string;
    description?: string;
    synchronizedNTP: boolean;
    time: {
        year: number;
        month: number;
        day: number;
        dotw: number;
        hour: number;
        min: number;
        sec: number;
    }
};