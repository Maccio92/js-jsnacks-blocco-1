/* Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

// const numbers = [];
// let sum = 0;
// for (let index = 0; index < 10; index++) {
//     const number = parseInt(prompt ('Inserisci un numero'));  
//     numbers.push (number);
//     sum += numbers[index];
    
// }
// console.log (sum);

   
const numbers = [];
let sum = 0;
let index = 0;
while ( index < 10) {
    const number = parseInt(prompt ('Inserisci un numero'));  
    numbers.push (number);
    sum += numbers[index];
    index++;
}
console.log (sum);