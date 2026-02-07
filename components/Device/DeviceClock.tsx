import { Clock } from "@/types/clock";
import { clockToDate, clockToTimeString, clockToWeekDay } from "@/utils/dateTimeUtils";
import { Text, View } from "react-native";

interface ClockProps {
    clock: Clock;
}

export const DeviceClock = ({ clock }: ClockProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Relógio do dispositivo</Text>
            <Text className={styles.hour}>{clockToTimeString(clock)}</Text>
            <Text className={styles.date}>{clockToDate(clock)}</Text>
            <Text className={styles.ntpStatus}>{clock.synchronizedNTP ? "Sincronizado" : "Não sincronizado"}</Text>
            <Text className={styles.weekDay}>{clockToWeekDay(clock)}</Text>
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-sm`,
    hour: `text-xl font-bold`,
    date: `text-sm`,
    ntpStatus: `text-xsm mt-4`,
    weekDay: `text-sm`,
};