// // 04ddf3a13b8d29ebd7c170d1e705a2d0
// // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// // VARIABLES(INFORMATIONS)
// // const url = 'https://api.openweathermap.org/data/2.5/weather';
// let ville   = 'Kinshasa'
// let changer = document.querySelector("#changer");

// function recupererMeteo(ville) {
//     const url   = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=04ddf3a13b8d29ebd7c170d1e705a2d0&units=metric`
//     let request = new XMLHttpRequest();

//     request.open('GET', url);
//     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     request.responseType = 'json';
//     request.send()
//     // request.send("q=Paris&appid=04ddf3a13b8d29ebd7c170d1e705a2d0&units=metric");

//     request.onload = ()=>{
//         if(request.readyState === XMLHttpRequest.DONE){
//             if(request.status === 200){
//                 let reponse = request.response;
//                 document.querySelector('#temperature_label').textContent = reponse.main.temp;
//                 document.querySelector("#ville").textContent = reponse.name;
//             }
//             // else if(request.status === 404){
//             //     ville = prompt("Veuillez taper une ville réelle");
//             // }
//             else{
//                 recupererMeteo('kinshasa') // On fixe la ville à kinshasa
//             }
//         }  
//     }
// }

// changer.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     ville = prompt("Saisissez le nom de la ville: ");
// })

// setInterval(()=>{
//     recupererMeteo(ville);
//     if(ville == '' || ville == null){
//         ville = 'kinshasa'
//     }
//     recupererMeteo(ville);
// }, 1000);




// RESOLUTION DU PROJET
let ville = 'Tshikapa';
recevoirTemerature(ville);

let changerVille = document.querySelector("#changer");
changerVille.addEventListener('click', ()=>{
    ville = prompt("Quelle ville souhaitez-vous voir ?");
    recevoirTemerature(ville);
})


function recevoirTemerature(ville) {
    
    const url   = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=04ddf3a13b8d29ebd7c170d1e705a2d0&units=metric`
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = ()=>{
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse     = requete.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                document.querySelector("#temperature_label").textContent = temperature;
                document.querySelector("#ville").textContent = ville;
            }
            else{
                alert("\nUn problème est intervenue, merci de revenir plus tard\n")
            }
        }
    }
}
