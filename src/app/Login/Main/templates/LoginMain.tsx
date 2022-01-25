import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { LoginStackParamList } from '../../index'

type Props = NativeStackScreenProps<LoginStackParamList, 'Main'>

export default function Main({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.logo}>Studiers</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { navigation.navigate('Signup') }}
                    >
                        <Text style={styles.btnText}>Sign-up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { navigation.navigate('Signin') }}
                    >
                        <Text style={styles.btnText}>Sign-in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fb7a63'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        position: 'absolute',
        textAlign: 'center',
        top: 127,
        fontSize: 50,
        color: 'white'
    },
    btnContainer: {
        position: 'absolute',
        bottom: 94
    },
    btn: {
        paddingHorizontal: 36,
        paddingVertical: 18,
        marginVertical: 18,
        borderRadius: 37.5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white'
    },
    btnText: {
        fontSize: 32,
        color: 'white'
    }
})