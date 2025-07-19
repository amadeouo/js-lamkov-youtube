/**
 * Примеры событий:
 * click
 * scroll
 * keydown / keyup
 * mouseover / mouseout
 * и т.д.
 */

const logNumberOne = () => {
    console.log(1)
}


/* Обработка события через html атрибуты */
const logAllEvents = () => {
    console.log(
        Object
            .keys(window)
            .filter((key) => /^on/.test(key))
            .map((eventName) => eventName.slice(2))
    )
}
logAllEvents() // все события

const logMessage = () => {
    console.log('Произошел клик')
}


/* Обработка события через свойство DOM элемента */
const buttonElement = document.querySelector('button')
buttonElement.onclick = () => console.log('Произошел клик')

const buttonLogMessage = () => {
    console.log('Произошел клик')
}

buttonElement.onclick = buttonLogMessage


/* Обработка события (наиболее актуальный)*/
buttonElement.addEventListener('click', () => console.log(1)) // Можно передавать как и фукнции
buttonElement.addEventListener('click', logNumberOne) // Так и ссылку на функцию

/* Удаление события */
const firstButtonElement = document.querySelector('.button-1')
const secondButtonElement = document.querySelector('.button-2')

secondButtonElement.addEventListener('click', () => {
    firstButtonElement.removeEventListener('click', logNumberOne)
})

/* Объект события */
const eventButton = document.querySelector('.button')
eventButton.addEventListener('click', (event) => {
    console.log(event)
})


/* Всплытие и погружение */

/* Всплытие (bubbling)*/
const firstBoxElement = document.querySelector('.box-1')
const secondBoxElement = document.querySelector('.box-2')
const thirdBoxElement = document.querySelector('.box-3')

firstBoxElement.addEventListener('click', (event) => {
    console.log('Клик по box-1', event.target)
})

secondBoxElement.addEventListener('click', (event) => {
    console.log('Клик по box-2', event.target)
})

thirdBoxElement.addEventListener('click', (event) => {
    console.log('Клик по box-3', event.target)
})

/**
 * event.target - целевой элемент
 * 
 * При нажатии на box-3:
 * Сначала срабатывает событие на box-3, потом на box-2, потом на box-1. event.target: box-3, currentTarget: в зависимости от box
 * 
 * При нажатии на box-2:
 * Сначала срабатывает событие на box-2, потом на box-1. event.target: box-2, currentTarget: в зависимости от box
 * 
 * При нажатии на box-1:
 * Сначала срабатывает box-1. event.target: box-1, currentTarget: в зависимости от box
 */


/* Отмена всплытия */
thirdBoxElement.addEventListener('click', (event) => {
    console.log('Клик по box-3')
    event.stopPropagation()
})

thirdBoxElement.addEventListener('click', (event) => {
    console.log('Еще один клик по box-3')
})

thirdBoxElement.addEventListener('click', (event) => {
    console.log('И еще один клик по box-3')
})

/* Жесткая отмена события (отменяет всех остальных обработчиков на текущем элементе) */
thirdBoxElement.addEventListener('click', (event) => {
    console.log('Клик по box-3')
    event.stopImmediatePropagation()
})

/* Погружение (capturing) */
firstButtonElement.addEventListener('click', () => {
    console.log('Клик по box-1')
})

secondBoxElement.addEventListener('click', () => {
    console.log('Клик по box-2')
    event.stopPropagation()
}, true)

thirdBoxElement.addEventListener('click', () => {
    console.log('Клик по box-3')
})

/**
 * В данном случае вывод в консоли будет таким:
 * Клик по box-2
 * Клик по box-3
 * Клик по box-1
 * 
 * Если добавить к второму event.stopPropagation(), то если нажать на третий выведет следующее:
 * Клик по box-2
 */