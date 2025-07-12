// const wait = (ms, callback) => {
//     const now = new Date().getTime()
    
//     while (new Date().getTime() < now + ms) {
//         /* Ничего не делаем */
//     }

//     callback()
// }

const wait = (ms, callback) => {
    setTimeout(callback, ms)
}

console.log(1)
wait(5000, ()=> console.log(2))
console.log(3)


// eventLoop

// Синхронный код, выполняющийся сразу
console.log('Начало программы')

// Асинхронная операция с использованием setTimeout
setTimeout (() => {
    console.log('Асинхронная задача выполнена')
}, 2000)

// Синхронный код, выполняющийся сразу
console.log('Конец программы')



// callback функции
// const makeRequest = (url, onSuccess) => {} 
// const sellerId = 154
makeRequest(`/api/sellers/${sellerId}`, (seller) => { // все это называется callback hell (ад колбеков)
    const firstProductId = seller.productIds[0]
    
    makeRequest(`/api/products/${firstProductId}`, (product) => {
        const firstRewiewId = product.reviewsIds[0]
        
        makeRequest(`/api/reviews/${firstRewiewId}`, (review) => {
            const authorName = review.author.name
        })
    })
})


/**
 *  Promise - специальный объект-надстройка
 * для работы с асинхронным кодом
*/

/**
 * Promise - имеет 3 состояния:
 *  pending - ожидание, исходное состояние
 *  fulfilled - выполенно успешно, получен результат
 *  rejected - выполнено с ошибкой
*/

/**
 * Основные методы Promise:
 * then() - обрабатывает fulfilled состояние
 * catch() - обрабатывает rejected состояние
*/

const promise = new Promise((fulfill, reject) => {
    console.log('Начало, состояние pending...')

    setTimeout(() => {
        if (Math.random() > 0.5) {
            fulfill('Ура, состояние fulfilled')
        } else {
            reject('Увы, состояние rejected')
        }
    }, 3000)
})

promise
    .then(
        (successData) => {
            console.log('Успех! Получены данные:', successData)
        },
        (errorData) => {
            console.log('Ошибка. Получены данные:', errorData)
        }
    )

    // вместо .catch(), можно добавить еще один аргумент в then
    // .catch((errorData) => {
    //     console.log('Ошибка. Получены данные:', errorData)
    // })
    .finally(() => {
        console.log('Код, выполняющийся в самом конце, независимо от результата')
    })



const makeRequest = (url, onSuccess) => {
    return new Promise((fulfill) => {
        fulfill('Ура, состояние fulfilled')
    })
} 
const sellerId = 154
makeRequest(`/api/sellers/${sellerId}`)
    .then((seller) => {
        const firstProductId = seller.productIds[9]

        return makeRequest(`/api/products/${firstProductId}`)
    })
    .then((product) => {
        const firstRewiewId = product.reviewsIds[0]
        
        return makeRequest(`/api/reviews/${firstRewiewId}`)
    })
    .then((review) => {
        const authorName = review.author.name
    })
    .catch((error) => {
        console.log(error)
    })

// Ключевое слово async для ассинхронных функций
// const getSomething() = async () {}
async function getSomething() {
    return 'Привет'
}

getSomething()
    .then((something) => {
        console.log(something)
    })

async function getSomething() {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill('Привет')
        }, 3000)
    })
}

console.log('Начало')

const something = await getSomething() // чтобы это срабатывало нужно указывать type="module"
console.log(something) // выдает внутрянку промиса

console.log('Конец')



// Перепишем на async await
const makeRequestt = async (url, onSuccess) => {
    return new Promise((fulfill) => {
        fulfill('Ура, состояние fulfilled')
    })
} 
const sellerIds = 154
makeRequestt(`/api/sellers/${sellerIds}`)


try {
    const seller = await makeRequestt(`/api/products/${sellerIds}`)
    const firstProductId = seller.productIds[0]

    const product = await makeRequestt(`/api/products/${firstProductId}`)
    const firstReviewId = seller.reviewIds[0]

    const review = await makeRequestt(`/api/products/${firstReviewId}`)
    const authorName = seller.author.name
} catch (error) {
    console.log(error)
}