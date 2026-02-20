import color from "tailwindcss/colors";
import { Wifi } from "@/types/wifi";
import { Globe, GlobeOff, HouseWifi, WifiOff } from "lucide-react-native";
import { Text, View } from "react-native";

interface DeviceWiFiProps {
    wifi: Wifi;
}

export const DeviceWiFi = ({ wifi }: DeviceWiFiProps) => {
    const { hasInternetConnection } = wifi;
    const hasWifiConnection = true; // for future BLE connections

    return (
        <View className={styles.container}>
            <Text className={styles.label}>Conectividade</Text>
            <View className={styles.section}>
                <View className={styles.connection.container}>
                    {
                        hasWifiConnection ?
                            <HouseWifi size={32} stroke={color.indigo[500]} />
                            :
                            <WifiOff size={32} stroke={color.gray[500]} />
                    }
                    <Text className={styles.connection.value}>
                        {hasWifiConnection ? "Conectado" : "Desconectado"}
                    </Text>
                    <Text className={styles.connection.label}>Rede local</Text>
                </View>
                <View className={styles.connection.container}>
                    {
                        hasInternetConnection ?
                            <Globe size={32} stroke={color.teal[500]} />
                            :
                            <GlobeOff size={32} stroke={color.gray[500]} />
                    }
                    <Text className={styles.connection.value}>
                        {hasInternetConnection ? "Conectado" : "Desconectado"}
                    </Text>
                    <Text className={styles.connection.label}>Internet</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    container: `flex flex-col w-full p-3`,
    label: `text-xs mb-4`,
    section: `flex flex-row gap-2`,
    status: `text-xl font-bold`,
    connection: {
        container: `flex flex-col gap-2 flex-1`,
        label: `text-sm`,
        value: `text-xl font-bold`,
    }
};