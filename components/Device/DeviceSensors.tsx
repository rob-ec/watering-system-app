import { HumidityAndTemperature } from "@/types/humidity_temperature";
import { Text, View } from "react-native";

interface DeviceIrrigatorProps {
    sensors: HumidityAndTemperature;
}

export const DeviceSensors = ({ sensors }: DeviceIrrigatorProps) => {
    const { humidity, temperature } = sensors;
    return (
        <View className={styles.container}>
            <Text className={styles.label}>Sensores</Text>
            <Text className={styles.humidity}>Umidade: {humidity}%</Text>
            <Text className={styles.temperature}>Temperatura: {temperature}°C</Text>
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-sm`,
    humidity: `text-xl font-bold`,
    temperature: `text-xl font-bold`,
};