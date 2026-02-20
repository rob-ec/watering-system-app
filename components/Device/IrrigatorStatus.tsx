import { ShowerHead, Sprout } from "lucide-react-native";
import { Text, View } from "react-native";
import colors from "tailwindcss/colors";

interface IrrigatorStatusProps {
    active: boolean;
}

export const IrrigatorStatus = ({ active }: IrrigatorStatusProps) => {
    return (
        <View className={styles.container + (active ? styles.active : styles.inactive)}>
            <Text className={styles.status + (active ? styles.active : styles.inactive)}>Irrigador {active ? "Ligado" : "Desligado"}</Text>
            {
                active ?
                    <ShowerHead size={22} stroke={colors.emerald[500]} />
                    :
                    <Sprout size={22} stroke={colors.gray[500]} />
            }
        </View>
    );
};

const styles = {
    container: `flex flex-row items-center justify-center gap-4`,
    status: `text-xl font-bold`,
    active: ` text-emerald-500 bg-emerald-100 rounded-full`,
    inactive: ` text-gray-500 bg-gray-100 rounded-full`,
};