function myFunction2(){
    let a = prompt("enter parametr A?");

    let h = prompt("enter parametr H?");

    let answer = (a*h/2);

    let netice = "S=" + answer ;
    
    document.getElementById("buton2").innerHTML = netice;
}