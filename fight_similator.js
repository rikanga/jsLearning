class Personnage{
    constructor(pseudo, classe, sante, attaque){
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }

    get informations(){
        console.log('[ ' + this.pseudo + ' ' + '(' + 
        this.classe +') a' + this.sante +" poids de vie et est au niveau " + this.niveau)
    }

    evoluer(){
        this.niveau++;  
        console.log('[ ' + this.pseudo + ' ] passes au niveau ' + this.niveau + " !")
    }

    veriferSante(){
        if(this.sante <= 0){
            this.sante == 0;
            console.log('[ ' + this.pseudo + ' ]'+ " a perdu .")
        }
    }
}

class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "Magicien", 170, 90);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log('[ ' +this.pseudo +' ] attaque [' + personnage.pseudo + 
        ' ] en lançant un sort [ ' + this.attaque + ' ]' );

        this.evoluer();
        personnage.veriferSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log('[ ' + this.pseudo + ' ] attaque avec son coup spécial puissance des ' + 
        '[ ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégats)')

        this.evoluer();
        personnage.veriferSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log('[ ' + this.pseudo +' ] attaque [' + personnage.pseudo + 
        ' ] avec son épée [ ' + this.attaque + ' ]' );

        this.evoluer();
        personnage.veriferSante();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log('[ ' + this.pseudo + ' ] attaque avec ses haches de guerre ' + 
        '[ ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégats)')

        this.evoluer();
        personnage.veriferSante();
    }
}

// Initialisation des objets pour le combat
var gandalf = new Magicien("Gandalf");
var thor = new Guerrier("Thor");

console.log(thor.informations);
console.log(gandalf.informations); 

gandalf.attaquer(thor);
console.log(thor.informations);

thor.attaquer(gandalf);
console.log(gandalf.informations)

gandalf.coupSpecial(thor);