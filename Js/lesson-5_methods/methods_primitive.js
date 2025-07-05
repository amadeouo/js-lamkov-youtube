const price = 99.555
const roundedPrice = price.toFixed(0) // округление начиная после точки

console.log('Округленная цена', roundedPrice)


console.log(
    'Округление до 0 знаков после запятой:',
    price.toFixed()
)

console.log(
    'Округление до 1 знаков после запятой:',
    price.toFixed(1)
)

console.log(
    'Округление до 2 знаков после запятой:',
    price.toFixed(2)
)

console.log( 5..toFixed(2) ) // синтаксис для применения  toFixed для числа
console.log( (5.011).toFixed(2) )


const num = 100.055

console.log( num.toPrecision(4) ) // округление с первого знака

const numAsString = num.toString() // превращение числа в строку

console.log(Math) // в консоли браузера показывает все методы Math

// Самые актуальные методы Math
console.log( Math.random()) // случайное число в диапазоне от 0 до 1

console.log( Math.abs(-1) ) // модуль числа

console.log( Math.pow(2, 10)) // возведение в степень

console.log( Math.sqrt(16)) // Квадратный корень
console.log( Math.cbrt(125)) // Кубический корень

console.log( Math.min(1, 2, 3, -5, 10, 1111, 100)) // минимальное значение
console.log( Math.max(1, 2, 3, -5, 10, 1111, 100)) // максимальное значение

const nums = [1, 2, 3, -5, 10, 1111, 100]
console.log( Math.min(nums)) // выйдет NaN
console.log( Math.min(...nums)) // выйдет нужное

console.log( Math.round(3.49) ) // округляет до ближайшего целого
console.log( Math.floor(3.51) ) // округляет вниз до ближайшего целого
console.log( Math.ceil(3.51) ) // округляет вверх до ближайшего целого
console.log( Math.trunc(3.51) ) // округляет отрицательные вверх до целого, а положительные вниз


const numberAsString = '100px'
console.log( parseInt(numberAsString) ) // парсит именно число

const floatAsString = '100.5px'
console.log( parseFloat(floatAsString) ) // парсит число с плавающей точкой


const stingAsString = '  100.5px' // пробелы не мешают
const stingsAsString = '  a100.5px' // NaN - не сработает