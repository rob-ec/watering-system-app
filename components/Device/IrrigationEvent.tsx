import { IrrigatorScheduleItem } from "@/types/irrigator";
import { durationToString, hmsToClockString } from "@/utils/dateTimeUtils";
import { Text, View } from "react-native";

interface IrrigationEventProps {
    irrigationEvent: IrrigatorScheduleItem;
};

export const IrrigationEvent = ({ irrigationEvent }: IrrigationEventProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>#{irrigationEvent.index}</Text>
            <Text className={styles.hours}>{hmsToClockString(irrigationEvent.hour, irrigationEvent.minute)}</Text>
            <Text className={styles.duraion}>{durationToString(irrigationEvent.duration)}</Text>
            <Text className={styles.status}>{irrigationEvent.active ? "Ativo" : "Inativo"}</Text>
        </View>); 
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-sm`,
    hours: `text-xl font-bold`,
    duraion: ``,
    status: `text-sm`,
};