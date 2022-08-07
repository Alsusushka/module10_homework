let str = 'Hello';
let result = '';

for (let i = str.length; i >= 0; i--) {
    result += str.slice(i-1, i);
}
console.log(result);
