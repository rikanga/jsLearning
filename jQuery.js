// //  Avec javaScript
// let h = document.querySelector("h1");

// // Avec jQuery
// // -- Sélectionner un élèment
// h1 = $('h1');   // On sélectionne le titre h1

// // -- Modifier le text d'un élèment
// $('h1').text("Je suis pro de jQuery");
// // $('p').text("Mes paragraphes sont là")

// // -- Ajouter du html
// $(".maClass").html("<p><b>HTML modifié</b></p>")

// // -- Modifier le style
// $('h1').css('color', 'blue')
// $('p').css('color', 'purple')

// // -- Ajouter une classe
// // $('#monId').addClass("important")

// // -- Supprimer une classe
// // $("#monId").removeClass("important");

// // -- Ajout des élèments
// $("h1").after("<div>Coucou</div>");

// // -- Supprimer un élèment
// $("div").remove();

// // -- sélectionner un attribut
// $("h1").attr("class")

// // -- Créer ou modifier un attribut
// $("h1").attr("style", "background-color:pink; color:red")

// // -- Ajouter un évènement
// $("h1").click(()=>{
//     $("h1").css('color', 'blue');
//     $("#monId").addClass("importants")
// })

// $("h1").on("mouseover", ()=>{
//     $("#mondId").addClass("important");
// })

// $("h1").mouseover(()=>{
//     $("#mondId").addClass("important");
// })


// REQUETE AJAX
// const url = 'https://blockchain.info/ticker'

// $.ajax({
//     url:url,
//     type:'GET',
//     datetype:'json',
//     success:(data)=>{
//         $("h1").text(data.EUR.last + " £");
//     },
//     error:()=>{
//         alert("Veuillez patienter !")
//     }
// })

// FAIRE DES ANIMATIONS
// $("h1").hide()  // cacher l'élèment

// $("h1").shwo()   // afficher l'élèment

$("p").click(()=>{
    $("h1").toggle();
})