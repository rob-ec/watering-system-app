import colors from "tailwindcss/colors";
import { Thermometer, ThermometerSnowflake, ThermometerSun } from "lucide-react-native";

interface TemperatureIconProps {
    temperature: number;
    size?: number;
    color?: string;
}

const iconColor = (temperature: number) => {
    if (temperature <= 20) {
        return colors.blue[500];
    }

    if (temperature >= 30) {
        return colors.red[600];
    }

    return colors.orange[500];
};
    

export const TemperatureIcon = ({
    temperature,
    size,
    color = undefined
}: TemperatureIconProps) => {
    if (!color) {
        color = iconColor(temperature);
    }

    if (temperature < 20) {
        return <ThermometerSnowflake size={size} stroke={color} />;
    }

    if (temperature >= 30) {
        return <ThermometerSun size={size} stroke={color} />;
    }
    return <Thermometer size={size} stroke={color}/>
}