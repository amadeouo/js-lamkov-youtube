console.log('this глобальный', this) // в окне для разработчиков в браузере показывает большой список для расширений

const user = {
    name: 'Александр',
    age: 28,
    // logThis: function() { // this ссылается на user
    //     console.log('this в теле метода объекта user:', this)
    // },

    // Можно использовать такое:
    logThis() {
        console.log('this в теле метода объекта user:', this)
    },
    logThose: () => {
        console.log('this в стрелочной функции', this) // ссылается на глобальную window
    }
}


user.logThis()

const user1 = { name: 'Михаил' }
const user2 = { name: 'Александр' }

const logInfo = () => {
    console.log('this:', this)
    console.log('this.name', this.name)
}

user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()


// Задача объект-калькулятор
const calculator = {
    read() {
        this.a = Number(prompt('Введите первое число:', 0))
        this.b = Number(prompt('Введите второе число:', 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}

calculator.read()
console.log('calculator', calculator)
console.log('Сумма:', calculator.sum())
console.log('Произведение:', calculator.mul())

// Задача 2 Цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log('Текущая ступенька', this.step )
        return this
    }
}

console.log('Результат вывода ladder.up():', ladder.up()) // Без return this результатом будет undefined, с return this будет возвращаться переменная 

ladder.up().up().down().showStep().down().showStep()