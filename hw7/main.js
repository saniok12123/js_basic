// Задача 1
const originalArray = [1, 2, 3, 4, 5];
originalArray.reverse();
console.log(originalArray)

//Задача 2
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function uniqueValues(firstArray, secondArray) {
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (!secondArray.includes(firstArray[i])) {
            newArray.push(firstArray[i]);
        }
    }
    for (let k = 0; k < secondArray.length; k++) {
        if (!firstArray.includes(secondArray[k])) {
            newArray.push(secondArray[k]);
        }
    }
    return newArray;
}
const result = uniqueValues(array1, array2);
console.log(result);

// Задача 3
const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];
function calculateAverageGrade(students) {
    let totalGrade = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].grade;
    }
    const averageGrade = totalGrade / students.length;
    return averageGrade;
}
console.log(calculateAverageGrade(students));

