import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlanMain from './Main/templates/PlanMain'

export type PlanTabParamList = {
    CreateCustomTask: undefined;
    CreateFormattedTask: undefined;
    Main: undefined;
    SelectTaskGroup: undefined;
}

const Stack = createNativeStackNavigator<PlanTabParamList>()

export default function Plan() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={PlanMain} />
        </Stack.Navigator>
    )
}