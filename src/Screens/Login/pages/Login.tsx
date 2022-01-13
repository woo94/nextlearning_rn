import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from './Main'
import Signin from './Signin'
import Signup from './Signup'

export type LoginStackParamList = {
    Main: undefined;
    Signin: undefined;
    Signup: undefined;
}

export default function Login() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={
                        {
                            headerBackTitleVisible: false,
                            headerTitle: '',
                            headerShadowVisible: false
                        }
                    }
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={
                        {
                            headerBackTitleVisible: false,
                            headerTitle: '',
                            headerShadowVisible: false
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<LoginStackParamList>()
