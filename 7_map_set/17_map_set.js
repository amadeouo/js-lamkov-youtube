const user = {
    name: 'Alexander',
    age: 28,
    city: 'Moscow',
}
// Перебор ключей и значений

// Ключи
const userKeys = Object.keys(user)

console.log(userKeys)

userKeys.forEach((key) => {
    console.log(key)
})

// Значения
const userValues = Object.values(user)

console.log(userValues)

userValues.forEach((value) => {
    console.log('keys object user:', value)
})


// Перебор пар объектов
const userEntries = Object.entries(user)
console.log(userEntries)

// userEntries.forEach((userEntry) => {
//     const key = userEntry[0]
//     const value = userEntry[1]

//     console.log(key)
//     console.log(value)
// })


// удобнее запись чем выше
userEntries.forEach(([key, value]) => {
    console.log(key)
    console.log(value)
})


const userEntriesFormatted = userEntries.map(([key, value]) => {
    return [key.toUpperCase(), `~~${value}~~`]
})

console.debug('userEntriesFormatted', userEntriesFormatted)

// Превращение обратно ключ-значение в объект
const usersFormatted = Object.fromEntries(userEntriesFormatted)
console.log('userFormatted', usersFormatted)


// Коллекция map
const dats = {
    1: 'Как число',
    '1': 'Как строка',
}
dats[2] = 'Два как число'
dats['2'] = 'Два как строка'
console.log( dats ) // => { '1': 'Как строка', '2': 'Два как строка' }

const data = new Map([ // чтобы не было как выше, используется вот такой синтаксис
    [1, 'Один как число'],
    ['1', 'Один как строка'],
    ['name', undefined]
])
data.set(3, 'Три как число')
data.set('3', 'Три как строка')

// Обращение к коллекции
console.log(data) // так не обращаются
console.log(data.get(1)) // => Один как число
console.log( data.has('name') ) //  Наличие значения по ключу => true, потому что есть undefined


const userData = new Map()

userData.set(1, 'Что у вас здесь происходит')
userData.delete(1) // Удаляет один указанный элемент коллекции
userData.set(2, 'Я хочу стать Frontend-разработчиком')
userData.set(3, 'Я хочу стать Frontend-разработчиком и наслаждаться работой')
userData.clear() // Удаляет все элементы коллекции
console.log(userData) // Map(0) {}
console.log(userData.has(1)) // => false
console.log(userData.get(1)) // => undefined
console.log(userData.size) // Выводит размер коллекции (Указывать без круглых скобок, т.к. это свойство)

const userLogs = new Map()
userLogs.set('name', 'Alexander')
userLogs.set('age', 28)
console.log('keys:', userLogs.keys())
console.log('values:', userLogs.values())
console.log('entries:', userLogs.entries())

// Перебор вышеперечисленных форматов
for (const key of userLogs.keys()) {
    console.log(key)
} // => name, age

for (const value of userLogs.values()) {
    console.log(value)
} // => Alexander, 28

for (const entry of userLogs.entries()) {
    console.log(entry)
} // => ['name', 'Alexander'], ['age', 28]


userLogs.forEach((value, key, map) => {
    console.log(value)
    console.log(key)
    console.log(map)
})

// Преобразования из Object в Map
const obj = {
    name: 'Alexander',
    age: 28,
}
const map = new Map( Object.entries(obj) )
map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

// Преобразования из Map в Object
const map1 = new Map([
    ['name', 'Alexander'],
    ['age', 28],
])
const obj1 = Object.fromEntries(map)
console.log(obj1)

// Коллекция Set - только значения в единственном экземпляре
const set = new Set([1, 2, 2, 4, 3, 5, 2, 3])
console.log(set) // => Set(5) { 1, 2, 4, 3, 5 }

const arr = [100, 200, 100, 300, 400, 300]
const set1 = new Set(arr)
console.log(set1) // => Set(4) { 100, 200, 300, 400 }

const arr2 = []
const set2 = new Set(arr2)

const arrExample = [100, 100, 200, 300, 120, 304, 100, 300]
const setExample = new Set(arrExample)

setExample.add(1213)
setExample.delete(1213)
setExample.has(1213)
// arrExample.clear()
console.log( setExample.size )

// Перебор элементов set
for (const key of setExample.keys()) { // между этим и values нет разницы
    console.log('keys:', key)
} 
for (const value of setExample.values()) { // лучше использовать такой вариант, а еще лучше через forEach
    console.log('values:', value)
}
for (const entrie of setExample.entries()) { // тут будут странные значения с одинаковыми значениями в массиве
    console.log('entries:', entrie)
}
setExample.forEach((value) => {
    console.log('values from forEach:',value)
})
