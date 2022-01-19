// // EXERCICE 1

// let btn = document.querySelector("button")
// let interval;
// let secondes =10;

// btn.addEventListener('click', start)

// function decompte(interval) { 

//     secondes--;

//     if (secondes == 0){
//         stop()
//     }
//     else{
//         document.body.innerHTML = secondes + '<br>';
//     }
// }


// function start(){
//     interval = setInterval(decompte, 1000);
// }

// function stop() {
//     clearInterval(interval);
//     document.body.innerHTML += "Stop !"
// }

//  EXERCICE 2

let btn = document.querySelector("button")
let div = document.querySelector("div")
let hidden = true;

// Cacher le message
div.style.display = 'none';

btn.addEventListener('click', () =>{
    if(hidden){
        btn.textContent = "Cacher";
        div.style.display = "block";
        hidden = false;
    }
    else{
        btn.textContent = "Afficher";
        div.style.display = "none";
        hidden = true;
    }
})
