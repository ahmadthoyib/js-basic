/*function sayHello(){
    for (var i = 0; i < 5; i++){
         console.log(i);
    }
}
sayHello() */ 

// const person = {
//     name:'Bagio',
//     height : 168,
//     age : 16
// }
// console.log(person)

// const square = function(number){
//     return number * number;
// };

//const square = number => number * number;
//console.log(square(6));

/*let name = "thoyib";
console.log(name);

/*let fistname = "ahmad";
let lastname = "thoyib";*/

/*let name = "thoyib";
let age  = "18";
let isapproved = "false";
let firstname = "underfined";
let selectedcolor = "null";*/

/*let person ={
    name : 'thoyib',
    age  : 18,
};
person.name = 'ahmad';

let slection = 'name';
person[Selection]= 'ghofur';

console.log(person.name);*/

/*let selectedColors = ['red','green'];
selectedColors[2] = 1;
console.log(selectedColors.length);*/

/*function greet(name, lastName){
    console.log('hello ' + name + '' + lastName)
};

function square(number){
    return number * number
}

console.log(square(5))*/

//operators

/*let x = 10
let y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

//increment (++)
console.log(x++)
console.log(x)

//derement (--)
console.log(--x)*/

/*let x =  10;

x = x + 5;
x += 5; 

x = x * 3;
x *= 3*/

/*let x = 5;

//relational
console.log(x > 5)
console.log(x >= 5)
console.log(x < 5)
console.log(x <= 5)
// equality
console.log(x === 5)
console.log(x !== 5)*/

//strict equality (type + value )
/*console.log(1 === 1)
console.log('1' === 1)
//lose equality (value)
console.log(1 == 1)
console.log('1' == 1)
console.log(true == 1)*/

//if a customer has more than 100 points
// they are a 'gold' customers, otherwise,
//they are a 'silver' customers.
/*let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)*/

//logical OR (||)
//retruns TRUE if one of the operands is TRUE
/*let income = false;
let score  = false;
let loanfor   = income || score;
console.log('loan',loanfor );
//NOT(!)
let arefused = !loanfor;
console.log('Arefused',arefused)*/

//falsy (false)
//underfined
//null
//0
//false
//''
//NaN

/*let usercolor = undefined
let defaultcolor = 'pink'
let currantcolor = usercolor || defaultcolor;
console.log(currantcolor);*/

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
//
//console.log(1 | 2)
//console.log(1 & 2)

// read,write,excute
// 00000100
// 00000010
// 00000001
const read = 5;
const write = 4;
const excute = 1;

let mypersion = 0;
mypersion = mypersion | write;

let message =
(mypersion & read) ? 'yes' : 'no';
console.log(message);