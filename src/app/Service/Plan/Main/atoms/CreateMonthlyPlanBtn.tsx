import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function CreateMonthlyPlanBtn() {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { }}
        >
            <Text style={styles.btnText}>
                Create Monthly Plan
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 32,
        backgroundColor: '#fb7a63',
        borderRadius: 22,
        marginTop: 52,
        marginBottom: 26
    },
    btnText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: 'white',
        paddingVertical: 12.5
    }
})