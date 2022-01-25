import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeMain from './Main/templates/HomeMain'

export type HomeTabStackParamList = {
    Main: undefined;
    RecordingMode: undefined;
    TaskResult: undefined;
    TimerMode: undefined;
}

const Stack = createNativeStackNavigator<HomeTabStackParamList>()

export default function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={HomeMain} />
        </Stack.Navigator>
    )
}