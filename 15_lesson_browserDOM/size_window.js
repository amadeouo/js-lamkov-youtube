/* Ширина и высота вьюпорта (окна) */
const hmtlElement = document.documentElement
console.log(hmtlElement.clientWidth) // Ширина окна
console.log(hmtlElement.clientHeight) // Высота окна

console.log(window.innerWidth) // Ширина окна через window (Не учитывают скроллбар)
console.log(window.innerHeight) // Ширина окна через window (Не учитывает скроллбар)

console.log(hmtlElement.scrollWidth) // Ширина реальной страницы
console.log(hmtlElement.scrollHeight) // Высота реальной страницы


/* Наиболее точная высота страницы */
const bodyElement = document.body
const fullPageHeight = Math.max(
    hmtlElement.clientHeight, hmtlElement.scrollHeight, hmtlElement.offsetHeight,
    bodyElement.clientHeight, bodyElement.scrollHeight, bodyElement.offsetHeight,
)

console.log(fullPageHeight)

/* Координаты текущего скролла страницы */
console.log( window.scrollX, window.scrollY )
console.log( window.pageXOffset, window.pageYOffset ) // Устаревший способ

/* Программный скролл страницы или другого элемента */
document.documentElement.scroll({ top: 200, behavior: 'smooth' })
window.scroll({ top: 200, behavior: 'smooth' }) // так быстрее писать
// window.scrollTo({ top: 200, behavior: 'smooth' }) // так тоже можно, но прошлый вариант наиболее популярен
setTimeout(() => {
    window.scroll({
        top: 100,
        behavior: 'smooth',
    })
}, 2000)

window.scrollBy({ top: 200, behavior: 'smooth' }) // Скролл на определенное количество (отличие в том, что тут на сколько еще снизится

const reviewsSectionElement = document.querySelector('#reviews')
reviewsSectionElement.scrollIntoView({ behavior: 'smooth' }) // Скроллит до определенного элемента

/* Но лучше выводить это на таймер, потому что иногда страница не успевает прогружаться */
setTimeout(() => {
    reviewsSectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
}, 300)



