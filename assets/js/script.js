// Citation gauche
let gauchedebut = ["On peut tromper", "Oh si si", "Il ne peux plus", "Simon,"];
let gauchemilieu = ["mille fois mille personnes", "prenez un chewing-gum,", "rien nous arriver d'affreux", "t'as un bout de pomme de terre"];
let gauchefin = ["mais on peut pas tromper mille fois une personne", "Emile.", "maintenant !", "sur la joue."];
// Citation droite
let droitedebut = ["Le doute tue plus", "Gardez toujours votre visage vers", "Que vous pensiez pouvoir", "Votre talent détermine ce que vous pouvez faire.", "Le bonheur de votre vie"];
let droitemilieu = ["de rêve que l'échec", "le soleil, et les ombres tomberont", "ou non,", "Votre motivation détermine combien vous êtes prêt à faire.", "dépend de"];
let droitefin = ["ne le fera jamais.", "derrière vous.", "vous avez raison.", "Votre attitude détermine à quel point vous le faites.", "la qualité de vos pensées."];

let citation1 = document.getElementById("citation1");
let citation2 = document.getElementById("citation2");
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let menu = document.getElementById("menu")
// Génération aléatoire gauche
let debut = [Math.floor(Math.random() * gauchedebut.length)];
let milieu = [Math.floor(Math.random() * gauchemilieu.length)];
let fin = [Math.floor(Math.random() * gauchefin.length)];
// Génération aléatoire droite
let debut2 = [Math.floor(Math.random() * droitedebut.length)];
let milieu2 = [Math.floor(Math.random() * droitemilieu.length)];
let fin2 = [Math.floor(Math.random() * droitefin.length)];

/*citation1.innerHTML = firstQuote.debut[0] + " " + firstQuote.milieu[0] + " " + firstQuote.fin[0];*/
/*citation2.innerHTML = secondQuote.debut[0] + " " + secondQuote.milieu[0] + " " + secondQuote.fin[0];*/

btn.addEventListener('click', function () {
    console.log(menu.value)
    if (menu.value == "0") {
        alert("Veuillez selectionnez un nombre")
    }
    else {
        citation1.innerHTML = " ";
        for (let i = 0; i < menu.value; i++) {
            citation1.innerHTML = gauchedebut[debut] + " " + gauchemilieu[milieu] + " " + gauchefin[fin];
        }

    }
    
})

btn2.addEventListener('click', function () {
    citation2.innerHTML = droitedebut[debut2] + " " + droitemilieu[milieu2] + " " + droitefin[fin2];
})