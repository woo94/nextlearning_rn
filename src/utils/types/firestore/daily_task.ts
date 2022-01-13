// collection ref
// firestore.collection("user").doc($uid).collection("daily_task")

// 1:N relationship with __DOC__PLANNER

export type TimeOption = 'anytime' | 'morning' | 'afternoon' | 'night'

export interface __DOC__DAILY_TASK {
    planner_id: string;
    year_month: string;

    date: number;
    min: number;
    fulfilled: number;
    mode: string;
    step: string;
    time_option: TimeOption;
    result_list: Array<string>;
    name: string;
}