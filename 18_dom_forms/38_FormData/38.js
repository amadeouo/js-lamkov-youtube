const formElement = document.querySelector('form')

/* Как сохранять данные с формы (как вариант)*/
formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = {}

    for (const element of formElement.elements) { //
        if (!element.name) {
            continue
        }

        if (element.type === 'checkbox') {
            formData[element.name] = element.checked
            continue
        }

        if (element.type === 'radio' && !element.checked) {
            continue
        }

        formData[element.name] = element.value // берем имя переменной и запихиваем в него значение и все вместе отправляем в объект
    }
    console.log(formData)
})

/* Лучше делать вот так */
formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)

    /* Методы */
    formData.append('example', 'bla-bla-bla') // вставляет в вывод еще одно значение
    console.log(formData.get('example')) // принимает имя ключа и выводит значение по нему
    console.log(formData.has('example')) // в boolean выводит наличие
    formData.append('example') // удаляет значение


    /* можно либо так */
    // formData.forEach((value, name) => {
    //     console.log(`${name}: ${value}`)
    // })

    /* либо так (легче так) */
    console.log( Object.fromEntries(formData) ) 
})
