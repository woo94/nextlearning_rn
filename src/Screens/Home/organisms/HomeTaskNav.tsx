import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TaskList from 'src/Screens/Home/templates/TaskList'
import AddTaskBtn from '../atoms/AddTaskBtn'
import { DailyTask } from 'src/utils/types/firestore'

type HomeTaskNavTabParamList = {
    Yesterday: undefined;
    Today: undefined;
    Tomorrow: undefined;
}

const Tab = createMaterialTopTabNavigator<HomeTaskNavTabParamList>()

interface TabBarLabelFnProps {
    focused: boolean;
    color: string;
}

const createTabBarLabel = (title: string) => {
    return (props: TabBarLabelFnProps) => {
        const { focused } = props
        if (focused) {
            return (
                <Text style={[styles.activeText, styles.commonText]}>
                    {title}
                </Text>
            )
        }
        else {
            return (
                <Text style={[styles.inactiveText, styles.commonText]}>
                    {title}
                </Text>
            )
        }
    }
}

interface Props {
    tasks: Array<DailyTask>
}

export default function HomeTaskNav(props: Props) {
    const { tasks } = props

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#f9fafb',
                    marginHorizontal: 15,
                    borderRadius: 16
                },
            }}
            style={{
                overflow: 'visible'
            }}
        >
            <Tab.Screen name="Yesterday"
                options={{
                    tabBarLabel: createTabBarLabel('Yesterday'),
                    tabBarIndicatorStyle: {
                        display: 'none'
                    }
                }}
            >
                {props =>

                    <TaskList tasks={tasks} />

                }
            </Tab.Screen>
            <Tab.Screen name="Today"
                options={{
                    tabBarLabel: createTabBarLabel('Today'),
                    tabBarIndicatorStyle: {
                        display: 'none'
                    }
                }}
            >
                {props =>
                    <TaskList tasks={tasks} />
                }
            </Tab.Screen>
            <Tab.Screen name="Tomorrow"
                options={{
                    tabBarLabel: createTabBarLabel('Tomorrow'),
                    tabBarIndicatorStyle: {
                        display: 'none'
                    }
                }}
            >
                {props =>
                    <TaskList tasks={tasks} />
                }
            </Tab.Screen>
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    commonText: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        width: 96,
        textAlign: 'center',

    },
    activeText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#0f0f0f',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden'
    },
    inactiveText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: '#c2c2c2'
    }
})