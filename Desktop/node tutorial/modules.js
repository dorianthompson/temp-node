const names = require('./names');
const sayHi = require('./utils');
const data = require ('./alternative');
console.log(data);

const {john, peter} = names;
sayHi('Dorian');
sayHi(john);
sayHi(peter);
