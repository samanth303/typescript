//----------Addition---------//
// function add (a: number,b:number): number{
//     const c: number = a+b;
//     return c;
// }
// const r1:number = add(11,31);
// console.log(r1)
//------------Multiply--------------//
// function multiply (a:number,b:number) {
//     const c:number = a*b;
//     return c;
// }
// const r2:number = multiply(2,3)
// console.log(r2)
// Substraction---------//
// function sub(a:number,b:number):number{
//     const c:number = a-b;
//     return c;
// }
// const r3:number = sub(10,5)
// console.log(r3)
// Division ------//
// function division(a:number,b:number):number {
//     const c:number = a/b
//     return c;
// }
// const r4:number = division(10,4)
// console.log(r4)
// Simple Intrest
// function simpleintrest (p:number,r:number,t:number):number {
//     const si:number = p*r*t/100
//     return si;
// }
// const r5:number = simpleintrest(1000,5,10)
// console.log(r5)
// Area of circle
// function areaofcircle(radius:number):number{
//     const area:number = radius*radius*3.14
//     return area;
// }
// const output:number = areaofcircle(10)
// console.log(output)
// Area of rectangle
// function areaofrectangle(length:number,breadth:number):number{
//     const area:number = length*breadth;
//     return area;
// }
// const output:number = areaofrectangle(10,10)
// console.log(output)
//---------- Fibbonacci Series------/
// var i:number;
// var fib:number[] = [];
// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 5; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i])
// }
//Print Square shape by using *
// let n:number = 5;
// let string:string = "";
// for(let i:number = 0; i<n; i++){
//     for(let j:number = 0; j<n; j++){
//         string += "*";
//     }
//      string += "\n"
// }
// console.log(string)
// Pyramid shape by using *
// let n:number = 5;
// let string:string = "";
// for(let i:number=0; i<=n; i++){
//     for(let j:number=1; j<=n-1; j++){
//         string+= " "
//     }
//     for(let k:number=0; k<2*i-1; k++){
//         string+= "*"
//     }
//     string += "\n"
// }
// console.log(string)
//--------------Prime Number-------------//
// const number:number = 6;
// let isPrime:boolean = true;
// if(number === 1){
// console.log('Number is Neither Prime nor composite')
// }
// else if(number > 1){
//     for(let i:number = 2; i<number; i++){
//         if(number % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`This number ${number} is PrimeNumber`)
//     }else{
//         console.log(`This number ${number} is Not a PrimeNumber`)
//     }
// }else{
//     console.log(`This number is not a prime number ${number}`)
// }
// ----------Factorial of a number---------//
// const number:number = 10;
// if(number<0){
// console.log(`Error Factorial For Negative Number does exist`)
// }else if(number===0){
//     console.log(`Factorial of ${number} is 1`)
// }else{
//     let fact:number = 1;
//     for(let i:number = 1; i <= number; i++){
//         fact *= 1;
//     }
//     console.log(`Factorial for ${number} is ${fact}`)
// }
//------------Calculator-----------//
var operand = '+';
var number1 = 10;
var number2 = 10;
var result;
if (operand == '+') {
    result = number1 + number2;
}
else if (operand == '-') {
    result = number1 - number2;
}
else if (operand == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(" " + number1 + " " + operand + " " + number2 + " = " + result);
//-----
