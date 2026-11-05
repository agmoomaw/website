import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View} from 'react-native'
import { TextCard } from '../components/TextCard'
import { space, type } from '../constants/theme'

// to test supabase connection, change /sympathy to /test or /fetchData
export default function Index() {
    return (
        <SafeAreaView style={styles.screen}>
            <View>
            <Text style={type.title}>Abby Moomaw</Text>
            <Text style={type.body}>Senior graduating May 2027 from University of Michigan with a Bachelor of Science in Computer Science</Text>
            </View>
            
            <View style={styles.cards}>
            <TextCard
                text="Who am I?"
                subtext="Let me show you who I am" />
            <TextCard
                text="What do I do?"
                subtext="Let's dive into what I can do"/>
            </View>

            <View style={styles.bottomText}>
            <Text style={[type.small, { textAlign: 'center'}]}>Subtext goes here</Text>
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: space.lg,
        gap: space.lg,
        paddingTop: (space.lg * 2),
        },
        cards: {
        flex: 1,
        gap: space.md,
        flexDirection: 'column',
        },
        bottomText:  {
        marginTop: 'auto',                // Pushes this view to the bottom of the flex layout
        padding: 15,
    }
})