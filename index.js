//< h1 > Hello world! < /h1>
/*
let fname = 'Shivam'
let lname = 'Ambi'
console.log('Hello', fname, 'world', lname); //console displays 
alert('Hello world'); //popup displays


//
const interestrate = 0.3; //assign constant
interestrate = 1;
console.log(interestrate);


//Premetive data type    or    reference type
// number,string,boolean,           object,array,
// undefined,null                   function

let name1 = 'abc';
let age = 25;
let isboolean = true;
let fname = undefined;
let lname = null;
console.log(name1, age, isboolean, fname, lname)


//   static types               or            dynamic
//  
//
//let n = 'shiv'
//let a = '2'
let per = {
    n: 'shiv',
    a: 2
};
per.n = 'jon'
per['n'] = 'man  '
console.log(per);


let selectedcolors = ['red', 'blue'];
selectedcolors[2] = 1;
console.log(selectedcolors.length);


function greet(fname, lname) {
    console.log('hlw ' + fname + ' boring ' + lname);
}
greet('Moli', 'aew');


function square(no) {
    return no * no;
}
console.log(square(2));


// oops concept constant 

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};
*/
/*
//factory function
function createcircle(radius) {
    return {
        radius,

        draw: function() {
            console.log('draw1');
        }
    };
}
const circle = createcircle(1);


//constructor function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw2');
    }
}
const another = new Circle(1);
circle.draw(); //display content from 1st function
another.draw(); //display content from this function


var person = {
    name: 'John',
    age: 50
};
alert(person.name + " is " + person.age)
*/

//Class 
/*
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age(year) + " years old.");

//JavaScript Callbacks  %%%  Asynchronous JavaScript(SetTimeOut)

function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

setTimeout(mySecond, 10000);


myFirst();



//Set Interval()
setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    console.log(d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds());
}

//alert("Time is out");


function mySecond() {
    alert("Time is out");
}
setTimeout(mySecond, 10000);

*/