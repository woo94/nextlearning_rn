import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function NotiBox() {
    return (
        <View style={styles.container}>
            <Text>
                Notification here Notification here Notification here Notification here Notification here
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#fcfcfc",
        paddingVertical: 21,
        marginBottom: 20
    }
})