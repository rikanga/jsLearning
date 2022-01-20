// function direBonjour() {
//     console.log("Bonjour cher papa");
// }

// function test() {
//     console.log("Test");
// }

// setTimeout(direBonjour, 3000);
// test();

// let i = 0;

// console.log("Fonction commencée.");

// while (i < 999999){
//     i++;
// }

// console.log("Fonction terminée.");

// LES PROMESSES
// -- honorée, encours, rompue

// let promesse = new Promise((resolve, reject)=>{
//     //  Pour des tâches asynchrones

//     // resolve(): pour une promeese réussit,

//     // reject() : pour une promesse échouée
// });

function chargerScript(script) {
    // Fonction pour charger le script js automatiquement
    return new Promise((resolve, reject)=>{

        // Créer un élèment
        let element = document.createElement("script");
        element.src = script;

        document.head.append(element);

        // fonction resolve()
        element.onload = ()=> resolve("Le fichier " + script + " a été chargé.");

        // fonction reject
        element.onerror = () => reject(new Error("Opération impossible pour le fichier " + script));
    })
}

const promesse = chargerScript('test.js');
promesse.then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log(error);
    }
)

