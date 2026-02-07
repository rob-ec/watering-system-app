import { Stack, useRouter } from 'expo-router';

import { Text, View, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { getDeviceInfo } from '@/services/DeviceService';
import { useState } from 'react';
import { DeviceInfo } from '@/types/device_info';
import InputIP from './InputIP';

export default function Connect() {
    const router = useRouter();
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
            router.push({ pathname: '/save-connection', params: { ip } });
        } catch (err) {
            setError("Falha ao conectar. Verifique o IP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={styles.container}
        >
            <Stack.Screen options={{ title: 'Conexão' }} />
            <Container>
                <View className={styles.container}>
                    <Text className={styles.title}>Conecte um dispositivo</Text>
                    <View className={styles.separator} />
                    <InputIP
                        onChangeText={setIp}
                        value={ip}
                        label='IP do dispositivo'
                        returnKeyType="done"
                        returnKeyLabel='Feito'
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    {error && <Text className="text-red-500 mt-4 font-medium">{error}</Text>}
                </View>
                <Button onPress={handleConnect} disabled={loading} title={loading ? "Conectando..." : "Conectar"} />
            </Container>
        </KeyboardAvoidingView>
    );
}

const styles = {
    container: `items-center flex flex-1 flex-col justify-center bg-white`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`,
};
