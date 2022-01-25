import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskItemBullet from '../atoms/TaskItemBullet'

interface Props {
    time: number
}

export default function TaskItemFooter(props: Props) {
    const { time } = props
    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>
                {time || 0} min
            </Text>
            <TaskItemBullet />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    timeText: {
        fontFamily: 'Roboto-Bold',
        color: '#0f0f0f',
        fontSize: 12,
        marginHorizontal: 8
    }
})