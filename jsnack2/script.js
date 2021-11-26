/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/ 

const list = ['aldo', 'giovanni', 'giacomo', 'marina', 'claudio', 'laura'];

let guest = prompt("Inserisci il tuo nome:");

let find = false;
// Ciclo For
// for (let index = 0; index < list.length; index++) {
//     let nameList = list[index];
//     if (guest.toLowerCase() == nameList.toLowerCase()) {
//       find = true;
//     }  
// }

// Ciclo While
let index = 0;
while (index < list.length && find == false){
    if (guest.toLowerCase() == list[index].toLowerCase()) {
    find = true;
    }
    index++;
}


if (find == true) {
    console.log ( 'puoi entrare');
} else{
    console.log ( 'Non puoi entrare');
}