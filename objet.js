// let chien = {
//     race:'shiba',
//     poil:'court',
//     aboyer:function(){
//         console.log("Ouaf Ouaf");
//     }
// }

// let chanteur = {
//     nom:"athom's",
//     sexe:"m",
//     album:"psaumes",
//     chanter:(cantique) => {
//         console.log(chanteur.nom + " chante " + cantique);
//     }
// }
// chanteur.chanter("Emmanuel");

// OBJET SET
let nombres = [3, 45, 48, 10, 45, 32, 3];
// let monSet  = new Set(nombres);

// let monSet = new Set();
// monSet.add("richard"), monSet.add(22);
// monSet.add(nombres);

// monSet.delete(22);   // Supprimer élèment

// OBJET MAP
// let monMap = new Map([["richard", "m"], ["hélène", 'f']])

// let monMap = new Map([
//     ['nom', 'Elon'],
//     ['prenom', 'Musk']
// ]);

// monMap.set("poste", 'PDG Testla');
// monMap.delete("poste")

// let utilisateurs = new Map();
// utilisateurs.set("richard", {
//     email:"richard@gmail.com",
//     sexe:'m',
//     ville:'Kinshasa'
// })

// utilisateurs.set('monique', {
//     email:"monique@rik.com",
//     sexe:"f",
//     ville:'kinshasa'
// })

// OBJET WeakSet
// let voiture = new WeakSet();

// let voitureA = {
//     constructeur:"Tesla",
//     model:"Cybertruck"
// }

// let voitureB = {
//     constructeur:'Renault',
//     model:"Espace"
// }
// voiture.add(voitureA), voiture.add(voitureB)
// voiture.delete(voitureB)

// let voiture = new WeakSet([voitureA, voitureB]);    // Ajout des objets à la création du WeakSet

// L'OBJET WEAKMAP
let voitureA = {
    constructeur:"Tesla",
    model:"Cybertruck"
}

let index = {
    id:"1"
}

let voiture = new WeakMap();
voiture.set(index, "5")
console.log(voiture);