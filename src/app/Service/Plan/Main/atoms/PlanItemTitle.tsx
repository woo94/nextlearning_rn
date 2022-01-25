import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props {
    isDefault: boolean;
    title?: string;
}

export default function PlanItemTitle(props: Props) {
    const { isDefault, title } = props

    if (isDefault) {
        return (
            <Text style={styles.placeholder}>
                Your Task
            </Text>
        )
    }
    else {
        return (
            <Text style={styles.titleText}>
                {title}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    placeholder: {
        fontFamily: "Roboto-Medium",
        color: "#bdbdbd",
        fontSize: 15,
        fontWeight: "500"
    },
    titleText: {
        fontFamily: "Roboto-Medium",
        color: "#0f0f0f",
        fontSize: 15
    }
})