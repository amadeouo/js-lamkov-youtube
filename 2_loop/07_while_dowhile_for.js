// while

let countt = 0

while (countt < 10) {
    console.log(countt);
    countt++
}

// когда значение не подходит под рамки цикла, но нужно его провести один раз используем do while

// do {
//     console.log(countt);
//     count++
// } while (count < 10)

// for


console.log('Цикл сейчас начнется');
for (let i = 0; i < 4; i++) { // 1 - объявление переменной, 2 - условие, 3 - код выполнения
    console.log(i);
}
console.log('Цикл закончен');

// альтернативный вариант записи кода

console.log('Цикл сейчас начнется');
let j = 1
for (; j < 4;) {
    console.log(j);
    j++
}
console.log('Цикл закончен');


// область видимости переменных

for (let i = 0; i < 4; i++) {
    console.log(i); // переменная будет объявлена только в рамках цикла
    const mesdg = 'Привет' // переменная будет объявлена только в рамках цикла
}

let countes = 1

// Прерывание цикла
console.log('Начало цикла');
while (countes < 10) {
    console.log(countes);
    if (countes % 5 === 0) {
        console.log('Цикл прерван досрочно');
        break
    }
    countes ++
}
console.log('Конец цикла');

// Пропуск шага в цикле


console.log('Начало цикла');
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i);
}
console.log('Конец цикла');
