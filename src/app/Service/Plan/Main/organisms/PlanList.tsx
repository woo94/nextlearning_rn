import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import WeeklyPlan from './WeeklyPlan'
import { __DOC__PLANNER } from 'src/utils/types/firestore'
import dayjs from 'dayjs'
import { getMonthInfo } from 'src/utils/hooks/dateInfo'
import CreateMonthlyPlanBtn from '../atoms/CreateMonthlyPlanBtn'
import sample from '../templates/sample'

interface Props {
    plans: Array<__DOC__PLANNER>;
    dateObj: dayjs.Dayjs
}

export default function PlanList(props: Props) {
    let { plans, dateObj } = props
    const monthInfo = getMonthInfo(dateObj)
    const weekList: Array<number> = Array.from(monthInfo.keys())
    plans = sample

    return (
        <ScrollView style={styles.container}>
            {
                weekList.map(weekNum => (<WeeklyPlan key={weekNum} plans={plans.filter(p => p.week_list.includes(weekNum))} weekNum={weekNum} />))
            }
            <CreateMonthlyPlanBtn />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})