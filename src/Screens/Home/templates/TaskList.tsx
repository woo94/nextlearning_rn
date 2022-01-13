import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { DailyTask } from 'src/utils/types/firestore'
import TaskItem from '../organisms/TaskItem'
import AddTaskBtn from '../atoms/AddTaskBtn'

interface Props {
    tasks: Array<DailyTask>
}

export default function TaskList(props: Props) {
    const { tasks } = props

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
            {tasks.map(task => (
                <TaskItem key={task.planner_id} task={task} />
            ))}
            <AddTaskBtn />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20
    }
})