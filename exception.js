try{
    let recompenses = prompt("choisissez une récompense:\n1. épée \n2.arc \n3.haches");
    let degats;

    switch(recompenses){
        case "épée":
            degats = 40;
            break;
        case "arc":
            degats = 30;
            break;
        case "haches":
            degats = 20;
            break;
        default:
            throw new Error("Vous avez tricher")
    }
    alert("Vous avez choisit +" + recompenses + ' (' + degats + ' dégats)');
}
catch(error){
    alert(error);
}
finally{
    alert("Fin du programme");
}