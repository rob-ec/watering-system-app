import { Text, View, ActivityIndicator } from "react-native";
import InputIP from "./InputIP";
import { Button } from "@components/Button";
import { useState } from "react";
import { getDeviceInfo } from "@services/DeviceService";
import { DeviceInfo } from "@/types/device_info";
import { AvailableDevice } from "./AvailableDevice";

interface DeviceConnectProps {
    onSave?: () => void;
}

export const DeviceConnect = ({ onSave = () => { } }: DeviceConnectProps) => {
    const [ip, setIp] = useState<string>("");
    const [device, setDevice] = useState<DeviceInfo | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleConnect = async () => {
        setLoading(true);
        setError(null);
        setDevice(null);
        try {
            const data = await getDeviceInfo(ip);
            setDevice(data);
        } catch (err) {
            setError("Falha ao conectar. Verifique o IP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className={styles.container}>
            {!device && <>
                <Text className={styles.getStartedText}>Conectar ao dispositivo</Text>
                <View className={styles.inputContainer}>
                    <InputIP onChangeText={setIp} value={ip} />
                    <Button onPress={handleConnect} disabled={loading} title={loading ? "Conectando..." : "Conectar"} />
                </View>
            </>}
            {error && <Text className="text-red-500 mt-4 font-medium">{error}</Text>}
            {device && (
                <AvailableDevice
                    ip={ip}
                    deviceInfo={device}
                    onSave={onSave}
                    onCancel={() => setDevice(null)}
                />
            )}
        </View>
    );
};

const styles = {
    container: `flex items-center h-full w-full flex-col pb-10`,
    getStartedText: `text-lg text-center text-gray-700 font-bold dark:text-gray-200`,
    inputContainer: `flex items-center w-full mx-5 mt-4 px-10 gap-10`,
    button: `w-full flex-1 px-5 py-2`,
};