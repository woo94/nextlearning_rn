import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Category, TimeOption } from 'src/utils/types/firestore'
import ANYTIME from 'src/app/Service/Common/icons/anytime.svg'
import AFTERNOON from 'src/app/Service/Common/icons/afternoon.svg'
import MORNING from 'src/app/Service/Common/icons/morning.svg'
import NIGHT from 'src/app/Service/Common/icons/night.svg'

interface Props {
    category: Category,
    timeOption: TimeOption
}

const WIDTH = 40
const OFFSET = 5

export default function TimeOptionBadge(props: Props) {
    const { category, timeOption } = props

    let bgcolor = (() => {
        if (category === 'school') {
            return '#a1dde0'
        }
        else if (category === 'extracurricular') {
            return '#ffd88b'
        }
        else {
            return '#f886a8'
        }
    })()

    let icon = (() => {
        if (timeOption === 'anytime') {
            return <ANYTIME style={styles.icon} />
        }
        else if (timeOption === 'morning') {
            return <MORNING style={styles.icon} />
        }
        else if (timeOption === 'afternoon') {
            return <AFTERNOON style={styles.icon} />
        }
        else {
            return <NIGHT style={styles.icon} />
        }
    })()


    return (
        <View style={styles.container}>
            <View style={[styles.outer, { backgroundColor: bgcolor, opacity: 0.25 }]}></View>
            <View style={[styles.inner, { backgroundColor: bgcolor }]}></View>
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    outer: {
        position: 'relative',
        width: WIDTH + OFFSET,
        height: WIDTH + OFFSET,
        borderRadius: 16
    },
    inner: {
        position: 'absolute',
        width: WIDTH,
        height: WIDTH,
        transform: [{ translateX: OFFSET / 2 }, { translateY: OFFSET / 2 }],
        borderRadius: 16
    },
    icon: {
        position: 'absolute',
        transform: [{ translateX: 7.5 }, { translateY: 7.5 }]
    }
})