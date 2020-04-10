import data from './badge-data.json' // imports data.json
export default data // export the native JS array

const categories = data.map((item) => {
    return item.category
})

const categorieSet = new Set(categories)
export const categoriesUnique = Array.from(categorieSet)

export const categoriesWithCounts = data.reduce((obj, item) => {
    if (item.category in obj) {
        obj[item.category] += 1
    } else {
        obj[item.category] = 1
    }
    return obj
}, {})

export const categoriesWithCountsArray = data.reduce((array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (item.category === array[i].name) {
            array[i].count += 1
            return array
        }
    }
    const newCat = {
        name: item.category,
        count: 1,
    }
    array.push(newCat)
    return array
}, [])