import { Stack, Link, useLocalSearchParams, useRouter } from 'expo-router';

import { Text, View, Keyboard, KeyboardAvoidingView, Platform, TextInput } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { getDeviceInfo, storeDeviceConnection } from '@/services/DeviceService';
import { useState } from 'react';
import { DeviceInfo } from '@/types/device_info';
import { StoredDevice } from '@/types/stored_device';

export default function SaveConnection() {
    const { ip: initialIp } = useLocalSearchParams<{ ip: string }>();
    const [ip, setIp] = useState<string>(initialIp || "");
    const [device, setDevice] = useState<DeviceInfo | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [name, setName] = useState<string>("");

    const router = useRouter();

    const handleSave = () => {
        console.info("AvailableDevice handleSave");
        const deviceToSave: StoredDevice = {
            name: name,
            ip: ip,
            lastConection: new Date(),
        };

        storeDeviceConnection(deviceToSave);
        router.push({ pathname: '/dashboard' });
    };

    const handleCancel = () => {
        router.push({ pathname: '/connect' });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={styles.container}
        >
            <Stack.Screen options={{ title: 'Conexão' }} />
            <Container>
                <View className={styles.container}>
                    <Text className={styles.title}>Salve a conexão</Text>
                    <View className={styles.separator} />
                    <Text className={styles.deviceText}> Dispositivo <Text className={styles.deviceIp}>{ip}</Text> disponível</Text>
                    <TextInput
                        className={styles.nameInput}
                        placeholder="Dê um nome ao dispositivo"
                        onChangeText={setName} value={name}
                        returnKeyType="done"
                        returnKeyLabel='Feito'
                    />
                </View>
                <View className={styles.buttonsContainer}>
                    <Button onPress={handleSave} disabled={loading} title={loading ? "Salvando..." : "Salvar conexão"} />
                    <Button onPress={handleCancel} title="Cancelar" />
                </View>
            </Container>
        </KeyboardAvoidingView>
    );
}

const styles = {
    container: `items-center flex flex-1 flex-col justify-center bg-white`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`,
    nameInput: `mt-4 text-gray-700 dark:text-gray-200 text-center w-full bg-white rounded-lg p-3 border border-gray-300 dark:bg-gray-700 dark:border-gray-600`,
    deviceText: `mt-4 text-gray-700 dark:text-gray-200 text-left`,
    deviceIp: `text-blue-500 font-bold`,
    buttonsContainer: `flex flex-col justify-center w-full gap-2 mx-auto`
};
