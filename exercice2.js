let result;
let number1;
let number2;
let operation;
//let position = true;

function addition(number1, number2){
    result = number1 + number2;
    alert("La somme donne: " + result);
}

function division(number1, number2){
    result = number1 / number2;
    if (number2 == 0){
        alert("Impossible de diviser un nombre par 0.");
    }
    else{
        alert("Le quotient donne: " + result);
    }
}

function multiplication(number1, number2){
    result = number1 * number2;
    alert("Le produit donne: " + result);
}

function soustraction(number1, number2){
    result = number1 - number2;
    alert("La différence donne: " + result);
}

function compile(){
    do{
        operation = Number(prompt("Quez souhaitez-vous faire? \n 1. Addition \n 2. Multiplication \n 3. Soustraction \n 4. Division\n"));

        switch(operation){
            case 1:
                number1 = prompt("Tapez le premier nombre");
                number2 = prompt("Tapez le deuxième nombre");
                addition(number1, number2);
                position = false;
                break;

            case 2:
                number1 = prompt("Tapez le premier nombre");
                number2 = prompt("Tapez le deuxième nombre");
                multiplication(number1, number2);
                position = false;
                break;

            case 3:
                number1 = prompt("Tapez le premier nombre");
                number2 = prompt("Tapez le deuxième nombre");
                soustraction(number1, number2);
                position = false;
                break;

            case 4:
                number1 = prompt("Tapez le premier nombre");
                number2 = prompt("Tapez le deuxième nombre");
                division(number1, number2);
                position = false
                break;
            default:
                break;
        }
    }while(operation != 1 && operation != 2 && operation != 3 && operation != 3)
}

compile();