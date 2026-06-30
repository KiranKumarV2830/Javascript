/* How to accept user input
1 . Easy way = window prompt
2 . Professional way = HTML Textbox */

// let userName;

// userName=window.prompt("What is username:");
// console.log(userName);

let username ;
document.getElementById("btn").onclick = function (){
    username = document.getElementById("myID").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}