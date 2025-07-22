const buttonElement = document.querySelector('.button')
const buttonPressElement = document.querySelector('.button-press')
const buttonDblclickElement = document.querySelector('.button-dblclick')
const boxElement = document.querySelector('.box-4')

/* Движение мыши по элементу */
buttonElement.addEventListener('mousemove', () => {
    console.log('Движение мыши над элементо кнопки')
})


// Наведение

/* Навели на элемент */
buttonElement.addEventListener('mouseover', (event) => {
    console.log('Курсор навели на элемент кнопки')
    console.log(event.target) // Элемент на который стал курсор (в данном случае button)
    console.log(event.relatedTarget) // элемент с которого курсор ушел на button
})

/* Увели с элемента */
buttonElement.addEventListener('mouseout', (event) => {
    console.log('Курсор увели на элемент кнопки')
    console.log(event.target) // Элемент на который стал курсор (в данном случае button)
    console.log(event.relatedTarget) // элемент с которого курсор ушел на button
})

/* Навели на элемент или на его вложенный дочерний элемент */
buttonElement.addEventListener('mouseenter', (event) => {
    console.log('К')
})

/* Увели с элемента или с его вложенного дочернего элемента */
buttonElement.addEventListener('mouseleave', (event) => {
    console.log('Ку')
})




// Нажатие клавиши мыши

/* Нажатие без отпускания клавиши мыши */
buttonPressElement.addEventListener('mousedown', (event) => {
    console.log('1. нажатие клавиши без отпускания', event.target, event.currentTarget)
})

/* Отпускание клавиши мыши (если нажать в другом месте и навести на кнопку при отжатии)*/
buttonPressElement.addEventListener('mouseup', (event) => {
    console.log('2. отпускание клавиши мыши', event.target, event.currentTarget)
})

/* Клик */
buttonPressElement.addEventListener('click', (event) => {
    console.log('3. Клик', event.target, event.currentTarget)
})

/* Двойной клик */
buttonDblclickElement.addEventListener('dblclick', (event) => {
    console.log('4. Двойной клик', event.target, event.currentTarget)
})

/* Вызов контекстного меню (правая кнопка мыши) */
boxElement.addEventListener('contextmenu', (event) => {
    event.preventDefault() // отмена вызова контекстного меню
    console.log('Контекстное меню')
})

// Выше указанные события устаревшие

// Наиболее актуальны следующие
/**
 * pointermove
 * pointerdown
 * pointerup
 * pointerover
 * pointerout
 * pointerenter
 * pointerleave
 * pointercancel
 * gotpointercapture
 * lostpointercapture
 */

/* Для новых событий можно получить доп. значени */
boxElement.addEventListener('pointerdown', (event) => {
    console.log(event)
    console.log(event.pointerType) // => mouse
    console.log(event.pointerId) // => уник id
    console.log(event.isPrimary) // => уникальный ли
})
