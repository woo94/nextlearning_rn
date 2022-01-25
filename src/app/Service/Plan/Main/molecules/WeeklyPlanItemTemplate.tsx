import React from 'react'
import { View, StyleSheet } from 'react-native'
import ItemBadge from 'src/app/Service/Common/atoms/ItemBadge'
import PlanItemTitle from '../atoms/PlanItemTitle'
import PlanItemDayMarker from '../atoms/PlanItemDayMarker'

interface Props {
    // isDefault: boolean;

}

export default function WeeklyPlanItemTemplate(props: Props) {
    return (
        <View style={styles.container}>
            <ItemBadge isDefault={true} />
            {/* <ItemBadge isDefault={false} /> */}
            <PlanItemTitle isDefault={true} />
            <PlanItemDayMarker marks={[]} />
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