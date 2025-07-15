const boxElement = document.querySelector('.box')
console.log(boxElement.style)

/* Задание новых стилей */
boxElement.style.position = 'absolute'
boxElement.style.top = '40px'
boxElement.style.left = '80px'

/* Изменение уже имеющихся */
boxElement.style.width = '200px'
boxElement.style.borderWidth = '10px'
/* в таком случае мы перезаписываем свойства полностью, если перед = указать +, то все добавится */
boxElement.style.cssText += `
    position: absolute;
    top: 40px;
    left: 80px;
    widht: 80px;
    border-width: 10px;
`

/* Метод style не берет в учет, что находится в других файлах, только в написанно в самом файле */
/* Чтобы получить стили можно использовать getComputedStyle */
console.log(getComputedStyle(boxElement).width)
console.log(getComputedStyle(boxElement, '::after').textDecoration)

/* Взаимодействие с классами */
boxElement.className = ' red' // так можно, но не надо
boxElement.classList.add('red', 'big') // Добавить класс к уже имеющимся
boxElement.classList.remove('red', 'big') // Удалить класс
boxElement.classList.toggle('red') // Удаляет если есть, добавляет если нет (Переключалка)
boxElement.classList.contains('red') // Проверяет наличие

const hasError = true
boxElement.classList.toggle('red', hasError) // вторым параметром можно указать условие

/* Применение toggle */
const burgerButtonElement = document.querySelector('.burger-button')
const burgerState = { isActive: true, }
burgerButtonElement.classList.toggle('is-active', burgerState.isActive)

/* Управление CSS-переменными */
const boxElem = document.querySelector('.box')
boxElem.style.setProperty('--border-color', 'blue', /*'important'*/) // третьим аргументов укзаывается приоритет