// Задача 1
const words = ["apple", "banaNA", "kiWi", "ORANGE"];
function capitalizeStrings(arr) {
    return arr.reduce((result, word) => {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalized);
        return result;
    }, []);
}
console.log(capitalizeStrings(words));

// Задача 2
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function findCommonElements (arr1, arr2) {
    return arr1.filter(element => arr2.includes(element))
}
console.log(findCommonElements(array1, array2));

// Задача 3
const numbers = [1, 2, 3, 4, 5];
function analyzeArray(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    return {
        min: min,
        max: max,
        sum: sum,
        average: average,
    };
}
console.log(analyzeArray(numbers));
