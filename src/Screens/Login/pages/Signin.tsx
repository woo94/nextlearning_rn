import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { LoginStackParamList } from './Login'
import Header from '../molecules/Header'
import EmailInput from '../atoms/EmailInput'
import PasswordInput from '../atoms/PasswordInput'
import auth from '@react-native-firebase/auth'

type Props = NativeStackScreenProps<LoginStackParamList, 'Signin'>

export default function Signin({ route, navigation }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onPressSignin = async () => {
        return auth().signInWithEmailAndPassword(email, password)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Welcome Back 😍" subtitle="" />
                <View style={styles.form}>
                    <EmailInput onChangeText={setEmail} />
                    <PasswordInput onChangeText={setPassword} />
                </View>

                <Text style={styles.notHere}>Not here?</Text>

                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.signupText}>Sign-up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPressSignin} style={styles.signinBtn}>
                    <Text style={styles.signinText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16
    },
    form: {
        width: '100%',
        marginBottom: 54,
        marginTop: 91
    },
    notHere: {
        marginBottom: 8
    },
    signupBtn: {
        paddingVertical: 8,
        paddingHorizontal: 11,
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: 13,
        marginBottom: 109
    },
    signupText: {
        fontFamily: "Roboto",
        fontSize: 14,
        letterSpacing: -0.35,
        color: "#ff5e41",
        fontWeight: "500"
    },
    signinBtn: {
        backgroundColor: "#ff5e41",
        width: '100%',
        paddingVertical: 18,
        borderRadius: 21
    },
    signinText: {
        fontFamily: "Roboto",
        color: "white",
        fontWeight: "500",
        fontSize: 17,
        width: '100%',
        textAlign: 'center'
    }
})