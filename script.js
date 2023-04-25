// use strict

/*let person = {
    first: 'keval',
    seconf: 'ahr'
};
person.ahe = 78;
console.log(person);*/

//let x = math.flor(Math.random() * 19);
//document.write(x);

// obj constructer
/*function Student(first, age) {
    this.first = first;
    this.age = age;
}
var stu1 = new Student("keval", 20);
console.log(stu1);

//add obj in outter function
//prototype

Student.prototype.sem = 3;
console.log(Student);*/

// nested object(imp - API)
/*var person = {
    name: "keval",
    address: {
        city: "rajkot",
        other: {
            surname: "rabadiya"
        }
    }

}
console.log(person.address.other);*/

//----- DOM ( selecter and changing element)

// queryselecter (strong selector via css)
/*var elm = document.querySelectorAll("li.first");
for (let i = 0; i < elm.length; i++) {
    elm[i].innerHTML = "hello";
}*/

// tag through select
/*var elm = document.getElementsByTagName("ul");

for (let i = 0; i < elm.length; i++) {
    elm[i].innerHTML = "hii";
}*/

//treversal for selecter
// parent select ( sem as childeren element (firstelementchild,last,onlychildren(all element))
/*let elm = document.getElementById("first");
let prt = elm.parentElement; ------.previouselementsiblings,next(sam)
prt.innerText = "WELCOME WORLD";
*/

// append
/*let x = document.getElementById("list");
let item = document.createElement("li");
item.textContent = "new line";
x.appendChild(item);*/

// insert before an element
/* let x = document.getElementById("list");
 let item = document.createElement("li");
 item.textContent = "new line";
 let pos = x.firstElementChild.nextElementSibling; (.....)
 x.insertBefore(item, pos);*/

// replace element
/*let x = document.getElementById("list");
       let item = document.createElement("li");
       item.textContent = "new line";
       let pos = x.firstElementChild.nextElementSibling;
       x.replaceChild(item, pos);*/

// csstext
/*let hea = document.getElementById("intro");
hea.style.cssText = "background:red"; (.....all property allows)*/

// class add,remove,replace,toggle etc..
/*let box = document.getElementById("box");
box.classList.add("dim");*/

//dom events

/*<button id="btn" onclick="buttnclick()">click me</button>
    <script>
        function buttnclick() {
            alert("button was click");
        }
    </script>
    
    2) method
    function buttnclick() {
            alert("button was click");
        }
        let bntn = document.getElementById("btn");
        bntn.addEventListener('click', buttnclick);
        
      3)method anynusmus fun
      bntn.addEventListener('click', function () {
            alert("btn was click");
        });  */

/*
let btn1 = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let url = "https://www.google.com";
let feature = "hight=500,width=500";
btn1.addEventListener('click', function () {
    window.open(url, 'google', feature);
});
btn2.addEventListener('click', function () {
    window.close();
})
//----->
setTimeout(myfunction, 5000);

function myfunction() {
    alert("hello");
}
//---> repeting every 2 second
setInterval(fun, 2000);

function fun() {
    alert("hello");
}

// redirect location
 1]location.href
 2]window.location
 3]location.assign
 4]location.replace

 // navigator properties
 appname,app,cookieEnabled,userAgent,platform,javaEnabled(), etc... 

 // screen object properties
 screen.width,hight,colorDepth,orientation

// Object Destrucing same as array Desturing only diffrence once = []
let book = {
    price: 200,
    page: 15,
    name: "keval",
    par: {
        me: "me"
    }
}
let { price, page, name, par: { me } } = book;
console.log(me);

//module
import { name } from './apl.js';
name();

//create object 2 method
1)let person = {
    age = 27,
    firstname = 'name'
};
2)let person = new Object();
person.age = 27;
consol.log(person);
person.sayhi = function(){
    alert("hii");
}
person.sayhi();

//constructor
function Person(n){
    this.age = n;
}
//use prototype & inheritence
function creature(ls){
    this.lifespan = ls;
}
creature.prototype.breath = function(){
    console.log("breathing...");
}
let creature1 = new creature(100);
function Person(first,last){
    this.firstname = first;
    this.lastname = last;
}
Person.prototype.fullName = function(){
        console.log(this.irstname+" "+this.lastname);
    }
    person.prototype.__proto__ = Object.create(creature.prototype);
    console.log(creature);
let person1 = new Person("keval","patel");
let person1 = new Person("val","patel");

//mixin in OOP

let usefullmethod ={
    sayhi(){
        console.log("hii..");
    }
    saybi(){
        console.log("byy");
    }
}
class user{
    constructor(){
      this.name = "keval";
    }
}
Object.assign(user.prototype,usefullmethod);
let user1 = new user();
console.log(user1.sayhi());

//Arrow function

let sum = (a,b) => {
    return a+b;
    //xyz
}
short form only single line and return
let sum = (a,b)=>a+b;

only one parameter
let sum = a => 2*a;

//map function - operation in all element in array
        let arr = [2, 4, 7, 6, 3, 4];
        //result [4,8,14,12,6,8] using arrow function
        let arr1 = arr.map((val) => val * 2);
        console.log(arr1);

        // filter 
        let arr = [2, 40, 7, 6, 30, 4];
        //result 10 greter and store
        let arr1 = arr.filter((val) => val > 10);
        console.log(arr1);

        let dev = [
            {
                name: 'keval',
                position: 'devloper'
            },
            {
                name: 'xyz',
                postMessage: 'app'
            },
        ];
        let arr1 = dev.filter(function (val) {
            return val.position == "devloper";
        });
        console.log(arr1);

        document.cookie = 'name=keval; expires=Sat,16 Jul 2022 12:00:00 IST';
        alert(document.cookie);

        localStorage.setItem('name', 'Keval');
        localStorage.setItem('location', 'gujrat');
        alert(localStorage.getItem('name'));

        sessionStorage.setItem('name', 'Keval');
        sessionStorage.setItem('location', 'gujrat');

        sessionStorage.removeItem('name');
*/