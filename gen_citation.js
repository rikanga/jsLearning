// Sélection des élèments
let nouveau = document.querySelector("#nouveau");
let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");

let dernier = 0;
let nombreAletoire = 0;
 
// Tableau de citation
let citations = [
    ["“ la vie est un mystère qu'il faut vivre, et non un problème à résoudre. “", "Gndhi"],
    ["“Le plus grand risque est de ne prendre aucun risque. “", "Mark Zuckerberg"],
    ["“Soyez le changement que vous voulez voir dans le monde. “", "Gandhi"],
    ["“Méritez votre statut de leader chaque jour. “", "Michael Jordan"],
    ["“A chaque fois que vous vous retrouver du même côté que la majorité, il est temps de prendre du recul, et de réfléchir “", "Mark Twain"],
    ["“Seuelement ceux qui prendront le risque d'aller trop loin découvriront jusqu'où on peut aller. “", 'T.S Elliot'],
    ["“Le succès c'est tomber set fois, se relever huit. “", "Proverbe japonais"],
    ["“Pour gagner votre vie, apprenez à l'école. Pour gagner une fortune, apprenez par vous-même “", "Brian Tracy"],
    ["“Ne vous découragez pas. C'est souvent la dernière clé d trousseau qi ouvre la porte. “", "Zig ziglar"],
    ["“Les gagnants trouvent des moyens et les perdants des excuses “", "F. D. Rosevelt"],
    ["“Un pessimiste voit une difficulté dans chaque opportunité. Un opportuniste voit une opportunité dans chaque difficulté “","Wistonn chruchill"],
    ["“Vous n'êtes jamais trop vieux pour vous fixer de nouveaux buts,ou rendre vos rêves réalités. “", "C.S Lewis"],
    ["“Dans vingt ans vous serez deçus par les choses que ne n'avez pas faites que celles que vous avez faites. Alors sortez de sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez“", "Mark Twain"],
    ["“Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c'est l'âge “", "Brain Tracy"],
    ["“Quand on est concentré sur un seul projet, l'esprit suggère constamment des idées et améliorations qui lui échapperait si il état occupé avec plusieurs projets en même temps. “", "B.T Barnum"],
    ["“Se dédier à  faire tout ce que l'on peut pour aider les autres à obtenir ce qu'ils veulent, c'est le clé du succès. “", "Brain sher"],
    ["“Si vous pensez que vous êtes trop petit pour avoir de l'impact, allez au lit avec une moustique. “", "Anita Rodrick"],
    ["“Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez. “", "Robert Louis Stevenson"],
    ["“L'action est la clé fondamentale de tout succès. “", "Pablo Picasso"],
    ["“Le succès, c'est se promener d'échecs en échecs tout en restant motivés. “", "Wistonn Churchill"],
    ["“Votre avenir est créé par ce que vous faites aujourd'hui pas demain. “","Robert T. Kiyozaki"],
    ["“La vie est insensée lorsque l'on est solitaire“", "Richard Kangamba"]
]

// Evènements
// nouveau.addEventListener('click', () =>{
//     citation.textContent = citations[dernier][0];
//     auteur.textContent = citations[dernier][1];
//     dernier++;
//      if (dernier == citations.length){
//          dernier = 0;
//      }
// })


// Correction
function genererNombreEntier(max){
    return Math.floor(Math.random() * Math.floor(max));
}
nouveau.addEventListener("click", () =>{

    do{
        nombreAletoire = genererNombreEntier(citations.length);
    }while(nombreAletoire == dernier)

    citation.textContent = citations[nombreAletoire][0];
    auteur.textContent = citations[nombreAletoire][1];
    dernier = nombreAletoire;
})