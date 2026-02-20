import { HumidityAndTemperature } from "@/types/humidity_temperature";
import { Text, View } from "react-native";
import { HumidityIcon } from "./HumidityIcon";
import { TemperatureIcon } from "./TemperatureIcon";

interface DeviceIrrigatorProps {
    sensors: HumidityAndTemperature;
}

export const DeviceSensors = ({ sensors }: DeviceIrrigatorProps) => {
    const { humidity, temperature } = sensors;
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Sensores de ambiente</Text>
            <View className={styles.section}>
                <View className={styles.sensor.container}>
                    <HumidityIcon humidity={humidity} size={32} />
                    <Text className={styles.sensor.value}>{humidity}%</Text>
                    <Text className={styles.sensor.label}>Umidade</Text>
                </View>
                <View className={styles.sensor.container}>
                    <TemperatureIcon temperature={30} size={32} />
                    <Text className={styles.sensor.value}>{temperature}°C</Text>
                    <Text className={styles.sensor.label}>Temperatura</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full p-3`,
    label: `text-xs mb-4`,
    section: `flex flex-row gap-2`,
    sensor: {
        container: `flex flex-col gap-2 flex-1`,
        label: `text-sm`,
        value: `text-3xl font-bold`,
    }
};