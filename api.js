// Conserver l'URL
const url = 'https://blockchain.info/ticker';

function recupererPrix() {

    // Créer une requête
    let requete = new XMLHttpRequest(); // Laà nous créons un objet pour les requêtes

    // Ouvrir la requête
    requete.open('GET', url);

    // Spécifier le format de données
    requete.responseType = 'json';  // Nous attendons le format 'json'

    // Puis enfin envoyer notre requete
    requete.send();

    requete.onload = function(){
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response; // Stock le resultat renvoyé
                let prixEnEuro = reponse.EUR.last;  // On prends le prix en EURO
                document.querySelector('#price_label').textContent = prixEnEuro;
                // console.log(reponse);
            }
            else{
                alert("Un problème est survenue. Revenez plus tard svp!")
            }
        }
    }
    // console.log("prix actualisé")
}

setInterval(recupererPrix, 1000);


// UTILISER L'API POUR ENVOYER DES DONNEES
const adresseUrl = 'https://lesoublisdelinfo.com/api.php';
let request = new XMLHttpRequest();

// 

// -- UTILISATION DE POST POUR ENVOYER LES DONNÉES
request.open('POST', adresseUrl);

// -- HEADER POUR L'ENVOI DE DONNEES
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// -- LE TYPE DE REPONSE ATTENDU
request.responseType = 'json'; 

// -- ENVOYER LA REQUETE AVEC LES PARAMETRES
request.send('prenom=richard');

// FAIRE SA REQUETE DE CONTROLE DE SUCCES
request.onload = ()=>{
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            let reponse = request.response;
            console.log(reponse);
        }
        else{
            alert("Une erreur est suvernue. Patienter svp!");
        }
    }
}