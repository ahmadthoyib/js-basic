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
/*const read = 5;
const write = 4;
const excute = 1;

let mypersion = 0;
mypersion = mypersion | write;

let message =
(mypersion & read) ? 'yes' : 'no';
console.log(message);*/

//let x = (2 + 3) * 4;
//console.log(x)

/*let a = 'red';
let b = 'green';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);*/

//control flow

//1. if else 
//hour
// if hour is between 6am and 12pm ; good morninng
// if it is between 12pm and 6pm ; good afternoon
//owtherwise ; good evening `
/*let hour = 15;

if (hour >= 6 && hour < 12){
    console.log('good morning')

}else if(hour >= 12 && hour < 18){
    console.log('good afternoon')

}else
    console.log('good evening')*/

// 2. switch case
/*let role = 'guest';

 switch(role){
     case 'guest':
     console.log('guest user');
     break;

     case 'moderator':
     console.log('moderator user');
     break;

     default:
     console,log('unknow user');
}
if (role === 'guest') console.log('guest');
else if (role === 'moderator') console.log('moderator');
else console.log('unknow user');*/

// 3. for

/*for(let i = 0; i <= 5; i--){
 if (i % 5 !== 0)console.log(i)}*/

 //4. while

 /*for(let i = 0; i <= 5; i++){
    if (i % 2 !== 0)console.log(i)
}
let i = 0;
while(i <= 5){
    if (i % 2 !== 0)console.log(i);
    i++;
}*/

//5. do while

//for(let i = 0; i <= 5; i++){
    //if (i % 2 !== 0)console.log(i)
//}
/*let i = 9;
while(i <= 5){
    if (i % 2 !== 0)console.log(i);
    i++;
}*/
//do whhile

/*let i = 9;
do{
    if (i % 2 !== 0)console.log(i);
    i++;
}while (i <= 5);*/

// 6.infiniti lopps
/*let i = 0;
while (i < 5){
    console.log(i);
    //i++;
}
while(true){
}
let x = 0;
do{
    //x++
}while (x < 5);

for (let i = 0; i < 10;);*/

// 7. for in
//for 
// while 
//do while

//for in
/*const person ={
    name : 'thoyib',
    age : 18
};
for(let key in person)
    console.log(key,person[key]);

//for of
    const colors = ['red','pink','black'];

for (let color of colors)
    console.log(color)*/

 //9.break and contiue
 /*let i = 0;
 while(i <= 10){
     if(i === 5)break;
     if (i % 2 === 0){
         i++
         continue;
     }
     console.log(i);
    i++;
 }*/
 
 //10.max of two numbers
 /*let number = max(5,10);
 console.log(number);
 
 function max(a,b){
     return (a > b) ? a : b;
 }*/

 //11.landscape and potrait
 /*console.log(isLandscape(300, 600));

 function isLandscape(width, height){
     return(width > height);
 }*/

 //12.fizz buz
 //const output = fizzBuzz(false);
   // console.log(output);

 /*function fizzBuzz(input){
    if (typeof input !== 'number')
    return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
    return 'fizzBuzz';

    if (input  % 3 === 0)
    return 'fizz';

    if (input % 5 === 0)
    return 'Buzz';

    return input;
}*/

//13.demeret points
/*checkspeed(130);

function checkspeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log(ok);
        return;
    }
    const points = Math.floor((speed-speedLimit ) / kmPerPoint)
    if (points >= 12)
    console.log('Licence suspended');
    else
        console.log('points',points);
}*/

//14,even and odd number
shownumber(10);
 
function shownumber(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN':'ODD'
        
        console.log(i, message);
    }
}
