'use strict'

//Task#1
// const arr = ['a', 'b', 'c', 'd'];
// alert(`${arr.splice(0,1)} + ${arr.splice(0,1)}, ${arr.splice(0,1)} + ${arr.splice(0,1)}`)

//Task#2
/*const arr = [2, 5, 3, 9];
const result = arr.reduce(function (){
    let a = arr[0] * arr[1];
    let b = arr[2] * arr[3];
    return a + b;
})*/

//Task#3
/*const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const find4 = arr.reduce((a, b) => {
    return a.concat(b)
}).find((item) => item === 4);*/

//Task#4
/*const obj = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'}
const find_jQuery = Object.values(obj).reduce((a, b) => {
    return a.concat(b)
}).find((item) => item === 'jQuery')*/

//Task#5
/*const arr = [];
let result = '';
for (let i = 0; i < 4; i++) {
    result += 'x';
    arr.push(result)
}
console.log(arr)*/

//Task#6
/*const arr = [];
for (let i = 1; i < 6; i++) {
     let result = '';
     for (let j = 0; j < i; j++) {
         result += i;
     }
     arr.push(result);
 }
console.log(arr)*/

//Task#7
/*const arr = [];
const arrayFill = (item, arrLength) => {
    while (arrLength > 0){
        arr.push('x')
        arrLength--;
    }
}
arrayFill('x', 5)*/

//Task#8
/*const arr = [2, 5, 1, 2, 4, 7];
const newArr = [];
let sum = 0;
for (let i = 0; sum <= 10; i++) {
    sum += arr[i];
    newArr.push(arr[i]);
}
console.log(newArr.length)*/

//Task#9
// const arr = [2, 5, 3, 9];
// const newArr = [];
// for (let i = 0; i < arr.length;) {
//     newArr.push(arr.pop());
// }
// console.log(newArr);

//Task#10
/*
const arr =  [[1, 2, 3], [4, 5], [6]];
const sum = arr.reduce((a, b) =>{
    return a.concat(b)
}).reduce((a, b) => {
    return a + b;
})
console.log(sum)*/

//Task#11
/*
const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
const sum = arr.reduce((a, b) =>{
    return a.concat(b)
}).reduce((a, b) =>{
    return a.concat(b)
}).reduce((a, b) => {
    return a + b;
})
console.log(sum)*/
