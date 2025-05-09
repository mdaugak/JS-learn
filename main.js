// let FullName = `Malek Dau`;
// let age = 30;
// let isStudent = false;

//  document.getElementById("p1").textContent = `Your name is ${FullName}`;
//  document.getElementById("p2").textContent = age;
//  document.getElementById("p3").textContent = isStudent;

// let username = window.prompt("What's your username?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function(){

//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     console.log(username);
// }


// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);


//constants are variables that can't be changed

const PI = 3.14159;
let radius;
let circumference; 

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}