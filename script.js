// alert('hallo leute!')
// console.log('hello aleikom habibi!')
window.onload = init;
// function init(){
//     alert('shabat shalom!')
//     //var
//     let x = 10;
//     let message="shit fuck";
//     alert(x);
//     //console.log(x);
//     alert(message);
// }
// function sum(a, b){
//     let result=a+b;
//     alert(result);
// }


function init(){
    let btn = document.querySelector("#btnname");
    let game = document.querySelector(".gamecontainer");
    btn.addEventListener("click", showInfo);

    //my first shape

    let canvas = document.querySelector("#mycanvas");
    let ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.fillStyle = "#FFCC00";
    //ctx.strokeStyle = "#FFCC00";
    ctx.lineWidth = "1";
    //ctx.fillRect(100, 100, 300, 300);
    //ctx.strokeRect(100, 100, 300, 300);
    ctx.rect(0, 334, 500, 167);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    //ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = "1";
    //ctx.fillRect(100, 100, 300, 300);
    //ctx.strokeRect(100, 100, 300, 300);
    ctx.rect(0, 167, 500, 167);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 250, 50, 0, 2*Math.PI, false);
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
    ctx.closePath();





}
function showInfo(){
    let intxt = document.querySelector("#txtusername");
    let title = document.querySelector("#txttitle");
    // let title = document.querySelector("h1");
    title.innerHTML = "Welcome to your page, " + intxt.value + "!!!"
    // alert("Welcome to your page, " + intxt.value + "!!!");

    let box = document.querySelector("#container");
    let hel = document.createElement("h2");
    hel.innerHTML = "Your score: 0";
    box.appendChild(hel);

    let ael = document.createElement("a");
    ael.innerHTML = "Click me!";
    ael.href = "https://github.com";
    ael.target = "_blank"
    box.appendChild(ael);


    intxt.value = "";


}