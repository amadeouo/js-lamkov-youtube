const data = ['Александр', 28] // деструктуризация
const [name, age] = data
console.log(name, age)

const letters = ['А', 'Б', 'В', 'Г', 'Д']

// Перебор массива
letters.forEach((letter, index, array) => { 
    console.log(`Letter ${letter} is located at ${index} index in [${array}] array`)
})

letters.forEach((letter) => { // зачастую используется только первый параметр
    console.log(letter)
})

// Поиск индекса уже известного элемента
const prices = [100, 200, 300, 400, 500, 444, 500, 444, 777]
console.log(prices.indexOf(777)) // => 8
console.log(prices.indexOf(444)) // => 5 (показывает первое вхождение)
console.log(prices.indexOf(12313)) // => -1

console.log(
    'Существует ли 12313 в prices:',
    prices.indexOf(111) !== -1
)

console.log(prices.indexOf(444, 3)) // Можно выбрать вторым параметром начала старта отсчета => 5

console.log(prices.lastIndexOf(444)) // можно искать с конца 
console.log(prices.lastIndexOf(444, 3)) // ищет с -3 индекса

const users = [
    {
        name: 'Alexander',
        age: 28,
        city: 'Moscow',
    },
    {
        name: 'Mikhail',
        age: 19,
        city: 'Perm',
    },
    {
        name: 'Vasiliy',
        age: 40,
        city: 'Moscow',
    }
]
console.log(users.indexOf({ name: 'Vasiliy', age: 40 })) // так нельзя, всегда вернет => -1
console.log(users.findIndex((user, index, array) => { // поиск по элементам через функцию
    if (user.name === 'Vasiliy') {
        return true
    }
}))
console.log(users.findIndex((user) => user.name === 'Vasiliy')) // упрощенная запись
console.log(users.findIndex(({ name }) => name === 'Vasiliy')) // еще более упрощенная запись, но лучше прошлая
console.log(users.findLastIndex(({name}) => name === 'Vasiliy')) // можно и с последнего

// Проверка наличия элемента в массиве
const pricess = [100, 200, 444, 500, 444, 777]
console.log(prices.includes(444, 2)) // можно использовать опциональный элемент

console.log(users.some((user) => user.name === 'Vasiliy')) // хотя бы один
console.log(users.every((user) => user.age >= 18)) // каждый
console.log(users.find((user) => user.name === 'Vasiliy')) // просто поиск первого элемента
console.log(users.filter((user) => user.name === 'Vasiliy')) // находит все элементы

const filteredUsers = users.filter(({city, age}) => {
    return city === 'Moscow' || age < 45
})

const usersFormatted = users.map((user) => { // преобразовывает массив
    return `${user.name}, ${user.age} лет, живет в г. ${user.city}`
})
console.log(usersFormatted)

// для переопределения можно использовать let массив и просто через users = users перезаписать

const userss = [
    {
        name: 'Александр',
        age: 28,
        city: 'Москва',
    },
    {
        name: 'Михаил',
        age: 30,
        city: 'Екатеринбург',
    },
    {
        name: 'Василий',
        age: 40, 
        city: 'Москва',
    },
    {
        name: 'Василий',
        age: 50,
        city: 'Санкт-Петербург',
    },
]


// debugger // позволяет в браузере включить режим дебаггинга
const ageSum = userss.reduce((sum, user) => { // аккумулирует сумму age
    return sum + user.age
}, 0)
const ageeSum = userss.reduce((sum, {age}) => sum + age, 0)
console.log(
    'Средний возраст пользователей:',
    ageSum / userss.length
)
//есть еще reduceRight - справа налево


// Переворот строки
const reversedUsers = users.reverse() // переворачивает данные и МУТИРУЕТ изначальные данные
console.log(users) // => (3) [{…}, {…}, {…}]
console.log(reversedUsers) // => (3) [{…}, {…}, {…}]
const reversedArray = [...users].reverse() // без мутирования работает

// сортировка
// строк
const names = ['mikhail', 'alexander', 'maxim', 'andrey']
const sortedNames = [...names].sort()

console.log(sortedNames)

const numbers = [8, 4, 500]
const sortNumb = [...numbers].sort() // => [4, 500, 8] не правильно 
const sortedNumbers = [...numbers].sort((a, b) => a - b) 



