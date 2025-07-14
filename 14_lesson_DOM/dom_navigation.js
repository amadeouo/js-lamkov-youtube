console.log(document)

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

console.log(document.body) // выведет null, если script подключен в head
// чтобы не было ошибки выше можно к script в head добавить defer

console.log('Элемент <body>:', document.body)

console.log('Родительский элемент над body:', document.body.parentElement)
console.log('Соседний элемент перед body:', document.body.previousElementSibling)
console.log('Соседний элемент после body:', document.body.nextElementSibling)
console.log('Дочерние элементы body:', document.body.children) // Выдает HTML коллекцию

/* Пример работы с HTMLCollection */
const bodyChildren = document.body.children
console.log(bodyChildren)
/*  Создание нового элемента <button> */
const newButtonElement = document.createElement('button')
/* Добавление нового элемента <button> в <body> в конец */
document.body.appendChild(newButtonElement)
console.log(bodyChildren)

/* с HTMLCollection нельзя работать через forEach и тд, но можно превратить сначала в массив, а потом уже работать */
// bodyChildren.forEach(element => { /* Выведет ошибку */
//     console.log('Дочений элемент body:', element)
// });

Array.from(bodyChildren).forEach(element => {
    console.log('Дочений элемент body:', element)
});

/* Можно обратиться к индексу как у массива */
const divElement = document.body.children[0]
console.log('Элемент div:', divElement)

/* Получение первого и последнего дочернего элемента */
console.log('Первый дочерний элемент внутри div', divElement.firstElementChild)
console.log('Последний дочерний элемент внутри div', divElement.lastElementChild)

/* Получение родительского элемента */
/* Особо разницы нет, будет только в том случае, если обрашаться к html */
console.log(divElement.parentElement)
console.log(divElement.parentNode)

/* Не одно и то же */
console.log(divElement.nextElementSibling) // => null
console.log(divElement.nextSibling) // => текстовый узел

console.log(divElement.firstChild) // выдает узлы
console.log(divElement.lastChild) // выдает узлы

/* Различия между children и childNodes */
console.log(divElement.children) // возвращает HTMLCollection
console.log(divElement.childNodes) // возращает NodeList