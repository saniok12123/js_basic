// Задача 1
const num = [34, 5, 41, 11, 432, 77, 64, 13];

function isPrime(num) {
    if (num <= 1) return false;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const primeNum = num.filter(isPrime);
console.log('Прості числа ' + primeNum);

// Задача 2
const num1 = [
    { source: 14, text: 'kyk', date: 1888 },
    { source: 2, text: 'hey', date: 1900 },
    { source: 43, text: 'you', date: 1672 },
    { source: 14, text: 'rose', date: 1999 },
    { source: 2, text: 'mist', date: 2025 }
];
function groupBySource(array) {
    return array.reduce((result, item) => {
        if (!result[item.source]) {
            result[item.source] = [];
        }
        result[item.source].push(item);
        return result;
    }, {});
}
const groupedNew = groupBySource(num1);
console.log(groupedNew);

//Задача 3
const numbers = [23, 52, 83, 14, 55, 356];
function group(array, callback) {
    return array.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
const groupedByParity = group(numbers, num => (num % 2 === 0 ? 'even' : 'odd'));
console.log(groupedByParity);


