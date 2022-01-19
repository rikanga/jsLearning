//let i = 1;

// BOUCLE WHILE
// while(i < 5){
//     console.log('Ligne ' + i);
//     i ++;
// }

// BOUCLE DO ... WHILE;

// let prenom;
// do{
//     var prenom = prompt("Quel est votre prénom ?"); // variable globale
// }while(prenom == "" || prenom == null)

// alert("Votre prénom est : " + prenom);


// BOUCLE FORT
for(let i = 1; i < 5; i++){
    console.log("Ligne " + i);

    if(i == 3){
        console.log("continuité de la boucle");
        continue;
    }
}