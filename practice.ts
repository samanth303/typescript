// Class Example
// class Website{
//     url:string;
//     likes:number;
//     constructor(givenurl:string,givenlikes:number){
//         this.url = givenurl;
//         this.likes = givenlikes
//     }
// }

// let google = new Website("https://www.google.com",12345)
// console.log(google)


// Methods

class Planet {
    private  name:string;
   protected mass:number;

    constructor(inName:string,inMass:number){
      this.name = inName;
        this.mass = inMass;
    }
    printName(){
        console.log (`Function PrintName ${this.name}`)
    }

}
let p = new Planet("",123)
p.printName()


//Inheritance


class Jupiter extends Planet {
    private colorBands:boolean
    constructor(color:boolean){
        super("Earth",123)
        this.colorBands = color
    }
}

let j = new Jupiter(true)
j.printName()



// Inerface Example

// interface IPerson{
//  firstName:string;
// };

// function greet(person:IPerson){
// console.log(`Hello${person.firstName}`)
// }

// greet({firstName:'Frank'});




// Interfaces and Classes Example

// interface IPerson {
//   firstName: string;
//   greet(): void;
// }

// class Person implements IPerson {
//   firstName: string;

//   constructor(inFirstName: string) {
//     this.firstName = inFirstName;
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }
// }

// const p = new Person("Samanth");
// p.greet();



// Extending Interfaces


// interface IPerson{
//     firstName:string
// }
// interface INinja extends IPerson{
//     numberofSwords:number
// }

// let ninja = {} as INinja;
//     ninja.firstName = "Samanth";
//     ninja.numberofSwords = 5;
//     console.log(ninja)