import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import PlanList from './PlanList'
import { thisMonth, nextMonth } from 'src/utils/hooks/dateInfo'
import MonthlyPlanNavTabBar from '../molecules/MonthlyPlanNavTabBar'

export type MonthlyPlanNavParamList = {
    thisMonth: undefined;
    nextMonth: undefined;
}

const Tab = createMaterialTopTabNavigator<MonthlyPlanNavParamList>()

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
            tabBar={(props) => MonthlyPlanNavTabBar(props)}
        >
            <Tab.Screen name="thisMonth"
                options={{
                    title: thisMonth.format('MMMM')
                }}
            >
                {props => <PlanList dateObj={thisMonth} plans={[]} />}
            </Tab.Screen>
            <Tab.Screen name="nextMonth"
                options={{
                    title: nextMonth.format('MMMM')
                }}
            >
                {props => <PlanList dateObj={nextMonth} plans={[]} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}