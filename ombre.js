let button = document.querySelector('#mode');
let span = document.querySelector('span');

function modeSombre() {
    
}

if(localStorage.getItem('theme')){
    if(localStorage.getItem("theme") == 'sombre'){
        modeSombre();
    }
    else{
        // On reste en mode blanc
    }
}
else{

}


button.addEventListener('click', ()=>{
    document.body.style.background = 'black'
    span.textContent = "Thème clair"
})
console.log(document.querySelector('.container').classList);