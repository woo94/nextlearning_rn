import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TimeOptionBadge from '../atoms/TimeOptionBadge'
import TaskItemInfo from '../molecules/TaskItemInfo'
import { DailyTask } from 'src/utils/types/firestore'
import TaskItemFooter from '../molecules/TaskItemFooter'

interface Props {
    task: DailyTask
}

export default function TaskItem(props: Props) {
    const { task } = props
    const { category, time_option, min, fulfilled, name } = task

    return (
        <View style={styles.container}>
            <TimeOptionBadge timeOption={time_option} category={category} />
            {/* <CategoryBadge category={category} /> */}
            <TaskItemInfo min={min} fulfilled={fulfilled} category={category} title={name} />
            <TaskItemFooter time={task.min} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        borderColor: '#f4f4f6',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13
    }
})