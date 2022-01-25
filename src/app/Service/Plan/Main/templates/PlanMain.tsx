import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import MonthlyPlanNav from '../organisms/MonthlyPlanNav'

export default function Plan() {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <MonthlyPlanNav />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
})