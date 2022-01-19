let a = document.querySelector('a');
let button = document.querySelector('button');
let h1 = document.querySelector("h1");
let article = document.querySelector('article')

// UTILISATION DES PROPRIETES JAVASCRIPTS
// a.onclick = () =>{
//     if(confirm("Voulez vous vraiment quitter ?")){
//         location.href = "www.google.com/"
//     }
// }

// button.onmouseover = () => {
//     document.body.style.backgroundColor = "grey";
// }
// button.onmouseout = () => {
//     document.body.style.backgroundColor = "white";
// }

// UTILISATION DU GESTIONNAIRE DES EVENEMENTS
// a.addEventListener("click", () => {
//     // document.body.append(document.createElement("input"));
//     if(confirm("voulez vous quitter ?")){
//         location.href = "www.goggle.com";
//     }
// })

// button.addEventListener('mouseover', () =>{
//     // button.style.color = "red";
//     // button.style.fontSize = "3em";
//     document.body.style.backgroundColor = 'orange';
// })

// button.addEventListener("mouseout", () =>{
//     // button.style.fontSize = '1em';
//     document.body.style.backgroundColor = "white";
// })

// article.addEventListener('mouseover', () => {
//     document.querySelector('article').style.backgroundColor = "red"
// })

// // SUPPRIMER UN EVENEMENT
// button.removeEventListener("mouseover");

// PROPAGATION DES EVENEMENTS
// article.addEventListener("click", () => {
//     alert("Article cliqué");
// })

// h1.addEventListener("click", (e) => {
//     alert('h1 cliqué');
//     e.stopPropagation();
// })

// TEMPS D'EXECUTION
// setTimeout("alert('Hello World')", 3000);    // On exécute une fois aprs 3s
// setInterval("alert('Bonjour everybody')", 5000);    // On s'exécute plusieurs fois après 5s

// -- Suppresssion des temps d'éxécution
let timer = setTimeout("alert(Bonjpur à tous)", 3000);
clearTimeout(timer) // On supprime le timer

let interval = setInterval("alert('Coucou !')", 5000);
clearInterval(interval) // On supprime l'interval et ne s'exécute pas
