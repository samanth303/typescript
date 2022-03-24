// function sayHi(humanName){
//     alert(`Hello,${humanName}`);
// }
// sayHi({humanName:'Samanth'})


//---------Types------------// 

//String

const bestShowEver: string = "Babylon 5";

// Number

const a: number = 42;

const b: number = 3.14;

// Boolean

const isThisTheBestBookEver: boolean = true;

//Any

let accountBalance;
accountBalance = 15000;
accountBalance = "15000";


// Array

const pets: string[] = [ "Samant", "Kumar" ];

const pets1: any[] = [ "Samanth", 42 ];

//Tuples

const authors:[string,number] = ["samanth",42]

//Enums

enum Food{Chicken,Pizza,Rice}

let favfood:Food.Chicken

alert(favfood);

//Function

let myMathFunction: (num1: number, num2: number) => string;

function add(n1: number, n2: number): string {
    return "" + n1 + n2;
    }
    myMathFunction = add;