import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function AddTaskBtn() {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
                Add today task
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderStyle: 'dashed',
        borderColor: '#d3d3de',
        borderWidth: 1,
        borderRadius: 22,
        paddingVertical: 12.5,
        marginVertical: 25
    },
    btnText: {
        color: '#0f0f0f',
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        fontSize: 17
    }
})