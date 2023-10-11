function myFunction1(){
let usd = prompt("впишите сумму в долларах..");

let answer = (usd/1.7);

let netice = 'сумма в долларах ' + usd +  + ' делает в манатах ' + answer;

document.getElementById("buton1").innerHTML = netice;

}
function myFunction2(){

let usd = prompt("впишите сумму в евро");

let answer = (usd/1.81);

let netice = 'сумма в евро ' + usd +  + ' делает в манатах ' + answer;

document.getElementById("buton2").innerHTML = netice;
}

function myFunction3(){

let usd = prompt("впишите сумму в рублях");

let answer = (usd/0.017);

let netice = 'сумма в рублях ' + usd +  + ' делает в манатах ' + answer;

document.getElementById("buton3").innerHTML = netice;

}

function myFunction4(){

let usd = prompt("впишите сумму в лирах");

let answer = (usd/0.061);

let netice = 'сумма в лирах ' + usd +  + ' делает в манатах ' + answer;

document.getElementById("buton4").innerHTML = netice;
}