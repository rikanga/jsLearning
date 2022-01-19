// TABLEAU SIMPLE
// let monTableau = new Array("un", "deux", "trois", "quatre");
// let monTableau2 = Array("un", "deux", "trois", "quatre");
let tableau = ["un", "deux", "trois", "quatre"]

// console.log(monTableau, " new Array");
// console.log(monTableau2, " Array");
// console.log(tableau, " []");

// TABLEAUX COMPLEXES
let monTableau2D = [
    ['Mark', "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"]
];

// TABLEAU ASSOCIATIF
let tableauAssociatif = {
    'nom':"richard",
    "sexe":"m",
    "profil":"programmeur"
};
// console.log(tableauAssociatif);

// ACCEDER AUX ELEMENTS DU TABLEAU

// console.log(tableau[1])
// console.log(tableauAssociatif['nom'])
// console.log(tableauAssociatif.profil);

// NOMBRE D'ELEMENTS OU TAILLE DU TABLEAU
// console.log(tableau.length); // Renvoie 4
// console.log(tableau[tableau.length - 1]) // Accès au dernier élèment

// AJOUT DES ELEMENTS DANS LE TABLEAU
// tableau.push("six");
// tableau.unshift("zéro");
//console.log(tableau);

// monTableau2D[0].push('test')
// console.log(monTableau2D)

// tableauAssociatif['nationalité'] = "américaine";
// console.log(tableauAssociatif)

// SUPPRESSION DES ELEMENTS DU TABLEAU
// tableau.pop();  // suppression du dernier élèment
// tableau.shift() // Suppression du premier élèment

// monTableau2D.pop()
// monTableau2D.shift()
// monTableau2D[0].pop()
// monTableau2D[1].shift()
// delete(tableauAssociatif.profil);

// Retrouver l'élèment grâce à son index
//console.log(tableau.indexOf("deux"))

// JOINDRE LES ELEMENTS DU TABLEAU
// console.log(tableau.join(", "))

// FONCTION splice()
//tableau.splice(4, 0, 'random', 'pie', 'Math')
//monTableau2D.splice(2, 0, [35, 60, 67]);


// BOUCLE FOR... IN ...
// for (const i in tableau){
//     // console.log(i); // Index des élèments du tableau
//     // console.log(tableau[i]) // Valeurs des élèments du tableau
//     console.log(i, tableau[i])  // Index et valeur dees élèments
// }

// BOUCLE FOR ... of ...
// for(const i of tableau){
//     // console.log(i) // Valeurs des élèments
//     console.log(tableau.indexOf(i), i) // Index et valeurs élèments
// }
// console.log(monTableau2D)

// BOUCLE FOREACH
// let listPays = ["France", "Belgique", "Japon", 'Maroc']
// // listPays.forEach(pays => console.log(pays))
// listPays.forEach(function(pays){
//     console.log(listPays.indexOf(pays), pays);
// })

// CONCATENER LES VALEURS DU TABLEAU ASSOCIATIF
// let concat = '';
// for(const index in tableauAssociatif){
//     concat += index + " : " + tableauAssociatif[index] + "\n";
// }

// function concatTableauAssociatif(tableau){
//     let concat = '';
//     for (const key in tableau){
//         concat += key + ' : ' + tableau[key] + "\n"
//     }
//     console.log(concat);
// }

// DECOMPOSITION PAR AFFECTATION
let user = ['Rikanga', '22', 'homme'];
let [username, age, sexe] = user;
console.log(username, " ", age, " ", sexe)