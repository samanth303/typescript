"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import add from "./calc";
var calc_1 = __importDefault(require("./calc"));
// test('add 1 + 2 to equal 3',()=>{
//     expect(add(1,2)).toBe(3)
// })
test('subtract 2 - 2 to equal 0', function () {
    expect((0, calc_1.default)(1, 1)).toBe(0);
});
