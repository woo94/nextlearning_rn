import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Header from '../molecules/Header'

export default function Signup() {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Hello, Studiers! 👋" subtitle="Please confirm your email to continue" />
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16
    }
})