/* Обращение к формам */
console.log(document.forms)
console.log(document.forms[0])
console.log(document.forms[1])
console.log(document.forms.regForm) // если указан id 
// console.log(document.forms.authForm) // если указан id 

const formElement = document.querySelector('#regForm')
let loginInputElement = formElement.login
const passwordInputElement = formElement.password

/* Элементы input, textarea и select внутри формы */
console.log(formElement.elements)


/* Можно обращаться по атрибуту name */
console.log(formElement.login)
console.log(formElement.password)
console.log(formElement.name)

/* Доступ к форме, к которой привязан DOM-элемент */
console.log(loginInputElement.form) // к какой форме относится поле ввода логина
console.log(passwordInputElement.form) // к какой форме относится поле ввода пароля
/* Если данные отдельно указываются в другом пункте (например город) и их тоже нужно отправить, то можно в атрибут select указать form="айди формы" */
console.log(document.querySelector('#city').form) // и получить форму, что и до этого

/* Доступ к классическому input и textarea */
loginInputElement = formElement.login
const aboutTextAreaElement = formElement.about

loginInputElement.value = 'Thedas'
aboutTextAreaElement.value = 'Лучший из лучших'

console.log(aboutTextAreaElement.value)


/* Управление элементами input type radio */
const genderRadios = formElement.gender
console.log(genderRadios)
console.log(genderRadios[0].checked) // выбран ли мужской пол
console.log(genderRadios[1].checked) // выбран ли женский пол
// всегда писать value в input

/* изменение радиокнопки */
genderRadios[0].checked = true
genderRadios.value = 'Мужской'

/* Управление checkbox */
const agreementCheckboxElement = formElement.agreement
console.log(agreementCheckboxElement.checked) // выдаст false или true


/* Управление select */
const citySelectElement = formElement.city
console.log(citySelectElement.options) // Все опции
console.log(citySelectElement.selectedIndex) // Индекс выбранной опции
console.log(citySelectElement.options[citySelectElement.selectedIndex].value) // текущее значение

citySelectElement.value = 'Москва' // поставит на значение
citySelectElement.value = 'Бла-бла-бла' // Будет пустое значени
citySelectElement.options[4].selected = true

/* Управление select multiple*/
const citySelectedElements = formElement.city
console.log(citySelectedElements.selectedOptions)

const selectValue = [...citySelectedElements.selectedOptions] // текущее значени multiple-селекта
    .map(({value}) => value)
    .join(',')

/* Или жже вот так */
const selValue = [...citySelectedElements.selectedOptions]
    .reduce((acc, { value }, index) => {
        const separator = index > 0 ? ',' : ''

        return `${acc}${separator}${value}`
    })

console.log(selectValue)