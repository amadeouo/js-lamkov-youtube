class FormsValidation {
    selectors = { // выносим переменные в объект для компонизации кода
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]',
    }

    errorMessages = {
        valueMissing: () => 'Пожалуйста, заполните это поле', 
        patternMismatch: ({ title }) => title || 'Данные не соответствуют формату', // указываем title, имеется ввиду что из приходящего target будет применяться title (target.title) и выводится title, если он есть, а если нет, то вывыдится значение в кавычках
        tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов - ${minLength}`, // указываем minLength именно в таком формате (в html писали minlength) а потом через бэктики выводим дальше
        tooLong: ({ maxLength }) => `Слишком длинное значение, ограничение символов - ${maxLength}`, // тоже самео что и выше
    }

    constructor() {
        this.bindEvents()
    }
    
    /* Управление ошибками */
    manageErrors(fieldControlElement, errorMessages) { // получаем на элемент и массив с ошибками
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors) // ищем по родительскому элементу атрибут data-js-form-field-errors и получаем доступ к span
        
        fieldErrorsElement.innerHTML = errorMessages // т.к. ошибок может быть много, поэтому мы используем к массиву map (заменяем каждую ошибку на текст, который будем вставлять)
            .map((message) => `<span class="field__error">${message}</span>`)
            .join('') // соединяем все ошибки из массива в один элемент
    }

    /* Валидация  */
    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity // выводит объект с состояниями ошибок
        const errorMessages = [] // объект, в который мы вставляем ошибки, которые возникли

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => { // Делаем map из объекта errorMessages и тогда мы можем брать ключи в errorType и значения через getErrorMessage (название переменных мы выбираем самостоятельно)
            if (errors[errorType]) { // проверяем есть ли внутри валидации ошибка с таким названием. Тут это работает, потому что в паре ключ-значения указано в формате текста и формально применяется errors['valueMissing'] например, поэтому обязательно указываем в errorMessages объекте такие же названия
                errorMessages.push(getErrorMessage(fieldControlElement)) // вставляем ошибки в созданный выше массив
            }
        })

        this.manageErrors(fieldControlElement, errorMessages)
        
        const isValid = errorMessages.length === 0

        /* Даем пользователям скринридера читать false */
        fieldControlElement.ariaInvalid = !isValid // добавляем новый атрибут, в котором указываем что количество ошибок больше 0
        
        return isValid
        
    }

    /* Смена фокуса при вводе */
    onBlur(event) {
        const { target } = event // деструктуризацией вытаскиваем event.target для удобства чтения кода

        const isFormField = target.closest(this.selectors.form) // Проверка на то что выбранный элемент находится внутри form
        const isRequired = target.required // Проверка что поле, является обязательным

        if (isFormField && isRequired) { // если все условия соблюдены, то применяем функцию валидации
            this.validateField(target) 
        }
    }
    /* Событие change для того, при изменении сразу менялось */
    onChange(event) {
        const { target } = event
        const isRequired = event.target.required // условие
        const isToggleType = ['radio', 'checkbox'].includes(event.target.type) // условие
        
        if (isToggleType && isRequired) {
            this.validateField(event.target)
        }
    }
    /* Событие отправки */
    onSubmit(event) {
        const isFormElement = event.target.matches(this.selectors.form) // выбираем условие что выбранные элементы находятся в форме
        if (!isFormElement) { // завершаем функцию, если это не форма
            return
        }

        const requiredControlElements = [...event.target.elements] // применяем спред оператор, потому что на выводе тут получаем 
            .filter(({ required }) => required) // дестректуризацией вытаскиваем из event и проверяем наличие required
        let isFormValid = true
        let firstInvalidFieldControl = null
        
        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false

                if (!firstInvalidFieldControl) {
                    firstInvalidFieldControl = element
                }
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }
    
    bindEvents() {
        document.addEventListener('blur', (event) => { // если фокус ушел с кнопки, то проверяем функцией условия выполнения
            this.onBlur(event)
        }, { capture: true }) // погружение элемента 
        document.addEventListener('change', (event) => {
            this.onChange(event)
        })
        document.addEventListener('submit', (event) => {
            this.onSubmit(event)
        })
        
    }
}

new FormsValidation()

// errorMessages = {
//         valueMissing: 'Пожалуйста, заполните это поле',
//         patternMissmatch: 'Данные не соответствуют формату',
//         tooShort: 'Слишком короткое значени',
//         tooLong: 'Слишком длинное значение',
//     }
// console.log(Object.entries(errorMessages))