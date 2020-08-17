const { Goat } = require("./goat.js");

console.log(Goat);
const dolly = new Goat();
dolly.eat();

const cities = require('cities');

const ri = cities.findByCityAndState('Rock Island', 'IL');
console.log(ri);
const g = cities.findByState('IL');
console.log(g.length);