import { Clock } from "@/types/clock";
import { clockToElegantDate } from "@/utils/dateTimeUtils";
import { Text, View } from "react-native";
import { DeviceClockHour } from "./DeviceClockHour";
import { NTPStatusTag } from "./NTPStatusTag";

interface ClockProps {
    clock: Clock;
}

export const DeviceClock = ({ clock }: ClockProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Relógio do dispositivo</Text>
            <DeviceClockHour clock={clock} />
            <Text className={styles.date}>{clockToElegantDate(clock)}</Text>
            <NTPStatusTag active={clock.synchronizedNTP} />
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full p-3`,
    label: `text-xs mb-4`,
    hour: `text-4xl font-bold`,
    date: `text-sm mb-3`,
    weekDay: `text-sm`,
};