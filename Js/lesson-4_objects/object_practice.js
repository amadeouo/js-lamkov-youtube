// Первое задание
// Напиши функцию, которая принимает два объекта и возвращает
// true
// , если объекты равны, и
// false
// , если нет, используя функцию

const first_object = {
    name: 'Михаил',
    age: 19,
}

const second_object = {
    name: 'Мария',
    age: 20,
}

const third_object = {
    name: 'Мария',
    age: 20,
}

const areObjectsEqual = (obj_1, obj_2) => {
    const key1 = Object.keys(obj_1)
    const key2 = Object.keys(obj_1)
    
    if (key1.length !== key2.length) {
        return false
    }

    for (const keys in obj_1) {
        const value1 = obj_1[keys]
        const value2 = obj_2[keys]
        
        const areValuesObject = typeof obj_1 === 'object' && typeof obj_2 === 'object'

        if (areValuesObject) { // называется рекурсия
            return areObjectsEqual(value1, value2)
        }

        if (obj_1[keys] !== obj_2[keys]) {
            return false
        }
    }

    return true

}

const key_1 = Object.keys(first_object)
const areValuesObject = typeof first_object === 'object' && typeof second_object === 'object'

console.log(key_1.length) // 2
console.log(areValuesObject) // true

console.log(areObjectsEqual(second_object, third_object))



// Задание 2
// Создай новый объект, копируя свойства из существующего объекта с использованием оператора расширения.

const originalObject = { name: "Bob", age: 25 };
const copiedObject = {...originalObject, gender: 'female'}
const copiedObject_second = Object.assign({}, originalObject)

console.log(copiedObject)
console.log(copiedObject_second)


// Задание 3
// Объедини два объекта в один. Если они содержат одинаковые ключи, значение из второго объекта должно перезаписать значение из первого.

const firstObject = {
    name: 'Bob',
    age: 20,
}

const secondObject = {
    name: 'Bobs',
    age: 20,
}

const mergedObject = Object.assign({}, firstObject, secondObject)
const mergedObject2 = {...firstObject, ...secondObject}

console.log(mergedObject)
console.log(mergedObject2)

const userr = {
    name: 'Charlie',
    age: 22,
    city: 'New York',
    country: 'USA',
    profession: 'Developer',
}

const {name, age, city, ...info} = userr
const {name_1, age_1, city: Gorod = 'Москва', ...addInfo} = userr

console.log(name, age, city, info)
console.log(name_1, Gorod, addInfo)