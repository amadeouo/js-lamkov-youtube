const boxElement = document.querySelector('.box')

// const {
//     offsetWidth, offsetHeight,
//     clientLeft, clientTop,
//     clientWidth, clientHeight, 
//     scrollWidth, scrollHeight, 
//     scrollLeft, scrollTop,
// } = boxElement

/* Вывод размера элемента */
console.log(boxElement.offsetWidth) // Полная ширина
console.log(boxElement.offsetHeight) // Полная высота

/* Вывод размер рамки */
console.log(boxElement.clientLeft) // Ширина левой рамки или расстояние от левой границы элемента до внутренностей
console.log(boxElement.clientTop)  // Ширина верхней рамки или расстояние от верхней границы элемента до внутренностей

/* Вывод размера элемента без учета рамки и скролл бара */
console.log(boxElement.clientWidth) // Ширина без учёта рамки и скроллбара
console.log(boxElement.clientHeight) // Высота без учёта рамки и скроллбара

/* Вывод размера элемента с учетом прокручиваемой области */
console.log(boxElement.scrollWidth) // Ширина без учета рамки, включая прокручиваемую область
console.log(boxElement.scrollHeight) // Высота без учета рамки, включая прокручиваемую область

/* Плавная прокрутка содержимого элемента на 10px вправо и 50px вниз относительно нач. положения */
boxElement.scroll({
    top: 10,
    left: 50,
    behavior: 'smooth',
})
boxElement.scroll(10, 50) // прокрутка без плавности
/* Или же можно использовать сеттеры */
boxElement.screenLeft = 10
boxElement.scrollTop = 50


/* Вывод прокрутки содержимого элемента */
console.log(boxElement.scrollLeft) // Ширина невидимой уже прокрученной по горизонтали области 
console.log(boxElement.scrollTop) // Высота невидимой уже прокрученной по вертикали области

/* Координаты относительно окна */
const elemBox = document.querySelector('.box')
const boxElementRectParams = elemBox.getBoundingClientRect() // Получаем координаты элемента
console.log(boxElementRectParams) // выдаст объект с координатами
console.log(boxElementRectParams.x, boxElementRectParams.y) // координаты левого верхнего угла элемента относительно окна:

/* Коорд относительно всей страницы целиком */
console.log( // Координаты левого верхнего угла всей страницы
    boxElementRectParams.x + window.scrollX,
    boxElementRectParams.y + window.scrollY
)




