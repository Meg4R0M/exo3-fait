function genererHTML(){
    // On crée l'élément conteneur
	var mainP = document.createElement('p');
	mainP.id = 'parag1';
	var mainDiv = document.createElement('div');

	// On crée tous les nœuds textuels, pour plus de facilité
	var textNodes = [
    	document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'),
    	document.createTextNode('tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'),
    	document.createTextNode('quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'),
    	document.createTextNode('consequat.'),
    	document.createTextNode('Fou L\'Bordel')
	];

	// On crée le <button>
	var w3cButton1 = document.createElement('button');
	w3cButton1.setAttribute('onclick', 'changerStyle()');
	w3cButton1.appendChild(textNodes[4]);

	// On insère le tout dans p
	mainP.appendChild(textNodes[0]);
	mainP.appendChild(textNodes[1]);
	mainP.appendChild(textNodes[2]);
	mainP.appendChild(textNodes[3]);
	mainDiv.appendChild(mainP);
	mainDiv.appendChild(w3cButton1);
	document.body.appendChild(mainDiv);
	//document.body.appendChild(mainB);
}

// Activation de la fonction changerStyle() lors du clic sur le bouton
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
