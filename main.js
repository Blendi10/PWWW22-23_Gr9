var header = document.getElementById("right");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", " ");
        this.className += " active";
    });
}
const latest = document.getElementById("LL");
const popular = document.getElementById("PL");
const random = document.getElementById("RL");

const div1 = document.getElementById("1").innerHTML;
const div2 = document.getElementById("2").innerHTML;
const div3 = document.getElementById("3").innerHTML;
const div4 = document.getElementById("4").innerHTML;
const div5 = document.getElementById("5").innerHTML;
const div6 = document.getElementById("6").innerHTML;

latest.addEventListener("click", lfunction);
popular.addEventListener("click", pfunction);
random.addEventListener("click", rfunction);

function lfunction() {
    document.getElementById("1").innerHTML = div1;
    document.getElementById("2").innerHTML = div2;
    document.getElementById("3").innerHTML = div3;
    document.getElementById("4").innerHTML = div4;
    document.getElementById("5").innerHTML = div5;
    document.getElementById("6").innerHTML = div6;
}

function pfunction() {
    document.getElementById("1").innerHTML = div3;
    document.getElementById("2").innerHTML = div6;
    document.getElementById("3").innerHTML = div1;
    document.getElementById("4").innerHTML = div2;
    document.getElementById("5").innerHTML = div4;
    document.getElementById("6").innerHTML = div3;
}

function rfunction() {
    var a1 = document.getElementById("1").innerHTML;
    var a2 = document.getElementById("2").innerHTML;
    var a3 = document.getElementById("3").innerHTML;
    var a4 = document.getElementById("4").innerHTML;
    var a5 = document.getElementById("5").innerHTML;
    var a6 = document.getElementById("6").innerHTML;
    document.getElementById("1").innerHTML = a2;
    document.getElementById("2").innerHTML = a3;
    document.getElementById("3").innerHTML = a4;
    document.getElementById("4").innerHTML = a5;
    document.getElementById("5").innerHTML = a6;
    document.getElementById("6").innerHTML = a1;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))
}

function counterL() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }
        else {
            localStorage.clickcount = 1;
        }
        document.getElementById("rezL").innerHTML = "You have made " + localStorage.clickcount + " purchases from our website. ";
    }
    else {
        document.getElementById("rezL").innerHTML = "Your browser doesn't support web storage...";
    }
}


function counterS() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        }
        else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("rezS").innerHTML = "You have made " + sessionStorage.clickcount + " purchases from our website. ";
    }
    else {
        document.getElementById("rezS").innerHTML = "Your browser doesn't support web storage...";
    }
}