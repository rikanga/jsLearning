// Etape 1. Sélectionner les élèments
let error      = document.querySelector('small');
let input      = document.querySelector("#prix")
let formulaire = document.querySelector("#formulaire");
let coups      = 0;
let nombreChoisit;

// Etape 2. Cacher l'erreur
error.style.display = 'none'

// Etape 3. Générer un nombre aléatoire
let nombreAletoire = Math.floor(Math.random() * 1001);


// Etape 6: Créer la fonction vérifier
function verifier(nombre){
    let instuction = document.createElement('div')

    if(nombre < nombreAletoire){
        // C'est plus
        instuction.textContent = '#' + coups + " ( " + nombre + " ) C'est moins !";
        instuction.className = "instructions moins";
    }
    else if(nombre > nombreAletoire){
        // C'est moins
        instuction.textContent = '#' + coups + " ( " + nombre + " ) C'est plus !";
        instuction.className = "instructions plus";
    }
    else{
        // Félicitations vous avez trouvé le juste prix
        instuction.textContent = '#' + coups + " ( " + nombre + " ) Félicitation vous avez trouvé le juste prix !";
        instuction.className = "instructions fini";
    }
    document.querySelector("#instructions").prepend(instuction);
}


// Etape 4. Vérifier que l'utilisateur saisissent bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        // Afficher le message d'erreur
        error.style.display = "block";
    }
    else{
        // Cacher le message d'erreur
        error.style.display = 'none';
    }
})


// Etape 5: Agir à l'envoie du formulaire
formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(isNaN(input.value) || input.value == ""){
        // Mettre la bordure du formulaire en rouge
        input.style.borderColor = 'red';
    }
    else{
        // Mettre la bordure du formualaire en gris
        coups++;
        input.style.borderColor = "silver";
        nombreChoisit = input.value;
        input.value = ""; // On réinitialise le nomre choisit
        // console.log(nombreAletoire, 'choisit : ', nombreChoisit);
        verifier(nombreChoisit);
    }
})