// Условия if else конструкция
const year = 2050
if (year === 2025) {
    console.log('Ура');
    console.log('Я учу джаваскрипт');
} else if (year === 2024) {
    console.log('Я все еще учу джаваскрипт');
}
 else {
    console.log('Я не переставал учить джаваскрипт');
}


// Можно еще так, если условие однострочным, но не рекомендуется
if (year === 2025) console.log('Ура');

// не надо так
let messag = null
if (year === 2024) {
    messag = 'Начинаю учиться'
} else {
    messag = 'Неизвестный год('
}
console.log(messag);

// вот так надо, ? - тернарный оператор
const messago = year === 2024 
    ? 'Начинаю учиться!'
    : 'Неизвестный год'

const messagp = year === 2025
    ? 'Начинаю учиться' // если равно 2025
    : year === 3000 
        ? 'нейросети победили' // если равно 3000
        : 'Неизвестный год' // если не равно 2025 и не равно 3000


// Логические операторы

// оператор или (тут логический оператор используется в случае, если есть true)
false || false // false
true || false // true
false || true // true
true || true // true


const ageee = 17
const withParent = true 
if (ageee > 17 || withParent) {
    console.log('Проходите');
} else {
    console.log('Несовершеннолетним вход закрыт');
}

// приводит данные к булевому типу, пока не дойдет до первого true и выведет true
const resulter = '' || false || null || undefined || 0 || 'Привет' || 'Пока'
console.log(resulter);
/*
    '' - false
    false - false
    null - false
    undefined - false
    0 - false
    'Привет' - true - он выводится
*/

// оператор и - && (если оба значения будет true, то выведет true)
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

const moneyInWallet = 5
const iceCreamPrice = 2
const isStoreOpen = true
if (iceCreamPrice < moneyInWallet && isStoreOpen) {
    console.log('Вот ваше мороженое');
} else {
    console.log('Магазин закрыт');
}

// приводит данные к булевому типу, а потом идет до тех пор пока не встретит false и его выводит
const resulti = 'Привет' && true && 5 && null && 10
console.log(resulti);

// age = 28 
const isYoung = age < 18 // лучше так не использовать а применять классический if
isYoung && console.log('Покажите паспорт');

//Оператор не - !
console.log(!true); // false
console.log(!false); // true
console.log(!''); // true
console.log(!'Привет'); // false
console.log(!0); // true
console.log(!111); // false

// два оператора !! превращают в булевой тип (можно использовать вместо Boolean)
console.log(!!0);
console.log(!!1); 


const nmae = 'Максим'
const agei = 20
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (name !== 'Максим') {
    console.log('Вы не максим, позовите максима');
} else if (agei < 16) {
    console.log('Еще рано думать о взрослой жизни (не правда, можно начать развиваться)');
} else if (!hasMuchMoney || !hasGoodJob || hasMotivation && hasFreeTime) {
    console.log('Максиму нужно учить фронтенд');
} else {
    console.log('...');
}


// Оператор нулевого слияния ?? (если первый апперанд не равен undefined и не равен null, то выведет его, если равно, то выведет второе значение)

const n = null
const m = 100

const result1 = a || b // 100, приводит к boolean и приводит первый
const result2 = a ?? b // 100, проверяет оператор на undefined и на null

console.log(result1);
console.log(result2);