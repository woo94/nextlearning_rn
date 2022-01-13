import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PlanList from './PlanList'

type MonthlyPlanNavParamList = {
    thisMonth: undefined;
    nextMonth: undefined;
}

const Tab = createMaterialTopTabNavigator<MonthlyPlanNavParamList>()

interface TabBarLabelFnProps {
    focused: boolean;
    color: string;
}

const createTabBarLabel = (title: string) => {
    return (props: TabBarLabelFnProps) => {
        const { focused } = props
        if (focused) {
            return (
                <Text style={[styles.commonText, styles.activeText]}>
                    {title}
                </Text>
            )
        }
        else {
            return (
                <Text style={[styles.commonText, styles.inactiveText]}>
                    {title}
                </Text>
            )
        }
    }
}

export default function MonthlyPlanNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicator: () => null,
                tabBarStyle: {
                    marginHorizontal: 15,
                    borderRadius: 16,
                    backgroundColor: '#f9fafb'
                }
            }}
        >
            <Tab.Screen name="thisMonth"
                options={{
                    tabBarLabel: createTabBarLabel("month1")
                }}
            >
                {props => <PlanList />}
            </Tab.Screen>
            <Tab.Screen name="nextMonth"
                options={{
                    tabBarLabel: createTabBarLabel("month2")
                }}
            >
                {props => <PlanList />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    commonText: {
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 96,
        textAlign: 'center'
    },
    activeText: {
        fontFamily: "Roboto-Bold",
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 8,
        color: "#0f0f0f"
    },
    inactiveText: {
        fontFamily: "Roboto-Medium",
        color: "#c2c2c2"
    }
})
