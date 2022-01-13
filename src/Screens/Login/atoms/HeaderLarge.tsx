import React from 'react'
import {Text, StyleSheet} from 'react-native'

interface Props {
    text: string;
}

export default function HeaderLarge(props: Props) {
    return (
        <Text style={styles.header}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        color: "#ff5e41",
        fontSize: 32,
        letterSpacing: -0.8,
        fontFamily: 'Roboto-Bold',
        marginVertical: 8
    }
})