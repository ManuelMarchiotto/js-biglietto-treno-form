//chiedere all'utente il numero di chilometri che vuole percorrere
//const kilomiter = prompt("Quanti kilometri vuoi percorrere?");
const kilomiter = getElementById("distance");
//chiedere all'utente l'età del passeggero
//const age = prompt("Quanti anni hai?");
const age = getElementById("age");

//Prezzo al kilometro
const priceKm = 0.21;
//Minorenni
const underAge = 18;
//Maggiorenni
const overAge = 65;

let discount;
//Conversione delle stringhe in numeri
Number.parseInt(kilomiter);
Number.parseInt(age);

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

//Verifico che entrambi i dati convertiti siano numeri altrimenti blocco il tutto
if(isNaN(kilomiter) || isNaN(age)){
    console.log("Almeno uno dei dati messi non è un numero");
//Visto che i dati sono entrambi dei numeri verifico l'età per lo sconto  
}else if (age > underAge && age < overAge){
    discount = 0;
}else if(age <= underAge){
    discount = 20;
}else if(age >= overAge){
    discount = 40;
}

//Calcolo di soldi da spendere per il viaggio


form.addEventListener('click',function(event){
    event.preventDefault();
    const age = document.getElementById("age");
    const kilomiter = document.getElementById("distance");
    const priceKm = 0.21;
    const overAge = 65;
});

const euroDiscount = ((kilomiter * priceKm)*discount)/100;
const euro = (kilomiter * priceKm);


document.getElementById("euro").innerHTML = `il biglietto costa ${euro.toFixed(2)}€`;
console.log(euro.toFixed(2));