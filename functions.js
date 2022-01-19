// function sayHello(){
//     alert("Bonjour tout le monde");
// }
// sayHello();

// function addition(nombreUn, nombreDeux){
//     console.log(nombreUn + nombreDeux);
// }
// addition(5, 8);

// function sayHello(name){
//     alert("Hello " + name);
// }
// sayHello(65738753);

// VARIABLE LOCALE, VARIABLE GLOBALE

// function crieDeGuerre(){
//     let crie = "Toujour plus fort !";
//     console.log(crie);
// }
// crieDeGuerre()

// let nombreUn = 4, nombreDeux = 7;

// function addition(n1, n2){
//     let result = n1 + n2;
//     //   console.log(result);
//     return result; 
// }

// addition(nombreUn, nombreDeux); 

// function demanderAge(){
//     let age = prompt("Quel âge avez-vous ?");
//     alert("Vous avez " + age + " ans");
// }

// demanderAge()

// function prevoirAge(){
//     let age = prompt("Quel âge avez vous ?");
//     age = parseInt(age);
//     alert("Bientôt vous auez " + (age + 1) + " ans");
// }

// prevoirAge()

// let num = "27.50";
// num = Number(num);
// console.log(num);
// console.log(typeof(num));

// console.log("USER OF Number()");

// let val = 20.54;
// val = parseInt(val);
// console.log(val);
// console.log(typeof(val));

// NUMBER CONVERTIT UNE CHAINE DE CARACTERE EN CHIFFRE
// function prevoirAge2(){
//     let age = prompt("Quel âge avez vous maintenant ?");
//     age = Number(age);
//     alert("Vous aurez bientôt " + (age + 1) + " ans")

//     if(confirm("Voulez vous continuer ?")){
//         // Yes continue
//         alert("Bravo. Vous êtes courageux !");
//     }
//     else{
//         // Not continue
//         alert("Revenez plus tard. Merci !");
//     }
// }

// prevoirAge2();

// function mpesa(){

//     let devise = prompt("Choisisez votre device:\n 1. USD\n 2.CDF");
//     devise = parseInt(devise);

//     if(devise === 1){
//         alert("Vous avez choisit le dollar");
//     }
//     else if(devise == 2){
//         alert("Vous avez choisit le franc congolais");
//     }
//     else{
//         alert("Ce choix ne pas reconnu !");
//     }
// }
// mpesa()

// function convertToFloat(){
//     let value = prompt("Tapez un chiffre à convertir en floattant: ");
//     value = parseFloat(value)
//     alert('Votre chiffre en floattant est: ' + value + " son type est: " + typeof(values));
// }

// convertToFloat()
// let nombre = 234;
// console.log(nombre + ' ' + typeof(nombre));

// nombre = nombre.toString();
// console.log(nombre + ' ' + typeof(nombre));

// FONCTION ANONYME

// Stocker la fonction dans la variable
// ------------------------------------
// let fonctionAnonyme = function(){
//     alert("Je suis une fonction anonyme qui parle");
// }

// fonctionAnonyme();

// Auto-exécuter la fonction
// (function(){console.log("Je suis une fonction au-exécutée")
// console.log("\n Je vous dis bonjour")})();

// (function () { 
//     alert("Je suis une function autonôme auto-exécutée !");
// })()

// FONCTIONS FLECHEES
// let test = () =>{
//     console.log("test");
// }
// test()

// let additionFleche = (n1, n2) => {
//     console.log("Le resultat est: ", n1 + n2);
// }
// additionFleche(45, 10);

// let add = (n1, n2) => n1 + n2;
// console.log(add(4, 3))

// let bonjour = () => console.log("Bonjour Monsieur Richard");
// bonjour()

// LES FERMETURES(CLOSURES)
// function bonjour(prenom){
//     let resultat = "Bonjour " + prenom;
//     let closure = () => console.log(resultat);
//     return closure;
// }

// let maFonction = bonjour("Richard");
// maFonction();

// function timer(){
//     let secondes = 0;
//     let closure = () =>{
//         return ++secondes;
//     }
//     return closure;
// }
// let maFonction = timer()
// console.log(maFonction());
// console.log(maFonction());
// console.log(maFonction());

// REST parameter, nombre infinit d'arguments
function addition(...nombres){
    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre
    })
    console.log(resultat);
}

addition(3, 4, 5, 6, 2, 34, 54, 883);