// Fonction pour additionner

function addition(nombreA, nombreB){
    return nombreA + nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB){
    if(nombreB == 0){
        throw new Error("Impossible de diviser un nombre par 0.")
    }
    return nombreA / nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB){
    return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB){
    return nombreA - nombreB;
}


// LES BOUCLES
do{
    var choix = Number(prompt("Quez souhaitez-vous faire? \n 1. Addition \n 2. Multiplication \n 3. Soustraction \n 4. Division\n"));
}while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

do{
    var premierNombre = Number(prompt("Tapez le premier nombre: "));
    var deuxiemeNombre = Number(prompt("Tapez le segond nombre: "));
}while(isNaN(premierNombre) || isNaN(deuxiemeNombre))


// LES CONDITIONS
try{
    switch(choix){

        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error("Une Erreur est survenue !")
        
        }
    alert("Voici le resultat " + resultat);
}
catch(error){
    alert(error)
}