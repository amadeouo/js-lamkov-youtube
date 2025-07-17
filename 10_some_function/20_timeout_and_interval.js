// Синтаксис (функция, время(в мс)) по умолчанию значение времени 0
setTimeout(() => {}, 2000)
setTimeout(function () {},)
const doSomething = () => {}
setTimeout(doSomething, 2000)

// 
setTimeout(() => {
    alert('Это уведомление отобразится после 2 ceк после загрузки страницы')
}, 2000)

const logMessage = (name, age) => {
    alert(`Привет, меня зовут ${name}, мне ${age}.`)
}
setTimeout(logMessage, 2000, 'Вася', 21) // можно указать след параметрами, параметры необходимые для вызова функции

// Преждевременная отмена кода
const logSms = () => {
    alert('Какое-то сообщение')
}

const timerId = setTimeout(logSms, 3000) // нужно сначала передать в const
clearTimeout(timerId)

// Регулярное выполнение кода
const intervalId = setInterval(() => {
    console.log('Привет')
}, 1000)

clearInterval(intervalId) // удаление интервала
setTimeout(() => { // удаляет интервал после 5 сек
    clearInterval(intervalId)
}, 5000)



// Особенности setInterval
// setInterval не ждет пока закроется окно, поэтому окна накладываются друг на друга
setInterval(() => {
    alert('Сообщение раз в 1 секунду')
}, 1000)

setTimeout(function logMessage() { // так не будет наслаиваться
    alert('Сообщение раз в 1 секунду')

    setTimeout(logMessage, 1000)
}, 1000)


// Особенности setTimeout с нулевой задрежкой
console.log('Сообщение 1') // выведется первым
setTimeout(() => { // выведется третьим
    console.log('Сообщение 2 с 0 задержкой')
})
console.log('Сообщение 2') // выведется вторым
