const { jsx } = require("react/jsx-runtime")

try {
    // const names = ['Alexander', 'Mikhail', 'Vasiliy']
    const names = undefined
    
    names.forEach((name) => {
        console.log('Name:', name)
    })

    console.log('Это сообщение не выведется')
} catch (error) {
    console.log('Возникла ошибка:', error)
}



// Синтаксические ошибки сломают полностью код
// console.log('Начало кода')
// try {
//     ~!@eadwda`da`
// } catch (error) {
//     console.log(error)
// }

// try catch не сможет словить ошибку ассинхронного кода в таком случае

// Надо вот так

setTimeout(() => {
    try {
        const names = undefined

        names.forEach((name) => {
            console.log('Имя:', name)
        })
    } catch (error) {
        console.log('Возникла ошибка:', error)
        console.log('name:', error.name) // имя ошибки
        console.log('message:', error.message) // сообщение с пояснением ошибки
        console.log('stack:', error.stack) // полная информация об ошибки
    }  
}, 3000)


try {
    /**
     *  Код с ошибкой
     * (висячая запятая в конце значения свойства "age") 
     */
    const userJSON = `{
        "name": "Alexander",
        "age": 28,
    }`
    const user = JSON.parse(userJSON)
} catch (eror) {
    console.log('Возникла ошибка:', error)
}



try {
    const userJSON = `{
        "age": 28
    }`
    
    const user = JSON.parse(userJSON)
    const { name, age } = user

    if (!name) {
        const errorMessage = 'Имя не заполнено'
        // throw 'Имя не заполнено!' // пробрасывать ошибку(так не делают обычно)
        throw new Error(errorMessage) // преобразование по классу
        // throw new TypeError(errorMessage)
        // throw new SyntaxError(errorMessage)
        // throw new RangeError(errorMessage)
    }

    console.log(`
        Привет, ${name}!
        Твой возраст - ${age}, верно?    
    `)
} catch (error) {
    console.log('Возникла ошибка:', error)
}

