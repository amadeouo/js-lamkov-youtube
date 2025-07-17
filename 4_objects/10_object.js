const firstEmptyObject = {}

const user = {
    login: 'iamsuperhero',
    password: 'qwerty',
    'registration-date': '01.01.2024',
    "last-auth": '05.04.2024',

    age: 33,
    isAdult: true,
    job: null,
    kids: undefined,
    address: {
        city: 'Москва',
        zipCode: 555444,
    },
    sayhi: () => console.log('Привет'),
}

console.log(user.login);
console.log(user['registration-date']);

const user_1 = {}

user_1.name = 'Александр' // Добавление переменных в объект
user['is developer'] = true // Добавление переменных в объект


delete user.name // Удаление переменных в объекте
delete user['is developer'] // Удаление переменных в объекте

const name = 'Михаил'
const age = '20'

// const user_2 = {    Можно упросить до вида:
//     name: name,
//     age: age,
// }

const user_2 = {
    name,
    age,
}
console.log(user_2);


const propName = prompt('Свойство с каким именем добавить в объект?')
const propValue = prompt(`Какое значение записать в свойство ${propName}?`)



const obj = {
    [propName]: propValue, // обязательно нужно вставлять []
}

console.log('isDeveloper' in user) // false
console.log(user.isDeveloper !== undefined) // false

for (const key in user) {
    console.log(user[propName])
}


const nums = {
    2: 'Второй',
    1: 'Первый',
    3: 'Третий',
}

for (const num in nums) {
    console.log(nums[num])
}

