// function timer(secondes){
//     if(secondes > 0){
//         console.log(secondes)
//         timer(secondes - 1);
//     }
//     else{
//         console.log(secondes)
//     }
// }
// timer(10)

// EXERCICES
let resultat = 0;
function somme(nombre){
    if (nombre > 0){
        resultat += nombre; 
        somme(nombre - 1);
    }
}
somme(100)
console.log(resultat)