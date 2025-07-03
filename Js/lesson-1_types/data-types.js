// Включение строгого режима
'use strict'
// Переменные

// При let можно переопрде
let message = 'Привет'
console.log(message)
message = 'Пока'
console.log(message)

// При var можно отображать до инициализации
console.log(message_1)
var message_1 = "Привет"


// Переменную const нельзя переопределять
const message_2 = "Привет"

// В переменную можно присваивать несколько названий
const name = 'Михаил', surname = 'Володько'
// Или же
const
     namee = 'Михаил',
     surnamee = 'Володько'
// Можно присваивать одно значение переменной в другую
const admin = name
console.log(admin)


// Типы данных

const nameee = 'Александр' // String
const age = 28 // Number
const isDeveloper = true // Boolean
const power = 99999999999999999999999 // Bigint
const sign = Symbol() // Symbol
const something = undefined // Undefined

const user = {
    login: '123',
    password: 'qwerty'
} // Object
const data = null // Null



// String
const greeting = 'Привет'
const greetings = "Миша"
const goodbye = `Пока`

// При `` можно встраивать другие сущности
const message_3 = `${greeting}, ${greetings}!` // интерполяция строк
console.log(message_3)

const a = 5
const b = 10
const sum = `Сумма a и b равна ${a + b}`
console.log(sum)

// Также при `` можно писать несколько строк
const strings = `
    Привет
    Как
    у
    тебя 
    дела
`
console.log(strings)

// Numbers (-9007199254740991 < number < 9007199254740991)
const posX = 50
const posY = -100
const posZ = 1.55

// Действия выполняются в математической последовательности
const point = (posX + posY + posZ) * 2 / posX
console.log(point)

console.log('Слово' / posX) // Ошибки не будет, просто будет NaN

console.log(100 / 0) // Будет infinity
console.log(-100 / 0) // Будет -infinity

// Bigint

console.log(9900000000000091 + 1)
console.log(9900000000000091 + 2)

console.log(9900000000000091n + 1n) // так будет правильное значение
console.log(9900000000000091n + 2n)


const bignumber = 1_000_000_000 // можно так записывать для отображения единиц
 
// Boolean
const agee = 11
const isChild = age < 18
console.log(isChild);

// Null
let dataa = null // значения появятся через какое-то время
console.log(data);

let nameeee // значение не присвоено
console.log(nameeee);


// Object
const users = {
    // набор ключ значений
    // коллекции
    // массивы
    u_name: 'Александр',
    u_age: '28',
    isDeveloper: true,
}

const numbers = [4, 8, 15, 16, 23, 42]
const map = new Map()
const set = new Set()
const date = new Date()



// Проверка типа данных (в консоле фиолетовыми числами отображаются в формате number)
console.log(
    typeof message,
    typeof 100,
    typeof 100n,
    typeof true,
    typeof null, // выводит object - это баг
    typeof undefined,
    typeof {},
    typeof [4, 8, 15],
    typeof (111+222),
);

// Преобразование типов
const num = 111
const str = '222'
const result = num + str
console.log(result); // выводит 111222 в формате стринг
console.log(typeof result); // string


console.log('16' / '8'); // выводит 2
console.log(typeof ('16' / '8')); // number

// Явное преобразование
console.log(typeof age);
console.log(String(age)); // обязательно с большой буквы

const isAdult = false
console.log(isAdult);
console.log(String(isAdult));

const obj = {
    nameeeee: 'Александр'
}
console.log(String(obj)); // выводит странную строку [object Object

const stri = '1000'
const numi = Number(stri)
console.log(numi);

console.log(Number('точно-не-число')); // NaN

// мы не можем преобразовать строку в число , если там есть хотя бы один нечисловой символ

console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN

console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(2)); // true

console.log(Boolean('Привет')); // true
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // false
console.log(Boolean('')); // true

// Преобразуются в false
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
// Все остальные значения - в true