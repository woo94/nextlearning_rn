import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import CALENDAR from 'src/app/Service/Common/icons/ic_calendar.svg'
import { MonthlyPlanNavParamList } from '../organisms/MonthlyPlanNav'


export default function MonthlyPlanNavTabBar(props: MaterialTopTabBarProps) {
    const { navigation, state, descriptors } = props

    return (
        <View style={{ flexDirection: 'row', marginTop: 16, marginBottom: 20, marginHorizontal: 15, paddingHorizontal: 20, height: 48, alignItems: 'center', backgroundColor: "#f9fafb", borderRadius: 16 }}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index
                const { options } = descriptors[route.key]

                return (
                    <Text
                        key={index}
                        style={[styles.commonText, isFocused ? styles.activeText : styles.inactiveText]}
                        suppressHighlighting={true}
                        onPress={(e) => {
                            e.preventDefault()
                            navigation.navigate<keyof MonthlyPlanNavParamList>(index === 0 ? 'thisMonth' : 'nextMonth')
                        }}
                    >
                        {options.title}
                    </Text>
                )
            })}

            <View style={{ position: 'absolute', right: 0, marginHorizontal: 14, paddingHorizontal: 7, paddingVertical: 7, borderRadius: 19, backgroundColor: 'white' }}>
                <CALENDAR />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    commonText: {
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 96,
        textAlign: 'center',
        marginHorizontal: 12.5
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
