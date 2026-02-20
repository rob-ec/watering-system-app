import { Irrigator } from "@/types/irrigator";
import { Text, View } from "react-native";
import { IrrigationEvent } from "@components/Device/IrrigationEvent";
import { IrrigatorStatus } from "./IrrigatorStatus";

interface DeviceIrrigatorProps {
    irrigator: Irrigator;
};

export const DeviceIrrigator = ({ irrigator }: DeviceIrrigatorProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Irrigador</Text>
            <IrrigatorStatus active={irrigator.active} />
            <Text className={styles.scheduleLabel}>Agendamentos</Text>
            <View className={styles.scheduleList}>
                {irrigator.schedule.map((item, index) => {
                    return (
                        <IrrigationEvent key={index} irrigationEvent={item} />
                    );
                })}
            </View>
        </View>);
};

const styles = {
    container: `flex flex-col w-full p-3`,
    label: `text-xs mb-4`,
    scheduleLabel: `mt-5 mb-4 text-xs`,
    scheduleList: `flex flex-col gap-4`,
};