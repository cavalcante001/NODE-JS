"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let ip = '127.0.0.1';
console.log(validator_1.default.isEmail('loremipsum'));
console.log(validator_1.default.isIP(ip));
let name = 'paulo';
if (validator_1.default.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula`);
}
else {
    console.log(`A string ${name} não é toda minúscula`);
}
