// function abracadabra(){

//     let first_name = prompt("Bienvenue cher Utilisateur:\n\nVeuillez tapez votre prénom: ");
//     let name = prompt("Veuillez taper votre :");
//     let age = prompt("Veuillez taper votre âge: ");

//     alert("Sapristi ! Je ne savais pas que c'était toi, " + first_name + 
//     " ! Euh... je veux dire... Monsieur le grand magicien " + name + 
//     " ! Cela fait " + age + " ans que vous faites rayonner notre contrée !");
// }

// abracadabra();

function calculerIMC(weight, height){

    height = height /100;        // Conversion de la taille en mètre
    height = Math.pow(height, 2);
    let result = weight / height;

    alert("Votre imc est: " + result);
}

// Test
let poids = prompt("Bienvenue cher Utilisateur \n\nQuel est votre poids? :");
let taille = prompt("Quelle est votre taille (en cm) ? : ");

calculerIMC(poids, taille)