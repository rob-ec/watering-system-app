import colors from "tailwindcss/colors";
import { Text, View } from "react-native";
import { ClockAlert, ClockCheck } from "lucide-react-native";

interface NTPStatusTagProps {
    active: boolean;
}

export const NTPStatusTag = ({ active }: NTPStatusTagProps) => {
    return (
        <View className={styles.tag + (active ? styles.active : styles.inactive)}>
            {
                active ?
                    <ClockCheck stroke={colors.green[500]} size={12} className={styles.icon} />
                    :
                    <ClockAlert stroke={colors.red[500]} size={12} className={styles.icon} />
            }
            <Text className={styles.label + (active ? styles.activeText : styles.inactiveText)}>
                {active ? "Sincronizado" : "Não sincronizado"}
            </Text>
        </View>
    );
};

const styles = {
    tag: `self-start flex flex-row items-center gap-2 py-1 px-3 rounded-md`,
    icon: ``,
    label: `text-xs`,
    active: ` bg-green-100`,
    inactive: ` bg-red-100`,
    activeText: ` text-green-500`,
    inactiveText: ` text-red-500`,
};