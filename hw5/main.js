//Задача 1
const text = prompt('');

function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString(text));

// Задача 2
const textP = prompt('').toLowerCase();

function reverseString(textP) {
    return textP.split('').reverse().join('');
}

if (reverseString(textP) === textP) {
    console.log('Введене слово є поліндром');
} else {
    console.log('Введене слово не є паліндром');
}

// Задача 3
const a = +prompt('Введіть перше число');
const b = +prompt('Введіть друге число');

function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}

console.log(findGCD(a, b));
