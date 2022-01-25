import React from 'react'
import { View, StyleSheet } from 'react-native'


export default function TaskItemBullet() {

    return (
        <View style={styles.container}>
            <View style={[styles.outerCircle, styles.common]}></View>
            <View style={[styles.innerCircle, styles.common]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    common: {
        backgroundColor: '#f5d572'
    },
    outerCircle: {
        position: 'relative',
        width: 18,
        height: 18,
        borderRadius: 9
    },
    innerCircle: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 7.5,
        transform: [{ translateX: 1.5 }, { translateY: 1.5 }]
    }
})