const N = +prompt('Введіть число');
if (N < 2) {
    console.log(N + 'не є простим числом');
} else {
    let simpleNumber = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            simpleNumber = false;
            break;
        }
    }
    if (simpleNumber) {
        console.log(N + 'просте число');
    } else {
        console.log(N + 'складне число');
    }
}

// задача 2
const M = +prompt('Введіть число');
console.log('Досконалі числа від 1 до ' + M);

for (let i = 1; i <= M; i++) {
    let sum = 0;
    for (let d = 1; d <= i / 2; d++) {
        if (i % d === 0) {
            sum += d;
        }
    }
    if (sum === i) {
        console.log(i);
    }
}

// задача 3
const tree = +prompt('Введіть число');
let space = '';
for (let i = 1; i <= tree; i++) {
    space += ' '.repeat(tree - i) + '*'.repeat(2 * i - 1) + (i === tree ? "" : "\n");
}
console.log(space);