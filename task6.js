let arr = [1, 1, 2, 1, 1];
let check = true;
let value = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != value) {
        check = false;
    }
}
console.log(check);