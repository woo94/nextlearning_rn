import { Category } from 'src/utils/types/firestore'

export function getCategoryColor(category: Category) {
    if (category === 'school') {
        return '#a1dde0'
    }
    else if (category === 'extracurricular') {
        return '#ffd88b'
    }
    else {
        return '#f886a8'
    }
}