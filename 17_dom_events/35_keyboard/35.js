/**
 * События клавиатуры
 * keydown - нажатие на клавишу
 * keyup - отпускание клавиши
 */

document.addEventListener('keydown', (event) => {
    console.log(event)
})

document.addEventListener('keyup', (event) => {
    console.log('event',event)
    console.log(event.code) // лучше обращаться через свойство code, чем через q
})

document.addEventListener('keydown', (event) => {
    const { code, metaKey } = event

    /**
     * Обработка нажатия на 'PageDown'
     */

    if (
        code === 'ArrowDown' && metaKey || // Macos
        code === 'Numpad3' // Windows
    ) {
        event.preventDefault()
        console.log('Нажатие на PageDown отменено!')
    }

    /**
     * Обработка нажатия на 'Tab'
     */

    if (code === 'Tab') {
        event.preventDefault()
        console.log('Нажатие на Tab отменено')
    }
})

document.addEventListener('keydown', event => {
    if (!event.target.matches('input')) {
        return
    }

    const anyDigitRegExp = /\d/
    /**
     * /\d/ - регулярное выражение (буквально означает - все цифры)
     */
    if (anyDigitRegExp.test(event.key)) {
        event.preventDefault()
        console.log('Отменен ввод цифры', event.key)
    }
})

/* Событие ввода */
const inputElement = document.querySelector('input')
const nameOutputElement = document.querySelector('.name-output')
const errorMessageElement = document.querySelector('#error-message')

//* Для ввода так лучше не делать */
// inputElement.addEventListener('keydown', (event) => {
//     console.debug('Нажата клавиша', event.key)

//     nameOutputElement.textContent = inputElement.value
// })

/* Лучше делать так */
inputElement.addEventListener('input', (event) => {
    nameOutputElement.textContent = inputElement.value
})

/* Изменение значения поля ввода после потери состояния фокуса */
inputElement.addEventListener('change', (event) => {
    const isInvalid = inputElement.value.length < 5

    inputElement.classList.toggle('is-invalid', isInvalid)
    errorMessageElement.textContent = isInvalid
        ? 'Минимальная длина - 5 символов'
        : ''
})

/* Вырезать, скопировать, вставить */
document.addEventListener('cut', (event) => { // вырезать
    console.log(event)
    console.log(event.clipboardData.getData('text/plain')) // сработает нормально только у paste
    
    navigator.clipboard.readText().then((clipboardText) => { // лучше это, чем код выше
        console.log(clipboardText)
    })
})

document.addEventListener('copy', (event) => { // копировать 
    console.log(event)
    console.log(event.clipboardData.getData('text/plain')) // сработает нормально только у paste

    navigator.clipboard.readText().then((clipboardText) => { // лучше это, чем код выше
        console.log(clipboardText)
    })
})

document.addEventListener('paste', (event) => { // вставить
    console.log(event)
    console.log(event.clipboardData.getData('text/plain'))
})

