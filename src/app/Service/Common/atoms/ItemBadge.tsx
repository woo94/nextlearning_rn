import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Category, TimeOption } from 'src/utils/types/firestore'
import { getCategoryColor } from 'src/utils/hooks/theme'
import ANYTIME from '../icons/anytime.svg'
import MORNING from '../icons/morning.svg'
import AFTERNOON from '../icons/afternoon.svg'
import NIGHT from '../icons/night.svg'

interface Props {
    isDefault: boolean;
    category?: Category;
    timeOption?: TimeOption;
}

const WIDTH = 40
const OFFSET = 5
const ICON_SIZE = 30

export default function TimeOptionBadge(props: Props) {
    const { isDefault, category, timeOption } = props

    if (isDefault) {
        return (
            <View style={[styles.layout, styles.noIcon]}>

            </View>
        )
    }

    let icon = (() => {
        if (timeOption === "anytime") {
            return <ANYTIME style={styles.icon} />
        }
        else if (timeOption === "morning") {
            return <MORNING style={styles.icon} />
        }
        else if (timeOption === "afternoon") {
            return <AFTERNOON style={styles.icon} />
        }
        else {
            return <NIGHT style={styles.icon} />
        }
    })()

    return (
        <View style={[styles.layout, styles.container]}>
            <View style={[styles.outer, { backgroundColor: getCategoryColor(category || 'challenges'), opacity: 0.25 }]}></View>
            <View style={[styles.inner, { backgroundColor: getCategoryColor(category || 'challenges') }]}></View>
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        marginRight: 14,
        marginLeft: 16
    },
    noIcon: {
        width: WIDTH,
        height: WIDTH,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        borderRadius: 16
    },
    container: {
        flexDirection: 'row'
    },
    outer: {
        position: 'relative',
        width: WIDTH + OFFSET,
        height: WIDTH + OFFSET,
        backgroundColor: 'black',
        borderRadius: 14
    },
    inner: {
        position: 'absolute',
        width: WIDTH,
        height: WIDTH,
        transform: [{ translateX: OFFSET / 2 }, { translateY: OFFSET / 2 }],
        backgroundColor: 'orangered',
        borderRadius: 14
    },
    icon: {
        position: 'absolute',
        transform: [{ translateX: (WIDTH + OFFSET - ICON_SIZE) / 2 }, { translateY: (WIDTH + OFFSET - ICON_SIZE) / 2 }]
    }
})