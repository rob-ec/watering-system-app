import { Wifi } from "@/types/wifi";
import { Text, View } from "react-native";

interface DeviceWiFiProps {
    wifi: Wifi;
}

export const DeviceWiFi = ({wifi}: DeviceWiFiProps) => {
    return (
        <View className={styles.container}>
            <Text className={styles.label}>WiFi</Text>
            <Text className={styles.status}>{wifi.hasInternetConnection ? "Conectado" : "Desconectado"}</Text>
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full`,
    label: `text-sm`,
    status: `text-xl font-bold`,
};