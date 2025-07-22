const loginInputElement = document.querySelector('#login')
const passwordInputElement = document.querySelector('#password')
const submitButtonElement = document.querySelector('button[type="submit"]')

/* focus */
loginInputElement.addEventListener('focus', () => {
    console.log('В фокусе: поле ввода логина')
})

passwordInputElement.addEventListener('focus', () => {
    console.log('В фокусе: поле ввода пароля')
})

submitButtonElement.addEventListener('focus', () => {
    console.log('В фокусе: кнопка входа')
})

/* blur */
loginInputElement.addEventListener('blur', () => {
    console.log('Фокус ушел с элемента логина')
})

passwordInputElement.addEventListener('blur', () => {
    console.log('Фокус ушел с элемента пароля')
})

submitButtonElement.addEventListener('blur', () => {
    console.log('Фокус ушел с элемента кнопки отправки')
})

/**
 * focus и blur не всплываются наверх (document не делают) 
 * Для этого есть:
*/

/* focusin focusout */
document.addEventListener('focusin', (event) => {
    console.log(event)
})
document.addEventListener('focusout', (event) => {
    console.log(event)
})

/* Текущий фокусируемый элемент */
