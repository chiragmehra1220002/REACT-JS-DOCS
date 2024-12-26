
const words = ['❤️', 'ES6']
const [ feeling, version ] = words
console.log(feeling + " " + version);

const displayElement = document.getElementById("display");

displayElement.innerHTML= `${feeling} ${version}`;





//   !  =========== Hoisting =============
console.log(num); // undefined
var num =20;
// console.log(x); // reference error cannot access x before its intialization
// let x =22;
//  ! ============ Object Destructuring =========
const fullName = {
    fname : "Chirag",
    lname : "Mehra" ,
}
const {fname,lname} = fullName;
// console.log(fname,lname);

let x = 10;
let y = 20;
// console.log(x,y);  10 20
// [y,x] = [x,y];  swap the values
// console.log(x,y);  20 10
//    ! =========  Spread operator ============
let array1 = [20,30,40,50,70];
let array2 = [10,60,80,90,100];
let newArray = [...array1,...array2];
// console.log(newArray); output :[20, 30, 40, 50, 70, 10, 60, 80, 90, 100]

var obj1 = {
    name:"Chirag",
    id:21
};
var obj2 = {
    course:"JFS",
    skills:["html","css","js","react js"]
};
var newObj ={...obj2,...obj1};
// console.log(newObj);   {course: 'JFS', skills: Array(4), name: 'Chirag', id: 2}
// ^ ========= Rest operator ==============
let nums=[10,20,30];
function sum(...nums)
{
    var total = 0;
    for (let val of nums)
    {
        total += val;
    }
    console.log(total);
}
// sum(10,20,30,40,100);
// ^ ==== Default Parameters Values ====
function multiply(a,b=10)
{
    return a * b;
}
// console.log(multiply(2,5)); 10
// console.log(multiply(2));   20
function displayName(name = "Chirag")
{
    // console.log(`${name} Mehra`);
}
displayName();// Chirag Mehra
// ^ ==== Block scope ====
var a = 10;
var b = 20;
print = () => {
    var a = 100;
    var c = 30;
    // console.log(a);   100
    // console.log(b);   20

    // console.log(c);   30
}
print();
// console.log(a);// 10
// console.log(c);// uncaught reference error
if(true)
{
    var d = 20;

   
}
// for (let i = 0; i<=5;i++)
// {
//     console.log(i);
// }
// console.log(i);

function  getFullName (fname, lname)
{
    return `${fname} ${lname}`
}
// console.log(getFullName("Chirag","Mehra"));
function sum2(num1,num2)
{
    return num1 + num2;

}
function showMyWork(num1,num2)
{
    return `${num1} + ${num2} = ${sum2(num1, num2)}`
}


// console.log(showMyWork(20,40));

// ^ ======= Arrow Functions ======



let sum3 = (number1,number2) => number1 + number2 + 1000;

// console.log(sum3(20,50));

const addTen = total => total + 10;

// console.log(addTen(17));  27
// ^ ====== Call Apply Bind =======
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
const person = {
    name:"Chirag"
};
greet.call(person,"Hello","!!!");
greet.apply(person,['Hello','???']);

const greetChirag = greet.bind(person, 'Hey');
greetChirag('!!!');
// ^ ====== Classes ============
class Animal {
    constructor(legs = 0) {
        this.legs = legs
    }

    move() {
        if (this.legs > 0) {
            console.log('walk')
        }
        else {
            console.log('slither')
        }
    }
}
class Dog extends Animal {
    constructor(legs=4,sound ='bark'){
      
        super(legs)
        this.sound=sound;
    }
    bark()
    {
        console.log(this.sound);
    }

  


}
let myDog = new Dog();
myDog.move();
myDog.bark();










