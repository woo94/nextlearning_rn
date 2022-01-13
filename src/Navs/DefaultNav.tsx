import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from 'src/Screens/Login/pages/Login'

type DefaultAppComponentStackParamList = {
    Login: undefined;
}

export default function DefaultNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<DefaultAppComponentStackParamList>()