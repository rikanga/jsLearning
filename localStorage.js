// localStorage.clear();
if(localStorage.getItem('prenom')){
    document.body.append("Bonjour " + localStorage.getItem('prenom'))
    console.log(localStorage.key(0));
    console.log(localStorage.length);
}
else{
    let prenom = prompt("\nQuel est votre prénom ?\n");
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('pwd', 'test')
    document.body.append("Bienvenue " + prenom);
}