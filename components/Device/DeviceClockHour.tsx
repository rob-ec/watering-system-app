import { Clock } from "@/types/clock";
import { Text, View } from "react-native";

interface DeviceClockHourProps {
    clock: Clock;
}

export const DeviceClockHour = ({ clock }: DeviceClockHourProps) => {
    const { hour, min, sec } = clock.time;

    return (
        <View className={styles.container}>
            <View className={styles.value}><Text className={styles.hour}>{hour.toString().padStart(2, '0')}</Text><Text className={styles.span}>h</Text></View>
            <View className={styles.value}><Text className={styles.minute}>{min.toString().padStart(2, '0')}</Text><Text className={styles.span}>min</Text></View>
            <View className={styles.value}><Text className={styles.seconds}>{sec.toString().padStart(2, '0')}</Text><Text className={styles.span}>s</Text></View>
        </View >
    );
};

const styles = {
    container: `flex flex-row gap-1`,
    value: `flex flex-row`,
    hour: `text-5xl font-bold`,
    minute: `text-5xl font-bold`,
    seconds: `text-5xl font-bold`,
    span: `text-xl mr-2`,
};