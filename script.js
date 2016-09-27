// recuperation du bouton dans le HTML
var monBouton = document.querySelector('button');

function changerStyle(){
	// Changement de la couleur du texte dans le paragraphe
	document.getElementById('parag1').style.color="lightblue";
	// Ajout d'une bordure
	document.getElementById('parag1').style.border="red 10px dotted";
	// Ajout d'un padding
    document.getElementById('parag1').style.padding="5px";
    // Changement de la couleur de fond du body
    document.body.style.backgroundColor = "black";
}

// Activation de la fonction changerStyle() lors du clic sur le bouton
monBouton.onclick = function() {
	changerStyle();
}