import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import auth from '@react-native-firebase/auth'

export default function Me() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>Me</Text>
                <Button
                    title="logout"
                    onPress={() => {
                        auth().signOut()
                    }}
                />
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