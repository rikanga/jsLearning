// // ACCEDER AUX BALISES
// let header = document.getElementsByTagName("header");
// console.log(header);

// // ACCEDER A L'ID
// let logo = document.getElementById("logo")
// console.log(logo);

// // ACCEDER A UNE CLASS
// let container = document.getElementsByClassName('container');
// console.log(container);

// // PROPRIETE GENERALE D'ACCES AUX ELEMENTS
// let h1 = document.querySelector('h1'); // On accède à la balise h1
// console.log(h1);

// let p = document.querySelector('p')
// console.log(p)

// // SELECTION DE TOUS LES ELEMENTS
// let p_all = document.querySelectorAll("p");
// console.log(p_all);


// MODIFIER LES ELEMENTS DU DOM

// -- Modifier le texte d'un élèment
// let h1 = document.getElementsByTagName('h1');
// let h1 = document.querySelector('h1');
// h1.textContent = "God is good";
// h1.innerHTML = "<div style='font-weight:normal; color:grey;'> God is in live </div>";
// console.log(h1)


// AJOUT DES ELEMENTS AU DOM
// -- Ecrire juste du texte
// document.body.append('  Salut');
// let body = document.querySelector("body")
// body.append(" Je vous salut")

// let h1 = document.querySelector("h1")
// h1.append("  Jésus est vivant")

// let h2 = document.querySelector("h2");
// h2.append(" Test")

// -- Ajouter des objets
// --- Créer un élèment
// let helloWorld = document.createElement('div')  // On crée un div

// --- Personnaliser l'élèment
// helloWorld.textContent = "Hello World";

// --- Ajouter l'élèment à la page
// document.body.append(helloWorld);
// document.body.insertBefore(helloWorld, document.querySelector('.container'))

// document.querySelector('.container').prepend(helloWorld); // Ajout de l'objet helloWorld

// SUPPRIMER L'ELEMENT DU DOM
// -- methode 1: récupérer d'abord l'élèment
// let h1 = document.querySelector("h1");
// h1.remove();

// document.querySelector('h1').remove()


// MODIFIER LE STYLE DES ELEMENTS
let header = document.querySelector('header');
// header.style.color = "red"
header.style.backgroundColor = "#ffbd69";
document.querySelector("h2").style.color = "#111d5e";
document.querySelector('h2').style.textAlign = "center";
document.querySelector('h1').style.textTransform = "capitalize";
document.querySelector('body').className = "ma_class"
// console.log(helloWorld);
// document.body.append("Test d'écriture sur le fichier html")