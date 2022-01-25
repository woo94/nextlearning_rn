import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { Category } from 'src/utils/types/firestore'
import { getCategoryColor } from 'src/utils/hooks/theme'

interface Props {
    title: string;
    min: number;
    fulfilled: number;
    category: Category;
}

export default function TaskInfo(props: Props) {
    const { title, min, fulfilled, category } = props
    const progressBarColor = getCategoryColor(category)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ProgressBar color={progressBarColor} style={styles.progressBar} progress={fulfilled / min} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: '#0f0f0f',
        marginVertical: 10,
    },
    progressBar: {
        backgroundColor: '#f5f0f0',
        height: 5,
        borderRadius: 30
    }
})