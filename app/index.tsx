import { Stack, Link } from 'expo-router';

import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Início' }} />
      <View className={styles.separator}></View>
      <View className={styles.buttonsContainer}>
        <Link href={{ pathname: '/connect', params: { name: 'Dan' } }} asChild>
          <Button title="Conectar" />
        </Link>
        <Link href={{ pathname: '/dashboard', params: { name: 'Dan' } }} asChild>
          <Button title="Dashboard" />
        </Link>
      </View>
    </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white',
  separator: `h-[1px] flex-1 w-4/5`,
  buttonsContainer: `flex flex-col justify-center w-full gap-2 mx-auto py-10`,
};
