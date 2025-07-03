// Function Declaration - стандартная запись функции, при которой ее можно использовать до ее написания, а также существует возможность ее перезаписать

console.log(sum(2, 3)); // можно применять до ее написания

function sum(a, b) {
    return a - b
}

// var тоже можно использовать до того как ее прописал

logMessage() // при обработке кода js собирает все функции, а потом закидывает их на верх и используется только последняя функция

function logMessage() {
    console.log('Привет');
}
function logMessage() {
    console.log('Ну ладно');
}

function logAll() {
    console.log(arguments); // arguments - ключевое слово, при котором собираются в консоли все аргументы, введенные для дальнейшей обработки
}
logAll('Привет', 555, false)

// Function Expression - записывание функции как функциональное выражение
// Такую функцию нельзя переопределить
// Нельзя использовать до ее применения
const logHelloWorld = function() {
    console.log('Привет');
}

/* нельзя переопределить
const logHelloWorld = function() { 
     console.log('Привет');
}
*/
logHelloWorld()

// но можно переопределить если задано через переменную let
let logHelloWordle = function() {
    console.log('Hello');
}
logHelloWordle = function() {
    console.log('Bye');
}
logHelloWordle()

// Arrow Function (стрелочная функция)
// не имеет доступа к arguments
// нет контекста this покажет на родительскую область видимости
const logHi = () => {
    console.log('Привет');
}
logHi() 

const logSum = (a, b) => {
    console.log(a + b);
}
logSum(1, 2)
// можно записать в одну строку
const logSumm = (a, b) => a + b
console.log(logSumm(1, 3));


// Отображение функции
function fn1() {
    return 'Я функция fn1'
}
function fn2() {
    return 'Я функция fn2'
}
function fn3() {
    return 'Я функция fn3'
}
console.log(fn1);
console.log(fn2);
console.log(fn3);

const fn4 = () => {
    return 'Я функция fn4'
}
const fn5 = fn4
console.log(fn5());

//Функция callback - функция примененная внутри другой
const logMessag = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Привет');
    actionAfter()
}
const fn= () => console.log('before');
const fn0 = () => console.log('after');

logMessag(fn, fn0)
// logMessag(console.log('before'), console.log('after')) - не сработает, в качестве аргументов можно брать только функции


// Возвращение результата другой функции

const validate = (hasAccess) => {
    return hasAccess // можно так
        ? () => console.log('Доступ разрешен') 
        : () => console.log('Доступ запрещен');

    if (hasAccess) { // или так
        return () => console.log('Доступ разрешен');
    } 
    return () => console.log('Доступ запрещен');
}

const logMess = validate(false)
logMess()


// Как называть функции

/*
    * Глаголы префиксы для функций:
    get - получить какое-то значение
    set - установить какое-то значение
    create - создать какую-то сущность
    update - обновить какую-то сущность
    delete - удалить какую-то сущность
    show - показать что-то
    hide - скрыть что-то
    search - найти что-то
    calc - вычислить что-то
    check - проверить что-то
*/

// Примеры

const getPi = () => 3.14
const getWeather = (weather) => {}
const createUser = (user) => {}
const updateUser = (id) => {}
const deleteUser = (id) => {}
const showMenu = () => {}
const hideMenu = () => {}
const searchProducts = () => {}
const calcSum = () => {}
const checkAge = (age) => {}


// функция должна выполнять одно действие