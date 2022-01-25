import React from 'react'
import Greeting from '../atoms/Greeting'
import Points from '../atoms/Points'
import { View, StyleSheet } from 'react-native'

interface Props {
    firstName: string;
    lastName: string;
    points: number;
}

export default function Summary(props: Props) {
    const { firstName, lastName, points } = props
    return (
        <View style={styles.container}>
            <Greeting firstName={firstName} lastName={lastName} />
            <Points points={points} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 16,
        paddingVertical: 15
    }
})