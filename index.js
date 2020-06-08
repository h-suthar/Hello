const utils = require("./utils.js");

let abc = 1;

let myArr = [];

myArr.push(abc);

console.log(myArr);

console.log(utils.garbage());

let h = {
    help: 1
}

h.help = utils.test(h);

console.log(h);