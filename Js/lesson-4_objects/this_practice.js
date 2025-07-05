// 1 задание 
const person = {
    name: 'Alice',
    greet() {
        console.log('this.name:', this.name)
    }
}

person.greet()


// 2 задание
const dog = {
    name: 'Archi',
    age: 10,
    bark() {
        console.log(`${this.name} says woof`)
    },
}

const barkFunction = dog.bark

dog.bark()
barkFunction()


const counter = {
    count: 0,
    increment() {
        setInterval(() => {
           this.count++
           console.log(this.count) 
        }, 1000);
    }
}