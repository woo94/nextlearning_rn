import React from 'react'
import { View, StyleSheet } from 'react-native'
import ItemBadge from 'src/app/Service/Common/atoms/ItemBadge'
import PlanItemTitle from '../atoms/PlanItemTitle'
import PlanItemDayMarker from '../atoms/PlanItemDayMarker'
import { __DOC__PLANNER } from 'src/utils/types/firestore'

interface Props {
    planner: __DOC__PLANNER
}

export default function WeeklyPlanItem(props: Props) {
    const { planner } = props

    return (
        <View style={styles.container}>
            <ItemBadge isDefault={false} category={planner.category} timeOption={planner.time_option} />
            <PlanItemTitle isDefault={false} title={planner.name} />
            <PlanItemDayMarker marks={planner.day_list} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center'
    }
})