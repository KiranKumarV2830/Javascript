// Constants = A variable which cannot be changed.

// const pi = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle:");
// radius = Number(radius);

// circumference= 2 * pi * radius;

// console.log(circumference);

const PI=3.14;
let radius;
let circumference;

document.getElementById("btn").onclick = function(){
    radius = document.getElementById("ipt").value
    radius=Number(radius);
    circumference = 2 * PI * radius
    console.log(circumference);
}