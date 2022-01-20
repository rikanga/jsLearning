document.body.style.background = 'darkmagenta';

let div = document.createElement('div');
let input = document.createElement("input");
let send = document.createElement("input");
let form = document.createElement("form");

form.method = "POST";
// form.value = 'changer la couleur';
send.type = 'submit';
send.value = "changer";
input.type = "color";
div.textContent = navigator.language;

document.body.append(div);
document.body.append(form);
document.querySelector("form").append(input);
document.querySelector("form").append(send);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // document.body.append("bonjour")
    console.log(input.value)
    document.body.style.background = input.value;
})