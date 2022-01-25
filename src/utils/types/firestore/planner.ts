import { Category, TimeOption } from './common'

export interface __DOC__PLANNER {
    category: Category;
    day_list: Array<number>; // 0:sun ~ 6:sat
    define_date_list: Array<number>; // 1 ~ 31[]
    done_date_list: Array<number>; // 1 ~ 31[]
    last_edit: number; // 1 ~ 31 // update this field after edit planner doc
    name: string;
    planner_id: string;
    task_group: string; // math / english / science
    task_subject: string; // 
    time_option: TimeOption; // 
    week_list: Array<number>; // 0 ~ 5
    year_month: string; // ex) 2021_9, 2021_10
}