// Créer une cookie

document.cookie = "prenom=richard";
document.cookie = 'pwd=test';

console.log(document.cookie);

// Modifier le cookie
document.cookie = "prenom=manasse";
document.cookie = 'pwd=juste';
console.log(document.cookie);

// Supprimer le cookie
document.cookie = 'prenom=';

// Options
// -- path
document.cookie = "prenom=richard; path=/admin"

// -- domain
document.cookie = "prenom=richard; path=/admin; domain=moneynow.com";