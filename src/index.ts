import validator from 'validator';

let ip = '127.0.0.1';

console.log(validator.isEmail('loremipsum'));
console.log(validator.isIP(ip));