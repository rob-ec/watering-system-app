import { useState } from "react";
import { Text, TextInput, View, TextInputProps } from "react-native";

interface InputIPProps extends TextInputProps {
    label?: string;
}

const InputIP = ({ label = "IP", value, onChangeText, ...props }: InputIPProps) => {
    const [localValue, setLocalValue] = useState("");

    const inputValue = value !== undefined ? value : localValue;

    const handleChange = (text: string) => {
        const cleaned = text.replace(/\D/g, '');
        const truncated = cleaned.slice(0, 12);
        const formatted = truncated.match(/.{1,3}/g)?.join('.') ?? '';

        if (value === undefined) {
            setLocalValue(formatted);
        }
        if (onChangeText) {
            onChangeText(formatted);
        }
    };

    return (
        <View className={styles.container}>
            <Text className={styles.label}>{label}</Text>
            <TextInput
                className={styles.input}
                placeholder="192.168.XXX.XXX"
                keyboardType="numeric"
                maxLength={15}
                {...props}
                value={inputValue}
                onChangeText={handleChange}
            />
        </View>
    );
};

const styles = {
    container: `w-full`,
    label: `text-base font-medium text-gray-700 dark:text-gray-200 mb-1`,
    input: `text-gray-700 dark:text-gray-200 w-full p-5 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600`,
};

export default InputIP;