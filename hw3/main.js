// Задача 1
const number = +prompt("Введіть номер");
if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
} else if (number % 5 === 0) {
    console.log('Buzz');
} else if (number % 3 === 0) {
    console.log('Fizz');
} else {
    console.log("Не ділиться на 3 і не ділиться на 5");
}

// Задача 2
const year = +prompt("Введіть рік");
if (year > 0 && year % 4 === 0) {
    console.log(year + ' - високосний рік');
} else if (year > 0 && year % 4 !== 0) {
    console.log(year + ' - не високосний рік')
} else {
    console.log('Ви ввели невірний номер');
}

// Задача 3
const age = +prompt("Введіть число");
const lastNumber = age % 10;
const lastTwoNumber = age % 100;

if (isNaN(age) || age <= 0) {
    console.log('Введено невірне значення');
} else if (lastTwoNumber >= 11 && lastTwoNumber <= 19) {
    console.log(age + ' Років');
} else if (lastNumber === 1) {
    console.log(age + ' Рік');
} else if (lastNumber >= 2 && lastNumber <= 4) {
    console.log(age + ' Роки');
} else {
    console.log(age + ' Років');
}
