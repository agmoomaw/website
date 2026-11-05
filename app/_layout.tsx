// app/_layout.tsx
import { Stack } from 'expo-router'
import { useFonts, LibreFranklin_400Regular, LibreFranklin_500Medium, LibreFranklin_600SemiBold, LibreFranklin_700Bold } from '@expo-google-fonts/libre-franklin'
import { colors } from '../constants/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function RootLayout() {
    const [loaded] = useFonts({ 
        LibreFranklin_400Regular, 
        LibreFranklin_500Medium, 
        LibreFranklin_600SemiBold, 
        LibreFranklin_700Bold 
    })

    if (!loaded) return null

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
                <Stack.Screen name="index" />
            </Stack>
        </SafeAreaProvider>
    )
}