const arrayy = ['Привет', 'Как дела'] // Как правило хранят данные одного типа

const arr = [1, 'Нормально', true] // Но так тоже можно

console.log(arr) // будет выглядеть как объект
console.log(typeof arr) // => object
console.log(arr[1]) // => Нормально
console.log(arr[999]) // => undefined
console.log(arr[-1]) // => undefined


const array = [
    'Привет',
    1,
    true,
    { name: 'Alexander' },
    () => console.log( 'haha' ),
    [true, true, false],
]

console.log( array[3].name ) // => Alexander
array[4]() // будет вызвана функция
console.log(array[5][0]) // => true

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matrix[1][0])

array[0] = 'Прив' // можно менять значения
console.log(array[0]) // => Прив

matrix[3] = [10, 11, 12]
console.log(matrix) // добавится новая стока


matrix[100] = 'Много строк' // добавляет строки между последним имеющимся значением и добавленным
console.log(matrix) // добавятся пустые строки

console.log(arr[arr.length - 1]) // получить последний элемент
console.log(arr.at(-1)) // самая актуальная версия


// Методы
const letters = ['А', 'Б', 'В', 'Г']
letters.push('Д') // добавить в конец массива еще один элемент
letters.unshift('0') // добавить в начало массива еще один элемент
letters.pop() // удаляет последний элемент массива 
letters.shift() // удаляет первый элемент массива 
console.log(letters.toString()) // приводит к строке, склеивая все элементы через запятую
console.log(letters.join(', ')) // делает то же самое что и toString, но дает возможность выбрать разделитель


// Копирование массивов

const arr1 = ['А', 'Б', 'В',]
// первый вариант копирования
// for (let i = 0; i<arr1.length; i++) {
//     arr2.push(arr1[i])
// }

const arr2 = [...arr1] // второй вариант
const arr3 = arr1.slice() // третий вариант

// объединение массивов
const arr4 = ['A', 'B']
const arr5 = ['C', 'D']

const mergedArr = [...arr4, ...arr5] // Первый вариант
const totalArr = arr4.concat(arr5) // второй вариант
console.log(mergedArr) // => [ 'A', 'B', 'C', 'D' ]
console.log(totalArr) // => [ 'A', 'B', 'C', 'D' ]


// Сравнение массивов
function isArray(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false
    }

    for (let i = 0; i > firstArray.length; i++) {
        // if (firstArray[i] !== secondArray[i]) {
        //     return false
        // }
        const value1 = firstArray[i]
        const value2 = secondArray[i]

        const areValuesArrays = Array.isArray(value1) && Array.isArray(value2)

        if (areValuesArrays) {
            if (!isArray(value1, value2)) {
                return false
            } else {
                continue
            }
        }

        const areValuesObjects = typeof value1 === 'object' && typeof value2 === 'object'
        
        if (value1 !== value2) {
            return false
        }
    }
    return true
}

console.log(isArray(mergedArr, totalArr))

