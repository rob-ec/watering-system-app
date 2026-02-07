import { Text, View, TextInput } from "react-native";
import { DeviceInfo } from "@/types/device_info";
import { Button } from "@components/Button";
import { useState } from "react";
import { storeDeviceConnection } from "services/DeviceService";
import { StoredDevice } from "@/types/stored_device";

interface AvailableDeviceProps {
    ip: string;
    deviceInfo: DeviceInfo;
    onSave: () => void;
    onCancel: () => void;
}

export const AvailableDevice = ({
    deviceInfo,
    ip,
    onSave = () => { },
    onCancel = () => { },
    ...props
}: AvailableDeviceProps) => {
    const [name, setName] = useState<string>("");

    const handleSave = () => {
        console.info("AvailableDevice handleSave");
        const deviceToSave: StoredDevice = {
            name: name,
            ip: ip,
            lastConection: new Date(),
        };

        storeDeviceConnection(deviceToSave);
        onSave();
    };

    return (
        <View className={styles.container}>
            <Text className={styles.getStartedText}>Conectar ao dispositivo</Text>
            <View className={styles.inputsContainer}>
                <Text className={styles.deviceText}> Dispositivo <Text className={styles.deviceIp}>{ip}</Text> disponível</Text>
                <TextInput className={styles.nameInput} placeholder="Dê um nome ao dispositivo" onChangeText={setName} value={name} />
            </View>
            <View className={styles.buttonsContainer}>
                <Button onPress={handleSave} disabled={!name} title="Salvar conexão" />
                <Button onPress={onCancel} title="Cancelar" />
            </View>
        </View>
    );
};

const styles = {
    container: `flex flex-1 flex-col w-full items-center px-10 gap-10 pt-10`,
    getStartedText: `text-lg text-center text-gray-700 font-bold dark:text-gray-200`,
    inputsContainer: `flex flex-1 w-full`,
    nameInput: `mt-4 text-gray-700 dark:text-gray-200 text-center w-full bg-white rounded-lg p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600`,
    deviceText: `mt-4 text-gray-700 dark:text-gray-200 text-left`,
    deviceIp: `text-blue-500 font-bold`,
    buttonsContainer: `flex flex-1 w-full gap-2`
};