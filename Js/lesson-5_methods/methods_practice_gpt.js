// Задание 1: Длина строки
// Напиши функцию getStringLength(str), которая принимает строку и возвращает её длину.

const getStringLength = (str) => {
    return console.log(str.length)
}
getStringLength('dasdads')

// Задание 2: Преобразование к верхнему регистру
// Создай функцию toUpperCase(str), которая принимает строку и возвращает её в верхнем регистре.

function toUpperCase(str) {
    return console.log(str.toUpperCase())
}
toUpperCase('dsadasda')

// Задание 3: Извлечение подстроки
// Напиши функцию getSubstring(str, start, end) , которая возвращает подстроку из строки str с индексами от start до end

function getSubstring(str, start, end) {
    return console.log(str.substring(start, end))
}
getSubstring('Heaver', 1, 10)

// Задание 4: Проверка на наличие подстроки
// Создай функцию containsSubstring(str, substring), которая возвращает true, если str содержит подстроку substring, иначе возвращает false

function containsSubstring(str, substring) {
    return console.log(str.includes(substring))
}
containsSubstring('Как дела?', 'дела')

// Задание 5: Сложение чисел
// Напиши функцию addNumbers(a, b), которая принимает два числа и возвращает их сумму.

function addNumbers(a, b) {
    return console.log(a + b)
}
addNumbers(1, 2)

// Задание 7: Форматировка числа
// Напиши функцию formatPrice(price), которая принимает цену (число) и возвращает строку с форматом "X.XX"(например,15.5=>"15.50").

function formatPrice(price) {
    return console.log(price.toPrecision(4))
}
formatPrice(10)