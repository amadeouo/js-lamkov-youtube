const boxElement = document.querySelector('.box')
console.log(boxElement.textContent) // Текстовое содержимое

const firstParagraphElement = document.querySelector('.paragraph-1')
console.log(firstParagraphElement.textContent)

/* Чтение и изменение текстового содержимого */
firstParagraphElement.textContent = 'Обновленный первый параграф' // Изменение текста
firstParagraphElement.textContent += 'Обновленный первый параграф' // Добавление текста к уже имеюшимся

boxElement.textContent = 'Обновленный текст' // пропадут все параграфы

/* HTML содержимое */
console.log(boxElement.innerHTML) // Выведет в формате текста, но с HTML разметкой
console.log(firstParagraphElement.innerHTML) //  выведеет проссто содержимое

/* Добавить html содержимое (Не самый актуальный вариант)*/
boxElement.innerHTML += `
    Обновленный текст
    <p>Новый Параграф</p>
`
console.log(boxElement.innerHTML) // HTML содержимое
console.log(boxElement.outerHTML) // HTML содержимое включая сам элемент

/* Вставка элементов */
const newParagraphElement = document.createElement('p')
newParagraphElement.textContent = 'Четвертый параграф'
newParagraphElement.classList.add('paragraph-4')
boxElement.append(newParagraphElement) // добавление в конец
boxElement.prepend(newParagraphElement) // добавление в начало

boxElement.after(newParagraphElement) // добавление после элемента
boxElement.before(newParagraphElement) // добавление перед элементом

boxElement.replaceWith(newParagraphElement)

/* Особенности методов */
const firstBoxElement = document.querySelector('.box-1')
const secondBoxElement = document.querySelector('.box-2')
const thirdParagraphElement = document.querySelector('.paragraph-3')
const fourthParagraphElement = document.querySelector('.paragraph-4')
const fifthParagraphElement = document.querySelector('.paragraph-5')

const getNewParagraphElement = () => {
    const newPElement = document.createElement('p')

    newPElement.textContent = 'Новый параграф'

    return newPElement
}

const getNewArticle = () => {
    const newArticleElement = document.createElement('article')

    newArticleElement.textContent = `Новый элемент <article>`
    
    return newArticleElement
}


firstBoxElement.append( getNewParagraphElement(), getNewArticle() ) // вставляем элемент <p> в начало box-1
secondBoxElement.prepend( getNewParagraphElement(), getNewArticle() ) // вставляем элемент <p> в конец box-1
thirdParagraphElement.before( getNewParagraphElement(), getNewArticle() ) // вставляем элемент <p> перед paragraph-3
fourthParagraphElement.after( getNewParagraphElement(), getNewArticle() ) // вставляем элемент <p> после paragraph-4
fifthParagraphElement.replaceWith( getNewParagraphElement() ) // вставляем элемент <p> с заменой paragraph-5

/* Вставка html-разметки */
const newParagraphElementMarkup = `<p>Просто текст</p>`
firstBoxElement.insertAdjacentHTML('afterbegin', newParagraphElementMarkup) // аналог append
firstBoxElement.insertAdjacentHTML('beforeend', newParagraphElementMarkup) // аналог prepend
firstBoxElement.insertAdjacentHTML('beforebegin', newParagraphElementMarkup) // аналог before
firstBoxElement.insertAdjacentHTML('afterend', newParagraphElementMarkup) // аналог after

/* Удалить элемент */
firstBoxElement.remove()

/* Клонирование */
const firstBoxElementClone = firstBoxElement.cloneNode() // Поверхностное клонирование (не учитывает внутренности)
const firstBoxElementClonee = firstBoxElement.cloneNode(true) // Полное клонирование
firstBoxElement.after(firstBoxElementClone)
firstBoxElement.after(firstBoxElementClonee)

/* Перемещение элементов */
const firstBoxElementMove = document.querySelector('.box-1')
const thirdBoxElementMove = document.querySelector('.box-3')

firstBoxElement.after(thirdBoxElementMove)
