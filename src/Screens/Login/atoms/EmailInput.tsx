import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

interface Props {
    onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export default function EmailInput(props: Props) {
    return (
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="rgba(0, 0, 0, 0.3)" autoCapitalize="none" autoCorrect={false} onChangeText={(t) => props.onChangeText(t)}  />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        letterSpacing: -0.5,
        borderRadius: 13,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        marginVertical: 8
    }
})