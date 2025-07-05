const name = 'Алесандр'
const emptySt = ''
const strWithOneSpace = ' '

console.log( name.length ) // Длина строки
console.log( name[0] ) // Первый символ

console.log( name.at(0) ) // тоже самое что и length, но позволяет использовать -
console.log( name.at(-1) ) // => р

const text = 'КаКоЙтоТекСТ'
console.log(text.toLowerCase())
console.log(text.toUpperCase())


const message = '    Привет     '
console.log(message.trimStart().length) // Обрезает пробелы в начале => 11
console.log(message.trimEnd().length) // Обрезает пробелы в конце => 10
console.log(message.trim().length) // Обрезает пробелы и в начале и в конце => 6

const sentence = 'Пробуем найти ~это выражение~ в этом предложении'
console.log(sentence.indexOf('~это выражение~')) // показывает индекс вхождения указанного элемента => 14
console.log(sentence.indexOf('dadasdad')) // если такой подстроки нет, то показывает -1 => -1
// Более современный вариант
console.log(sentence.includes('~это выражение~')) // возвращется true или false

console.log(sentence.startsWith('Пр', 0)) // => true
console.log(sentence.endsWith('Пр', 5)) // => false


const str = 'JavaScript'
console.log( str.substring(0, 4) ) // получение подстроки из строки => Java
console.log( str.substring(4) ) // если передавать один аргумент, то он будет использоваться в качестве последнего индекса
console.log( str.slice(0, 4) ) // то же самое что и substring, но можно использовать отриц. значения и нельзя менять местами аргументы
console.log( str.slice(-4) ) // => ript
console.log( str.repeat(3) ) // => JavaScriptJavaScriptJavaScript


const assumption = 'Я изучаю бэкенд, но я еще ничего не знаю про бэкенд'
console.log( assumption.replace('бэкенд', 'фронтенд') ) // меняет только первое вхождение подстроки
console.log( assumption.replaceAll('бэкенд', 'фронтенд') ) // меняет все вхождения
// на замену replaceAll может прийти использование регулярного выражения с флагом g
console.log( assumption.replace(/бэкенд/g, 'фронтенд')) // флаг g для регулярного выражения ищет все вхождения
console.log( assumption.replace(/бэкенд/gi, 'фронтенд')) // флаг gi для регулярного выражения имещ все вхождения без учета регистра

const strr = '+7 (999) 999-99-99'
console.log( strr.replace(/\d/g, '#')) // заменяет все числовые выражения на решетку

const strForSplit = 'Привет, мир!'
console.log(strForSplit.split(', ')) // разделяет на строки
console.log(strForSplit.split('')) // если указать пустую строку то в массив передастся все символы поотдельности


// Не меняют
// const messages = '  Привет  '
// console.log(messages)
// messages.trim().toUpperCase().slice(0, 4)

// Меняют
let messages = '  Привет  '
console.log(messages)
messages = messages.trim().toUpperCase().slice(0, 4)
console.log(messages)

// Задача Валадиция вводимого значения
const value = prompt( 'Введите ваше имя:' )

const clearValue = value.trim().toLowerCase()

if (clearValue.length === 0) {
    alert('Ошибка! Имя не может быть пустым.')
}

if (clearValue.includes('админ')) {
    alert('Ошибка! Вы не можете занять это имя')
}

