import { Irrigator } from "@/types/irrigator";
import { Text, View } from "react-native";
import { IrrigationEvent } from "@components/Device/IrrigationEvent";

interface DeviceIrrigatorProps {
    irrigator: Irrigator;
};

export const DeviceIrrigator = ({ irrigator }: DeviceIrrigatorProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Irrigador</Text>
            <Text className={styles.status}>{irrigator.active ? "Ligado" : "Desligado"}</Text>
            {irrigator.schedule.map((item, index) => {
                return (
                    <IrrigationEvent key={index} irrigationEvent={item} />
                );
            })}
        </View>);
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-sm`,
    status: `text-xl font-bold`,
};