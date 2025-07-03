// Математические операторы

// Бинарные операторы (операторы которые применяются к двум числам слева и справа) (пишутся раздельно)
console.log(2 * 2);
console.log(10 - 1);
console.log(5 * 10);
console.log(100 / 25);

console.log(2 ** 10); // возведение в степень
console.log(13 % 5); // остаток от деления

// Унарные операторы (операторы, которые применяются к одному числу) (пишутся слитно)
console.log(-10);
console.log(+10);

// Унарный оператор может приводить строки к числам
console.log(typeof +'111'); // number
console.log(+true);
console.log(+false);
console.log(+'123');
console.log(+' ');
console.log(+'');
console.log(+null);
console.log(+undefined);

console.log('3' + '5'); // 35
console.log(+'3' + +'5'); // 8

// Приоритет операторов
const resulted = 1 + -2 - 3 * +'4' / 5 ** 2
/* 
    1 + -2 - 3 * 4 / 5 ** 2 сначала сработают унарные операторы для преобразования типа
    1 + -2 - 3 * 4 / 25 потом число возведется в степень
    1 + -2 - 12 / 25 умножение по правилам математики
    1 + -2 - -0.48 деление по правилам математики
    -1 - 0.48
    -1.48 последним применяется оператор присваивания переменной =
*/


// Присваивания значения дополнительным вариантов
let count = 1
count = count + 2 // одно и то же
count += 2 // одно и то же

count += 2  // count = count + 2
count -= 5 // count = count - 5
count *= 10 // count = count * 10
count /= 3 // count = count / 3

let messages = 'Привет'
messages += ', друг!'
messages += ' Как дела?'
console.log(messages);

// Оператор декремента и инкремента

let counter = 10
counter-- // - 1
counter-- // - 1
counter++ // + 1
console.log(counter);
// или можно
++counter
// но будет разница при записи в переменной
let newCount = ++counter // сначала к counter добавится один, а потом это значение присвоится newCount
console.log(counter); // 11
console.log(newCount); // 11

let newCounte = counter++ // сначала к newCount присвоилось значение counter, а потом значение counter поменялось
console.log(counter); // 11
console.log(newCount); // 10

// Операторы сравнения
console.log(5 > 3); // true
console.log(10 < 1); // false
console.log(2 >= 2); // true
console.log(3 <= 0); // false
console.log(5 == 5); // true равно ли
console.log(5 != 5); // false не равно ли

// чем дальше в системе unicode находится буква, тем больше значение
console.log('a' < 'b'); // true
console.log('ы' > 'f'); // true
console.log('JavaScript' > 'Java'); // true

// нестрогое сравнение
console.log(2 == '2'); // true
console.log('3' == 3); // true
console.log('3' != 3); // false
// строгое сравнение
console.log(2 === '2'); // false
console.log(2 !== '2'); // true