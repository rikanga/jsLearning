// let nombreUn = 10, nombreDeux = 5, result;
// result = nombreDeux + nombreUn
// console.log("Result: " + result);
// console.log("Nombre deux " + nombreDeux)

// alert("Hello world !")   // Donnez l'alerte
// confirm("Voulez-vous vraiment supprimer ?")   // Confirmer le resultat

// if(confirm("Voulez-vous vraiment supprimer")){
//     // Oui
//     alert('Suppression effectuée avec succès');
// }
// else{
//     // Non
//     alert("Elèment non supprimé !");
// }

let age = prompt("Tapez votre âge:");

conf = confirm("Vouslez enregister cet age?");
if(conf){
    // Oui
    alert("Age ajouté");
}
else{
    alert("Age npn ajouter");
}