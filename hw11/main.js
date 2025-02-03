// Задача 1
function logArguments(fn) {
    return function(...args) {
        console.log('Arguments:', args);
        return fn(...args);
    };
}
function add(a, b) {
    return a + b;
}
const loggedAdd = logArguments(add);
console.log(loggedAdd(3, 5));

// Задача 2
function logArguments(fn) {
    return function(...args) {
        console.log('Arguments:', args);
        return fn(...args);
    };
}
function validate(sum, validator) {
    return function(...args) {
        if (!args.every(validator)) {
            throw new Error('Validation failed');
        }
        return sum(...args);
    };
}
function add(a, b) {
    return a + b
}
const loggedAdd = logArguments(add);
console.log(loggedAdd(3, 5));
const positiveValidator = (num) => num > 0;
const validatedAdd = validate(add, positiveValidator);
console.log(validatedAdd(3, 5));
console.log(validatedAdd(-3, 5));
