// const todoItemElements = document.querySelectorAll('.todo__item')

// todoItemElements.forEach((todoElement) => {
//     todoElement.addEventListener('click', () => {
//         todoElement.classList.add('is_completed')
//     })
// });

/* Делегирование событий */
const onTodoItemClick = (todoItemElement) => { // Функция добавления класса для указанного элемента
    todoItemElement.classList.add('is_completed')
}
// document.addEventListener('click', (event) => { // Функция удаления
//     const todoItemElem = event.target.closest('.todo__item')

//     if (todoItemElem) {
//         onTodoItemClick(todoItemElem)
//     }
// })


/* Тут будет лучше делагировать на родительский элемент */
const ulElement = document.querySelector('#firstTodo')
ulElement.addEventListener('click', (event) => {
    const todoItemElem = event.target.closest('.todo__item')
    
    if (todoItemElem) {
        onTodoItemClick(todoItemElem)
    }
})




const addTodoItem = () => { // Создаем функцию для создания новыых элементов
    const todoListElement = document.querySelector('.todo__list')
    const newTodoItemMarkup = `<li class="todo__item"><span>item..</span></li>`

    todoListElement.insertAdjacentHTML('beforeend', newTodoItemMarkup)
}

addTodoItem() // добавляем элементы после навешивания события 
addTodoItem() // добавляем элементы после навешивания события 
addTodoItem() // добавляем элементы после навешивания события 
 

/* Поведение браузера по умолчанию (Отмена действие браузера по умолчанию )*/
const linkElement = document.querySelector('a')
const formElement = document.querySelector('form')

linkElement.addEventListener('click', (event) => {
    event.preventDefault()
})

linkElement.addEventListener('submit', (event) => {
    event.preventDefault()
})

