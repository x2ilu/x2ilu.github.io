function myFunction2(){
    let a = prompt("enter parametr A?");

    let h = prompt("enter parametr H?");

    let answer = (a*h/2);

    let netice = "при пара основании A которое равно " + a + " и при высоте h лежащем на основании A и равному " + h + " площадь будет равна " + answer ;

    document.getElementById("buton2").innerHTML = netice;
}