import { StyleSheet, Text, View } from 'react-native'
import { colors, space, type } from '../constants/theme'

type StatTileProps = {
    value: number | string
    label: string
    highlighted?: boolean          // light blue tile to draw attention
}

export const StatTile = ({ value, label, highlighted = false }: StatTileProps) => (
    <View
        style={styles.tile} // , highlighted && colors.secondaryText]}
        accessible
        accessibilityLabel={`${value} ${label}`}
    >
        <Text style={[type.stat, highlighted && styles.highlightedText]}>{value}</Text>
        <Text style={[type.statLabel, highlighted && styles.highlightedText]}>{label}</Text>
    </View>
)

const styles = StyleSheet.create({
    tile: {
        flex: 1,                   // three tiles share the row equally
        aspectRatio: 1,            // keep them square like Figma prototype
        paddingVertical: 0,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        gap: space.xs,
    },
    highlightedText: {
        color: colors.secondaryText,
    },
})
