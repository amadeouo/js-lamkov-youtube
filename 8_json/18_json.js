// Правила
// Не может быть undefined и функций
// Ключи всегда пишутся через двойные кавычки
// Висячие запятые не допустимы

// Преобразование и парсинг JSON и объекта
const user = { 
    name: `Александр`,
    age: 28,
    city: "Moscow",
    address: {
        street: "ул. Пушкина, д. 1, кв. 1",
        zipcode: 123456
    },
    todos: ["sleep", "eat", "work", "train", "learn",],
    hasCat: true,
    yacht: null,
}

// Так нельзя 
const userDataAsString = user.toString()
console.log(userDataAsString) // [object Object]

// Преобразование из объекта в json
const userDataAsStringg = JSON.stringify(user)
console.log(userDataAsStringg) // {"name":"Александр","age":28,"city":"Moscow","address":{"street":"ул. Пушкина, д. 1, кв. 1","zipcode":123456},"todos":["sleep","eat","work","train","learn"],"hasCat":true,"yacht":null}

// Парсинг json
const parsedUserData = JSON.parse(userDataAsStringg)
console.log(parsedUserData) // =>
// {
//   name: 'Александр',
//   age: 28,
//   city: 'Moscow',
//   address: { street: 'ул. Пушкина, д. 1, кв. 1', zipcode: 123456 },
//   todos: [ 'sleep', 'eat', 'work', 'train', 'learn' ],
//   hasCat: true,
//   yacht: null
// }

// Ошибки парсинга (в следующих уроках)

// Преобразование при наличии методов и undefined
const user1 = {
    name: 'Alexander',
    sayHi() {
        console.log(`Привет, ${this.name}!`)
    },
    car: undefined,
}
const userDataAsStr = JSON.stringify(user1) // пропадут неизвестные данные
console.log(userDataAsStr) // => {"name":"Alexander"}

// Массивы как json файлы тоже можно использовать, т.к. массивы это объекты
const arr = [
    'Александр',
    'Михаил',
    'Мария',
]
console.log(typeof arr) // => object
const jsonArr = JSON.stringify(arr)
console.log(jsonArr) // => ["Александр","Михаил","Мария"]
