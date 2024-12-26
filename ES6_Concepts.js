
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
console.log(fname,lname);

let x = 10;
let y = 20;
console.log(x,y); //  10 20
[y,x] = [x,y]; // swap the values
console.log(x,y); // 20 10
//    ! =========  Spread operator ============
let array1 = [20,30,40,50,70];
let array2 = [10,60,80,90,100];
let newArray = [...array1,...array2];
console.log(newArray); //  output :[20, 30, 40, 50, 70, 10, 60, 80, 90, 100]

var obj1 = {
    name:"Chirag",
    id:21
};
var obj2 = {
    course:"JFS",
    skills:["html","css","js","react js"]
};
var newObj ={...obj2,...obj1};
console.log(newObj); //  {course: 'JFS', skills: Array(4), name: 'Chirag', id: 2}
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
sum(10,20,30,40,100);
// ^ ==== Default Parameters Values ====
function multiply(a,b=10)
{
    return a * b;
}
console.log(multiply(2,5));// 10
console.log(multiply(2));//  20
function displayName(name = "Chirag")
{
    console.log(`${name} Mehra`);
}
displayName();// Chirag Mehra








