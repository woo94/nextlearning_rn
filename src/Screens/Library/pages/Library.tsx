import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import TaskNav from 'src/Screens/Home/molecules/TaskNavHeader'

export default function Library() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>Library</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})