// задача 1
function doubleLetter(str){
    let result = '';
    for (let i = 0; i < str.length; i++){
        result = result + str[i].repeat(2);
    }
    return result;
}
console.log(doubleLetter("hello world"));

// задача 2
function padString(str, length, symbol, toLeft = false){
    if (str.length>= length){
        return str;
    }
    const plength = length - str.length;
    const p = symbol.repeat(plength);
    return toLeft ? p + str : str + p;
}
console.log(padString('Hellofghfgh' , 20, '+'))

// задача 3
function camelCase (str, separator){
    const words = str.split(separator);
    for ( let i = 1; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join('');
}
console.log(camelCase('Hello world', ' '));
