import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    points: number
}

export default function Points(props: Props) {
    const { points } = props

    return (
        <View style={styles.point}>
            <Text>icon</Text>
            <Text style={styles.pointText}>{points} Points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    point: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14.4,
        backgroundColor: "#fbf5e8",
        paddingHorizontal: 9,
        paddingVertical: 5,
        marginRight: 5
    },
    pointText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        marginLeft: 13
    }
})