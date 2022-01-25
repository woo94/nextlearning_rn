import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

export const today = dayjs()
export const yesterday = dayjs().subtract(1, 'day')
export const tomorrow = dayjs().add(1, 'day')

export const thisMonth = dayjs().startOf('M')
export const nextMonth = dayjs().add(1, 'month').startOf('M')

export const getMonthInfo = (monthObj: dayjs.Dayjs) => {
    let m = monthObj.startOf('M')
    let weeks = 0
    let weekNum = m.week()
    const weekInfoMap = new Map()

    for (let i = 1; i <= m.daysInMonth(); i++) {
        m = m.date(i)

        if (m.week() !== weekNum) {
            weeks++
            weekNum = m.week()
        }

        const weekInfo = weekInfoMap.get(weeks)

        if (!weekInfo) {
            weekInfoMap.set(weeks, [i])
        }
        else {
            weekInfoMap.set(weeks, [...weekInfo, i])
        }
    }
    return weekInfoMap
}