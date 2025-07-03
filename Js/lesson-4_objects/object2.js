const obj1 = { age: 10 }
const obj2 = { age: 10 }

console.log( obj1 === obj2 ) // False
console.log( obj1 == obj2 ) // False


const obj3 = { name: 'Александр' }
const obj4 = obj3

console.log( obj3 === obj4 ) // True


obj_1 = {
    name: 'Александр',
    age: 29,
}

obj_2 = {
    name: 'Александр',
    age: 29,
}

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)

//     if (keys1.length !== keys2.length) {
//         return false
//     }
    
//     for (const key in object1) {
//         if (object1[key] !== object2[key]) {
//             return false
//         }
//     }
    
//     return true
// }


// console.log('Равны ли obj1 и obj2:', areObjectsEqual(obj1, obj2))


// Улучшим вариант проверки
const areObjectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }
    
    for (const key in object1) {
        const value1 = object1[key]
        const value2 = object2[key]

        const areValuesObject = typeof object1 === 'object' && typeof object2 === 'object'

        if (areValuesObject) {
            return areObjectsEqual(value1, value2)
        }

        if (object1[key] !== object2[key]) {
            return false
        }
    }
    
    return true
}

// Копирование объекта
const obj__1 = { name: 'Александр' }

// 1 вариант
// const obj__2 = {}
// for (const key in obj1__1 ) {
//     obj__2[key] = obj__1[key]
// }

// 2 вариант
// const obj__2 = Object.assign({}, obj__1)

// 3 вариант
const obj__2 = { ...obj__1} 


// Объединение объекта (Если свойства одинаковые, то присоединяется свойство из последнего объекта)
const object_one = { name: 'Александр' }
const object_two = { name: 'Михаил', age: 20 }

// 1 вариант
const object_user1 = Object.assign({}, object_one, object_two)
console.log(object_user1)

// 2 вариант 
const object_user2 = { ...object_one, ...object_two}
console.log(object_user2)



// опциональная цепочка
const users = {
    name: 'Александр',
    age: 28,
    address: {
        city: 'Москва',
        zipcode: 123456,
    },
}

console.log(users.address.city) // Если address не будет существовать, то произойдет ошибка
console.log(users.address?.city) // Опциональный оператор, используется чтобы не было ошибки

const guest4 = {
    name: 'Василий',
    age: 30,
    orderInfo: {
        roomtype: 2,
        stayDates: {
            from: '14.04.2024',
            to: '21.04.2024',
        }
    }
}

const guest2 = {
    name: 'Екатерина',
    age: 25,
}

const logGuestInfo = (guest) => {

    // Можно сократить
    // const checkoutDate = guest.orderInfo && guest.orderInfo.stayDates && guest.orderInfo.stayDates.to
    // ? guest.orderInfo.stayDates.to
    // : null

    console.log(`
        Имя: ${guest.name}
        Возраст: ${guest.age}
        Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'}`) // Альтернативная запись той что закомментирована выше
}

// Деструктуризация объекта

const useer = {
    name: 'Александр',
    age: 28,
    isDeveloper: true,
}

// const nameee = useer.name
// const age = useer.age
// const isDeveloper = useer.isDeveloper

const { name, agee, isDeveloper } = user // запись


// Деструктуризация в функции

const logAddress = (address) => {
    const { city, street, houseNumber, apartmentNumber } = address
    console.log(`
        Адрес:
        г. ${city}, ул. ${street},
        д. ${houseNumber}, кв. ${apartmentNumber}
    `)
}

logAddress({
    city: 'Москва',
    street: 'Пушкина',
    houseNumber: 21,
    apartmentNumber: 35,
})

// Деструктуризация с переименованием
const userr = {
    name: 'Александр',
    age: 20,
}

const admin = {
    name: 'Boss',
}

const { name: userName } = user
const { name: adminName } = user

// Значение по умолчанию для деструктуризации
const { age = 'не указан' } = userr


// Остаточные или rest-параметры
const logUser = (user) => {
    const { name, age, city, ...otherInfo } = user // в otherInfo закидывается объект с остаточными свойствами

    console.log(`
        Имя: ${name}
        Возраст: ${age}
        Город: ${city}
    `)
}

logUser({
    name: 'Alexander',
    age: 28,
    city: 'Moscow',
    company: 'VK',
    jobPost: 'Frontend-engineer',
})
