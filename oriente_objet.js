// // 1. OBJET LITTERAL
// let richard = {
//     prenom:'Richard',
//     nom   :"Kangamba",
//     poste : "DG",
//     email : "richardkangamba3@gmail.com",
    
//     sePresenter: () =>{
//         console.log("Bonjour je m'appelle " + richard.prenom);
//     }
// }

// // -- Objet litteral pour communiquer avec les API
// function recevoirCoordonnees() {
//     return {lattitude:234, longitude:464}
// }
// let coordonnees = recevoirCoordonnees();
// console.log(coordonnees);


// OBJET AVEC CONSTRUCTEUR PERSONNALISE
// -- Création de la fonction constructeur
// function Utilisateur(nom, prenom, email){
//     this.nom = nom,
//     this.prenom = prenom,
//     this.email = email
// }

// user = new Utilisateur("richard", 'kangamba', 'richard@user.com');
// user.nom = 'pele';
// user.prenom = 'fred';
// user.email = 'pelefred@gmail.com';
// user.poste = "Secrétaire";
// console.log(user);

// function Logement(type, annee, placeDeParking, proprietaire){
//     this.type           = type,
//     this.annee          = annee,
//     this.placeDeParking = placeDeParking,
//     this.proprietaire   = proprietaire
// }

// logement1 = new Logement("Appartement", '2022', 'Oui', user);
// console.log(logement1.proprietaire.email)

// OBJET AVEC LE CONSTRUCTEUR Object()
// var monObjet = new Object();
// monObjet.titre = "Souffle de vie";
// monObjet.heure = 5;
// console.log(monObjet);

// -- Ajouter une methode grâce au prototype
// Utilisateur.prototype.sePresenter = function(){
//     console.log("Je suis ", this.nom, " vous pouvez me joindre à l'addresse: ", this.email);
// }

// var user2 = new Utilisateur('kan', 'rich', 'rik@kan.com');
// user2.sePresenter();

// var kib = new Utilisateur("kib", 'raph', 'kib@raph.com');
// kib.sePresenter();

// HERITAGE

// -- constructeur Animal(nombrePattes, poids)
// function Animal(nombrePattes, poids) {
//     this.nombrePattes  = nombrePattes,
//     this.poids = poids
// }

// Animal.prototype.presentation = function () {
//     console.log("Cet animal possède " + this.nombrePattes + " pattes et " + this.poids + " kg de poids.")
// }
// // -- constructeur Oiseau(nombrePattes, poids, ongueurDesAils)
// function Oiseau(nombrePattes, poids, longueurDesAils){
//     Animal.call(this, nombrePattes, poids);
//     this.longueurDesAils = longueurDesAils;
// }
// Oiseau.prototype = Object.create(Animal.prototype)  
// Oiseau.prototype.constructor = Oiseau;

// // -- constructeur Maminfere(nombrePattes, poids, typeDePoils)
// function Maminfere(nombresPattes, poids, typeDePoilds){
//     Animal.call(this, nombresPattes, poids);
//     this.typeDePoilds = typeDePoilds;
// }

// var perroquet = new Oiseau(2, "2kg", "Grandes");
// console.log(perroquet.nombrePattes);
// console.log(perroquet);
// perroquet.presentation();


// Bind, Call et Apply

// let gandalf = {titre:"Magicien"};

// function direBonjour(arme, poids){
//     console.log("Bonjour " + this.titre + " vous possédez " + arme + " de " + poids + " kg.");
// }

// direBonjour.call(gandalf, ' un bois mort', '17');


// -- Bind
// this.titre = "Window";

// let monObjet2 = {
//     titre:"Objet",
//     getValeur:function(){
//         console.log(this.titre)
//     }
// }

// let maValeur  = monObjet2.getValeur.bind(monObjet2);
// maValeur();

// LES CLASSES
class Users{
    constructor(prenom, nom, email){
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    }
    sePresenter(){
        console.log("Je m'appelle " + this.prenom + ' ' + this.nom + 
        ' et vous pouvez me contacter à l\'adresse ' + this.email +  '.');
    }
}

// let mark = new Users('mark', 'zuckerberg','mark@facebook.com');
// mark.sePresenter();

// -- Challenge

// class Animal{
//     constructor(nombreDePattes, poids){
//         this.nombreDePattes = nombreDePattes;
//         this.poids = poids;
//     }
//     presentation(){
//         console.log("Cet animal possède " + this.nombreDePattes + ' pattes et a ' +this.poids + ' kg.')
//     }
// }

// class Oiseau extends Animal{
//     constructor(nombreDePattes, poids,longueurDesAils){
//         super(nombreDePattes, poids);
//         this.longueurDesAils = longueurDesAils;
//     }
//     voler(){
//         console.log("L'oiseau vole.")
//     }
// }

// class Maminfere extends Animal{
//     constructor(nombreDePattes, poids,typeDePoilds){
//         super(nombreDePattes, poids);
//         this.typeDePoilds = typeDePoilds;
//     }
// }

// let oiseau = new Oiseau(2, "5", "Grande");
// oiseau.presentation();
// oiseau.voler()

// LE GETTER ET SETTER
 
class User{
    constructor(prenom, nom, email){
        this.prenom = prenom,
        this.nom = nom,
        this.email = email
    }

    get nomComplet(){
        return this.prenom + " " + this.nom;
    }

    get NameUser(){
        return this.nom;
    }
}

let rich = new User('rich', 'kan', 'rich@kan.com');
console.log(rich.NameUser)