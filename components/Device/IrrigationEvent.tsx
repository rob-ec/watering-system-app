import colors from "tailwindcss/colors";
import { IrrigatorScheduleItem } from "@/types/irrigator";
import { durationToString, hmsToClockString } from "@/utils/dateTimeUtils";
import { Timer, TimerOff } from "lucide-react-native";
import { Text, View } from "react-native";

interface IrrigationEventProps {
    irrigationEvent: IrrigatorScheduleItem;
};

export const IrrigationEvent = ({ irrigationEvent }: IrrigationEventProps) => {
    const { hour, minute, duration, active, index } = irrigationEvent;

    return (
        <View className={styles.container}>
            <Text className={styles.label}>
                Irrigação {index} | {active ? "Ativa" : "Inativa"}
            </Text>
            <View className={styles.infoSection}>
                <View className={styles.valuesSection}>
                    <Text className={styles.hours}>{hmsToClockString(hour, minute)}</Text>
                    <Text className={styles.duraion}>Duração de {durationToString(duration)}</Text>
                </View>
                {
                    active
                        ?
                        <Timer size={32} stroke={colors.violet[500]} />
                        :
                        <TimerOff size={32} stroke={colors.gray[500]} />
                }
            </View>
        </View>);
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-xs my-2 text-gray-500`,
    hours: `text-2xl font-bold`,
    duraion: `mt-1`,
    status: `text-sm`,
    infoSection: `flex flex-row justify-between items-center gap-2`,
    valuesSection: ``,
};