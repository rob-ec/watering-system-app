import colors from "tailwindcss/colors";
import { Droplet, DropletOff, Droplets } from "lucide-react-native";

interface HumidityIconProps {
    humidity: number;
    size?: number;
    color?: string;
}

export const HumidityIcon = ({
    humidity,
    size,
    color = colors.blue[500]
}: HumidityIconProps) => {
    if (humidity < 30) {
        return <DropletOff size={size} color={color} />;
    }

    if (humidity > 70) {
        return <Droplets size={size} color={color} />;
    }

    return <Droplet size={size} color={color} />;
}