import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import Summary from '../molecules/Summary'
import NotiBox from '../atoms/NotiBox'
import HomeTaskNav from 'src/Screens/Home/organisms/HomeTaskNav'
import { DailyTask } from 'src/utils/types/firestore'

const tasks: Array<DailyTask> = [
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    {
        planner_id: '',
        year_month: '',
        date: 1,
        min: 30,
        fulfilled: 0,
        mode: 'timer',
        step: 'define',
        time_option: 'anytime',
        result_list: [],
        name: 'task1',
        category: 'school',
        day_list: [],
        define_date_list: [],
        done_date_list: [],
        last_edit: 0,
        task_group: '',
        task_subject: '',
        week_list: []
    },
    // {
    //     planner_id: '',
    //     year_month: '',
    //     date: 1,
    //     min: 30,
    //     fulfilled: 0,
    //     mode: 'timer',
    //     step: 'define',
    //     time_option: 'anytime',
    //     result_list: [],
    //     name: 'task1',
    //     category: 'school',
    //     day_list: [],
    //     define_date_list: [],
    //     done_date_list: [],
    //     last_edit: 0,
    //     task_group: '',
    //     task_subject: '',
    //     week_list: []
    // }
]
export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar />
                <Summary firstName='' lastName="April" points={900} />
                <NotiBox />
            </View>
            <HomeTaskNav tasks={tasks} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        paddingBottom: 50
    },
    container: {
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
    }
})