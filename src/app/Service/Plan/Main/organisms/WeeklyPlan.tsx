import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { List } from 'react-native-paper'
import ARROW_DOWN from '../icons/ic_arrowdown.svg'
import WeeklyPlanItemTemplate from '../molecules/WeeklyPlanItemTemplate'
import WeeklyPlanItem from '../molecules/WeeklyPlanItem'
import { __DOC__PLANNER } from 'src/utils/types/firestore'

interface Props {
    plans: Array<__DOC__PLANNER>;
    weekNum: number
}

export default function WeeklyPlan(props: Props) {
    const { plans, weekNum } = props
    const rotateAngle = useRef(new Animated.Value(0)).current
    const [expanded, setExpanded] = useState(true)

    return (
        <List.Accordion
            title={`Week ${weekNum + 1}`}
            titleStyle={styles.titleStyle}
            right={props => <Animated.View style={{
                transform: [{
                    rotate: rotateAngle.interpolate({
                        inputRange: [0, 180],
                        outputRange: ['0deg', '180deg']
                    })
                }]
            }}><ARROW_DOWN /></Animated.View>}
            expanded={expanded}
            onPress={() => {
                if (expanded) {
                    Animated.timing(rotateAngle, {
                        toValue: 180,
                        duration: 200,
                        useNativeDriver: true
                    }).start()
                    setExpanded(false)
                }
                else {
                    Animated.timing(rotateAngle, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true
                    }).start()
                    setExpanded(true)
                }
            }}
        >
            <View style={styles.listItemContainer}>
                {
                    plans.length === 0
                        ? <WeeklyPlanItemTemplate />
                        : plans.map(planner => (<WeeklyPlanItem key={planner.planner_id} planner={planner} />))
                }
            </View>
        </List.Accordion>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderTopWidth: 4,
        borderTopColor: '#f9f9f9',
        borderBottomWidth: 4,
        borderBottomColor: '#f9f9f9'
    },
    titleStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        fontWeight: "500",
        color: '#0f0f0f'
    }
})