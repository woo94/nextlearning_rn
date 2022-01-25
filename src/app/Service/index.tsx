import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Plan from './Plan'
import Me from './Me'
import HOUSE from './Tab_icons/ic_house.svg'
import HOUSE_FILL from './Tab_icons/ic_housefill.svg'
import MONTHLY from './Tab_icons/ic_monthly.svg'
import MONTHLY_FILL from './Tab_icons/ic_monthlyfill.svg'
import PEOPLE from './Tab_icons/ic_people.svg'
import PEOPLE_FILL from './Tab_icons/ic_peoplefill.svg'
import BOOK from './Tab_icons/ic_book.svg'
import BOOK_FILL from './Tab_icons/ic_bookfill.svg'

type ServiceAppComponentStackParamList = {
    HomeTab: undefined;
    PlanTab: undefined;
    // LibraryTab: undefined;
    MeTab: undefined
}

export default function Service() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0f0f0f',
                tabBarInactiveTintColor: 'rgba(0,0,0,0.15)'
            }}>
                <Tab.Screen name="HomeTab" component={Home} options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <HOUSE_FILL />
                        }
                        else {
                            return <HOUSE fillOpacity={0.15} />
                        }
                    }
                }} />
                <Tab.Screen name="PlanTab" component={Plan} options={{
                    title: 'Plan',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <MONTHLY_FILL />
                        }
                        else {
                            return <MONTHLY fillOpacity={0.15} />
                        }
                    }
                }} />
                {/* <Tab.Screen name="LibraryTab" component={Library} options={{
                    title: 'Library',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <BOOK_FILL />
                        }
                        else {
                            return <BOOK fillOpacity={0.15} />
                        }
                    }
                }} /> */}
                <Tab.Screen name="MeTab" component={Me} options={{
                    title: 'Me',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <PEOPLE_FILL />
                        }
                        else {
                            return <PEOPLE fillOpacity={0.15} />
                        }
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator<ServiceAppComponentStackParamList>()