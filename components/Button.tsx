import { type, colors } from '../constants/theme'
import { useRouter, type Href } from 'expo-router'
import { Pressable, Text } from 'react-native'

type ButtonProps = {
    text: string;
    subtext?: string;
    href?: Href;
};

export const Button = ({ text, href }: ButtonProps) => {
    const router = useRouter()

    return (
        <Pressable
            style={({ pressed }) => [pressed && { opacity: 0.7 }]} // ... pressed }) => [surfaces.button && pressed && ...
            onPress={() => href && router.push(href)}

            accessibilityRole="button">
            <Text style={type.button}>{text}</Text>
        </Pressable>
    )
}