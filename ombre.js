let button = document.querySelector('#mode');
let span = document.querySelector('span');

if(localStorage.getItem("theme")){
    if(localStorage.getItem('theme') == 'sombre'){
        modeSombre();
    }
}

button.addEventListener('click', ()=>{
    if(document.body.classList.contains('dark')){
        // On passe en mode clair
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    }
    else{
        // On passe en mode sombre
        modeSombre();
        console.log("sombre")

    }
})

function modeSombre() {
    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre')
}
// console.log(document.querySelector('.container').classList);