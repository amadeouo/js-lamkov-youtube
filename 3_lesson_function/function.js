// Функции
function logHello() {
    console.log('Привет');
    console.log('Пока');
}
logHello()




function sayHello() {
    const message = 'Привет'
    console.log(message);   
}
sayHello()
// console.log(`${message}, друг!`); - не сработает


const message = "Глобальный привет"

function consoleHello() {
    const message = 'Локальный привет'
    console.log(message);
    for (let i = 0; i < 3; i++) {
        const message = `Итерация цикла №${i}`
        console.log(message);
    }
}
consoleHello()
console.log(message);

// Область видимости переменной
// Переменные веденные в одной фигурной скобке (области видимости) будут применены только там
// Внутренняя область видимости реагирует на внешнюю область видимости, а внешняя не реагирует на внутреннюю
{
    const number = 1
    console.log(number);

    {
        const number = 2
        console.log(number);

        {
            const number = 3
            console.log(number);
        }
    }
}
// console.log(number); - не сработает




function logMessage(message, count) { // принимает те параметры, которые указаны
    for (let i = 0; i < count; i++) { // сколько раз применяется функция
        console.log(message);
    }
}
logMessage('Привет', 3) // передаются аргументы
logMessage('Пока', 2)


const messagee = 'Привет'

function logMessagee(messagee, count) { // параметр определяется через let
    messagee = `(((${messagee})))` // принимает значение из функции

    for (let i = 0; i < count; i++) { 
        console.log(messagee);
    }
}

logMessagee(messagee, 3)
console.log(messagee);


// в прошлом случае лучше использовать новую переменную
function logMessagees(messagee = 'Йоу', count = 1) { // можно через равно указать значение по умолчанию
    const messageFormatted = `(((${messagee})))` // создание новой переменной

    for (let i = 0; i < count; i++) { 
        console.log(messageFormatted);
    }
}
logMessagees(messagee, 3)
logMessagees(messagee)
logMessagees() // использовать только значения по умолчанию
logMessagees(undefined, 2) // использовать значение по умолчанию только для count


function sumFourNumbers(num1 = 100, num2 = 200, num3 = 300, num4 = 400) {
    const sum = num1 + num2 + num3 + num4
    console.log(`Сумма чисел равна: ${sum}`);
}

sumFourNumbers()
sumFourNumbers(300, 400, 100, 50)
sumFourNumbers(200, 400, 100)
sumFourNumbers(undefined, undefined, undefined, 100)

// Возврат значений

function sum(a, b) {
    return a + b

    console.log('Привет'); // не будет использоваться так как после return ничего не происходит
    console.log('Пока'); // не будет использоваться
}
const result = sum(100, 1)
console.log(result);


function getAgeType(age) {
    if (typeof age !== 'number') {
        return 'Возраст указан некорректно'
    }
    if (age < 1 || age > 125) {
        return 'Такого возраста не может быть'
    }
    if (age < 18) {
        return 'Несовершеннолетний'
    }
    return 'Взрослый'
}
console.log(getAgeType(100));
console.log(getAgeType(555));
console.log(getAgeType(17));


function getSecretName(name) {
    if (!name) return // добавляется для того, чтобы в случае отсутствии данных при вводе выводилось пустое значение
    return `Да мы же знакомы, ты ${name}, верно?`
}

console.log(getSecretName('Саша'));
console.log(getSecretName());
