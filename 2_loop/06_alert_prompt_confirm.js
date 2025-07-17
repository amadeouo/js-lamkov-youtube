// Взаимодействие с пользователями в браузере


// Вывод окна (приостанавливает код до тех пор пока не закроется окно)
// alert(1 + 2 + 3)

// Вывод окна с полем для ввода
const userAge = prompt('Сколько тебе лет', 18) // второе значение - ставящееся по дефолту (необязательно)
console.log(`Возраст: ${userAge}`); 


const useressAge = prompt('Введите ваш возраст')
if (useressAge >= 18) {
    console.log('Доступ разрешен');
} else {
    console.log('Доступ запрещен');
}

// значение из prompt - выходит строчным. Решение - можно добавить + или Number() перед prompt

const useresAge = +prompt('Введите ваш возраст')
if (useresAge === 0) {
    console.log('Не может быть');
} else {
    console.log(`Твой возраст: ${useresAge}`);
}


// Confirm - у тебя есть выбор между ok или cancel - выводит значение булевого тип

const isUserReady = confirm('Ты готов?')
if (isUserReady) {
    console.log('Переходим дальше');
} else {
    console.log('Стоим на месте');
}

// switchcase

const ages = +prompt('Сколько тебе лет?')

switch (ages) {
    case 0: {
        console.log('Ты врешь');
        break
    }
    case 18: {
        console.log('Покажи паспорт');
        break
    }
    case 1000: {
        console.log('Вампир?');
        break
    }
    default: {
        console.log(`Твой возраст: ${ages}`);
    }
}


// проверка диапазонов
switch (true) {
    case ages < 1: {
        console.log('Такого возраста не бывает');
        break
    }
    case ages === 18: {
        console.log('Пришли паспорт на телеграм @amadeoo');
        break
    }
    case ages > 0 && ages <= 125: {
        console.log(`Твой возраст: ${ages}`);
        break
    }
    case ages > 125: {
        console.log('Ты вампир?');   
        break
    }
    default: {
        console.log(`Твой возраст: ${ages}`);
        break
    }
}


