import React from 'react'
import {Text, StyleSheet} from 'react-native'

interface Props {
    text: string;
}

export default function HeaderSmall(props: Props) {
    return (
        <Text style={styles.header}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 16,
        letterSpacing: -0.4,
        opacity: 0.5
    }
})