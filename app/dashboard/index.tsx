import { Stack } from 'expo-router';

import { ScrollView, Text, View } from 'react-native';

import { Container } from '@/components/Container';
import { useEffect, useState } from 'react';
import { Status } from '@/types/status';
import { getStatus, getStoredDeviceConnection, irrigatorOff, irrigatorOn } from '@/services/DeviceService';
import { DeviceClock } from '@/components/Device/DeviceClock';
import { StoredDevice } from '@/types/stored_device';
import { DeviceIrrigator } from '@/components/Device/DeviceIrrigator';
import { DeviceSensors } from '@/components/Device/DeviceSensors';
import { DeviceWiFi } from '@/components/Device/DeviceWiFi';
import { Button } from '@/components/Button';

export default function Dashboard() {
    const [deviceData, setDeviceData] = useState<Status | null>(null);
    const deviceConnection = getStoredDeviceConnection();

    const handleIrrigatorStart = async () => {
        try {
            await irrigatorOn();
            console.log("Irrigador ligado com sucesso!");
        } catch (error) {
            console.error("Erro ao ligar o irrigador:", error);
        }
    };

    const handleIrrigatorStop = async () => {
        try {
            await irrigatorOff();
        } catch (error) {
            console.error("Erro ao desligar o irrigador:", error);
        }
    };

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const data = await getStatus();
                setDeviceData(data);
            } catch (error) {
                console.error("Erro ao buscar status:", error);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollView className={styles.screen}>
            <Stack.Screen options={{ title: 'Dashboard' }} />
            <View className={styles.container}>
                <Text>Status</Text>
                {deviceData ? <>
                    <DeviceClock clock={deviceData.clock} />
                    <DeviceSensors sensors={deviceData.sensors} />
                    <DeviceWiFi wifi={deviceData.wifi} />
                    <DeviceIrrigator irrigator={deviceData.irrigator} />
                </> : <Text>Carregando...</Text>}
            </View>
            <View className={styles.buttonsContainer}>
                <Button onPress={handleIrrigatorStart} title="Ligar irrigador por 2min" />
                <Button onPress={handleIrrigatorStop} title="Cancelar" />
            </View>
        </ScrollView>
    );
}

const styles = {
    screen: `bg-white`,
    container: `items-center flex flex-col justify-center bg-white gap-5`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`,
    buttonsContainer: `flex flex-col justify-center w-full gap-2 mx-auto py-10`
};
