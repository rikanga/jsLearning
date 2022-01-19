// OPERATEUR DE DECOMPOSITION(spread operator)
// example 1: fusionner des tableaux
let fruits = ['fraise', 'banane', 'coco'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];

// example 2: découper une chaine des caractères
let phrase = "bonjour";
let phraseTableau = [...phrase];

// example 3: stocker une partie et garder une autre
let devise = ['dollars', 'euro', 'yen']
let [usd, ...others] = devise;
console.log(others);
console.log(usd);