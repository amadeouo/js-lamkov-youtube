class Student {
    planet = 'Земля' // добавляет свойства по дефолту
    country = 'Россия'
    region
    #city = null // делает свойство приватным

    constructor(name, age) { // имя метода записывается вот так
        this.name = name
        this.age = age

        this.#someSecretAction
    }

    set city(value) {
        const firstLetter = value[0].toUpperCase()
        const fromSecondLetter = value.slice(1).toLowerCase()

        this.#city = `${firstLetter}${fromSecondLetter}` // пишем _city для того чтобы показать что мы используем это в классе
    }

    get city() {
        return `г. ${this.#city}`
    }

    static logAge() { // можно использовать через имя самого класса, а не через объект созданный через класс
        console.log('Country: Russia') // нельзя при static обращаться через this
    }
    
    #someSecretAction() {}
}

const firstStudent = new Student('Вася', 25) // создание объекта по шаблону классов
const secondStudent = new Student('Петя', 18)

console.log('firstStudent:', firstStudent)
console.log('secondStudent:', secondStudent)

firstStudent.city = 'москва'

console.log(firstStudent.city) // => Москва
console.log(firstStudent._someSecretAction) // можно применять вне классов, но мы все равно не используем это
Student.logAge() // Country: Russia


// Наследование классов

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() { console.log('Ем...') }
    sleep() { console.log('Сплю...') }
}

const examplePerson = new Person('Василий', 30)

console.log('Имя:', examplePerson.name)
console.log('Возраст:', examplePerson.age)
examplePerson.eat()
examplePerson.sleep()

class Developer extends Person { // Ключевое слово extends - наследуюет Person
    writeCode() { console.log('Пишу код...') }

    sleep() { // Переопределяем старый sleep
        console.log('Не хочу спать, пойду еще попишу код...')
        this.writeCode()
    }
}

class JavaScriptDeveloper extends Developer {
    makeFrontend() { console.log('Пишу фронтенд...') } 

    eat() {
        super.eat() // выполнение наследуемого кода
        console.log('Смотрю ютуб...')
    }
}

const exampleDeveloper = new Developer()
console.log(exampleDeveloper.name)
console.log(exampleDeveloper.age)
exampleDeveloper.eat()
exampleDeveloper.sleep()


// Переопределяем конструктор для наследуемого класса
class Pers {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    eat() { console.log('Ем...') }
    sleep() { console.log('Сплю...') }
}

class Dev extends Pers {
    constructor(name, age, experience) {
        super(name, age)
        this.experience = experience
    }
}
const exampleDev = new Dev('Миша', 19, 0)
console.log(exampleDev.experience)