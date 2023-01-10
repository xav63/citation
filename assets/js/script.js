let firstQuote = {
    debut: ["On peut tromper",],
    milieu: ["mille fois mille personnes",],
    fin: ["mais on peut pas tromper mille fois une personne",],
}

let secondQuote = {
    debut: ["Le doute tue plus", "Gardez toujours votre visage vers", "Que vous pensiez pouvoir", "Votre talent détermine ce que vous pouvez faire.", "Le bonheur de votre vie"],
    milieu: ["de rêve que l'échec", "le soleil, et les ombres tomberont", "ou non,", "Votre motivation détermine combien vous êtes prêt à faire.", "dépend de"],
    fin: ["ne le fera jamais.", "derrière vous.", "vous avez raison.", "Votre attitude détermine à quel point vous le faites.", "la qualité de vos pensées."],
}

let citation1 = document.getElementById("citation1");
let citation2 = document.getElementById("citation2");

/*citation1.innerHTML = firstQuote.debut[0] + " " + firstQuote.milieu[0] + " " + firstQuote.fin[0];*/
citation2.innerHTML = secondQuote.debut[0] + " " + secondQuote.milieu[0] + " " + secondQuote.fin[0];

citation1.addEventListener('submit', function(){
    let citation1 = document.getElementById("citation1");
    citation1.innerHTML = firstQuote.debut[0] + " " + firstQuote.milieu[0] + " " + firstQuote.fin[0];
});