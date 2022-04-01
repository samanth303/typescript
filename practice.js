"use strict";
// Class Example
// class Website{
//     url:string;
//     likes:number;
//     constructor(givenurl:string,givenlikes:number){
//         this.url = givenurl;
//         this.likes = givenlikes
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let google = new Website("https://www.google.com",12345)
// console.log(google)
// Methods
var Planet = /** @class */ (function () {
    function Planet(inName, inMass) {
        this.name = inName;
        this.mass = inMass;
    }
    Planet.prototype.printName = function () {
        console.log("Function PrintName " + this.name);
    };
    return Planet;
}());
var p = new Planet("", 123);
p.printName();
//Inheritance
var Jupiter = /** @class */ (function (_super) {
    __extends(Jupiter, _super);
    function Jupiter(color) {
        var _this = _super.call(this, "Earth", 123) || this;
        _this.colorBands = color;
        return _this;
    }
    return Jupiter;
}(Planet));
var j = new Jupiter(true);
j.printName();
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
