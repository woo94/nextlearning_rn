import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    marks: Array<number>;
}

const dayList = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function PlanItemDayMarker(props: Props) {
    const { marks } = props

    return (
        <View style={styles.container}>
            {dayList.map((day, index) => (
                <Text key={index} style={[styles.commonDay, marks.includes(index) && styles.selectedDay]}>
                    {day}
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        right: 24
    },
    commonDay: {
        fontFamily: "Roboto-Bold",
        letterSpacing: 1.2,
        fontSize: 10,
        color: "#cfcfcf"
    },
    selectedDay: {
        color: "#fb7a63"
    }
})