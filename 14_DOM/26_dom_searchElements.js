/* Получение элемента по айди */
const buttonElement = document.getElementById('myButton') // возвращает первый найденный
console.log(buttonElement)

const buttonElemente = document.getElementById('myButton123133') // будет null

/* Если переменная задана в camelCaseNotation и в дом дереве будет айди заданное таким образом, то можно обратиться к глобальной переменной */
console.log('Кнопка:', myButton)

/* Получение элемента по селектору */
const buttonElementSelector = document.querySelector('button')
const buttonElementById = document.querySelector('#myButton')
const buttonElementByClass = document.querySelector('.button')
console.log('Кнопка:', buttonElementSelector) // доступ к кнопке

/* Получение нескольких элементов */
const listItemElements = document.querySelectorAll('.item')
console.log(listItemElements)
listItemElements.forEach((element) => {
    console.log('Элемент списка', element)
})

/* Можно найти элементы в элементах */
const wrapperElement = document.querySelector('#wrapper')
console.log('wrapperElement:', wrapperElement)
const listElements = wrapperElement.querySelector('.list')
console.log('listElements:', listElements)
const listItemElementss = listElementss.querySelectorAll('.item')
console.log('listItemElementss', listItemElementss)

/* Нахождение ближайшего родительского элемента */
const thirdBoxElement = document.querySelector('.box-3')
const firstBoxElement = thirdBoxElement.closest('.box-1')
console.log('firstBoxElement:', firstBoxElement)

/* Перечисление нескольких селекторов */
const listItems = document.querySelectorAll(`.box-1, .box-2, .box-3`)
console.log(listItems)

/* Поиск по имени тега, css-классу, атрибуту name */
const formElements = [...document.getElementsByTagName('form')] // возвращает живые коллекции
const radioGroupElements = [...document.getElementsByClassName('radio-group')] // возвращает живую коллекцию
const inputElements = [...document.getElementsByName('specialization')] // возвращает живую коллекцию
/* Если сделать эти HTML-коллекции списком, то можно применить forEach */
formElements.forEach((element) => console.log(element))
radioGroupElements.forEach((element) => console.log(element))
inputElements.forEach((element) => console.log(element))

console.log(formElements)
console.log(radioGroupElements)
console.log(inputElements)

/* Как лучше называть */
const link = document.querySelector('a')
const list = document.querySelector('ul')
const listItem = document.querySelector('li')
const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')

/* Как лучше находить элементы */
/* Всем элементам с доступом в js задавать data-... */
const sliderElement = document.querySelector('[data-js-slider-slide]')
const sliderListElement = document.querySelector('[data-js-slider-list]')
const sliderSlideElement = document.querySelectorAll('[data-js-slider-slide]')