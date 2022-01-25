import React from 'react'
import DEFAULT_PROFILE from 'src/app/Service/Common/icons/ic_Profile.svg'
import { View, StyleSheet, Text } from 'react-native'

interface Props {
    firstName: string;
    lastName: string;
}

export default function Greeting(props: Props) {
    return (
        <View style={styles.container}>
            <DEFAULT_PROFILE />
            <View style={styles.textContainer}>
                <Text style={styles.commonGreet}>
                    Good Morning
                </Text>
                <View>
                    <Text style={styles.userName}>
                        {props.lastName}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 2
    },
    textContainer: {
        marginHorizontal: 13
    },
    commonGreet: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        lineHeight: 18,
        color: "#373737"
    },
    userName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        lineHeight: 18,
        color: "#0f0f0f"
    }
})