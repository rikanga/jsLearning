// LES DATES
// timestamp : --> 1er janvier 1970 à 00:00 UTC

// -- Date textuelle anglo-saxonne
// let dateActuel = Date();
// console.log(dateActuel);


// -- Date en secondes
// let dateEnSecondes = Date.now();
// console.log(dateEnSecondes);

// -- Objet Date()
// let dateActuel = new Date(2022, 1);
// console.log(dateActuel.getHours()); // jour de la semaine

// console.log(dateActuel.getDate());  // Jour du mois

// TRANSFORMER UNE DATE AU FORMAT LOCAL
//  let dateActuelle = new Date();
//  let langue = navigator.language;

//  let dateLocale = dateActuelle.toLocaleString(langue,{
//      weekday:'long',
//      year:'numeric',
//      month:"long",
//      day:'numeric',
//      minute:'numeric',
//      second:'numeric'
//  });

// //  console.log(dateLocale)
// //  console.log(navigator.language);

//  console.log('-----------------------');
//  let dateAnglaise = dateActuelle.toLocaleString('en-EN', {
//      weekday:'long',
//      day:'numeric',
//      month:'numeric',
//      year:'numeric'
//  })

//  let div = document.createElement('div');
//  console.log(dateAnglaise);

//  div.textContent = "Date angliase \n" + dateAnglaise;
//  document.body.append(div);

// LES TEMPLATES STRING
//  -- Avant
// let prenom = 'richard';
// let bonjour = 'bonjour ' + prenom;
// console.log(bonjour);

// -- Maintenant
// let nom ='kangamba';
// let salutation = `Bonjour ${nom}`;
// console.log(salutation);

// let year = new Date().getFullYear();
// console.log(`L'année en cour est ${year}`);

// console.log(`${year} © rikanga`)

// let aliments = {fruits:5, legumes:1, biscuits:75};
// let panier = `Dans votre panier vous avez ${aliments.biscuits + aliments.legumes + aliments.fruits} article .`;
// console.log(panier);

let time = document.querySelector('.time');

// console.log(date_)
time.style.display = 'none';

// function afficher_date() {
//     time.textContent = date_;
//     time.style.display = 'block'
// }

setInterval(() =>{
    let date_ = new Date().toLocaleString(navigator.language, {
        // weekday:'long',
        // year:'numeric',
        // month:'numeric',
        // day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric'
    });

    time.textContent = date_
    time.style.display = 'block';
}, 1000)