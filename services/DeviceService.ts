import axios from 'axios';
import { DeviceInfo } from '@/types/device_info';
import { StoredDevice } from '@/types/stored_device';
import { Status } from '@/types/status';
import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceConnection = (ip: string) => {
  return axios.create({
    baseURL: `http://${ip}`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 1000,
  });
};

const getDeviceInfo = async (ip: string): Promise<DeviceInfo> => {
  const { data } = await deviceConnection(ip).get<DeviceInfo>('/');
  return data;
};

const storeDeviceConnection = async (device: StoredDevice): Promise<void> => {
  try {
    await AsyncStorage.setItem('stored-device', JSON.stringify(device));
  } catch (e) {
    console.error('Error saving device connection', e);
    throw e;
  }
};

const getStoredDeviceConnection = async (): Promise<StoredDevice | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('stored-device');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading device connection', e);
    throw e;
  }
};

const getStatus = async (): Promise<Status> => {
  const device = await getStoredDeviceConnection();
  if (!device) {
    throw new Error('No device saved');
  }
  const { data } = await deviceConnection(device.ip).get<Status>('/status');
  return data;
};

const irrigatorOn = async (durationInSeconds: number = 120): Promise<void> => {
  const device = await getStoredDeviceConnection();
  if (!device) {
    throw new Error('No device saved');
  }
  await deviceConnection(device.ip)
    .post('/irrigator', {
      active: true,
      duration: durationInSeconds,
    })
    .then((response) => console.log(response?.data ?? ''))
    .catch((error) => console.error(error));
};

const irrigatorOff = async (): Promise<void> => {
  const device = await getStoredDeviceConnection();
  if (!device) {
    throw new Error('No device saved');
  }
  await deviceConnection(device.ip).post('/irrigator', {
    active: false,
  });
};

export {
  deviceConnection,
  getDeviceInfo,
  irrigatorOn,
  irrigatorOff,
  storeDeviceConnection,
  getStoredDeviceConnection,
  getStatus,
};
