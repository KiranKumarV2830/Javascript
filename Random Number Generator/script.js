// Random Number Generator

const Button=document.getElementById("btn");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
let min = 50;
let max = 100;

let rand1;
let rand2;
let rand3;
Button.onclick = function(){
    rand1 = Math.floor(Math.random() * (max-min)) + min;
    rand2 = Math.floor(Math.random() * (max-min)) + min;
    rand3 = Math.floor(Math.random() * (max-min)) + min;
    label1.textContent =rand1
    label2.textContent =rand2
    label3.textContent =rand3
}