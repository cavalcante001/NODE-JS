import validator from 'validator';

let ip = '127.0.0.1';

console.log(validator.isEmail('loremipsum'));
console.log(validator.isIP(ip));

let name: string = 'paulo';

if(validator.isLowercase(name) {
    console.log(`A string ${name} é toda minúscula`);
} else {
    console.log(`A string ${name} não é toda minúscula`);
}