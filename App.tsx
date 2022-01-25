import React, { useEffect, useState } from 'react'
import Login from 'src/app/Login'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Service from 'src/app/Service'
import { Provider } from 'react-redux'
import store from 'src/utils/appStore/Store'

export default function App() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
                console.log(user.uid)
            }
            else {
                setUser(null)
            }
        })

        return subscriber
    }, [])

    if (user === null) {
        return (
            <Login />
        )
    }

    return (
        <Provider store={store}>
            <Service />
        </Provider>
    )
}