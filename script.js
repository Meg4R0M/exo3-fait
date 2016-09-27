var Button1 = document.createElement('button');
Button1.setAttribute('onclick', 'genererHTML()');
var textNode = [document.createTextNode('Tu veux du HTML ?')];
Button1.appendChild(textNode[0]);
document.body.appendChild(Button1);

function genererHTML(){
	// On efface le contenu de "body"
	document.body.innerHTML = "";
    // On crée les éléments conteneurs
	var mainP = document.createElement('p');
	mainP.id = 'parag1';

	// On crée tous les nœuds textuels, pour plus de facilité
	var textNodes = [
    	document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'),
    	document.createTextNode('tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'),
    	document.createTextNode('quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'),
    	document.createTextNode('consequat.'),
    	document.createTextNode('Clique-moi, je suis transformiste :D')
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
	// Nous finissons par inserer le "div" dans notre "body"
	document.body.appendChild(mainP);
	document.body.appendChild(w3cButton1);
}

// Activation de la fonction changerStyle() lors du clic sur le bouton
function changerStyle(){
	// Changement de la couleur du texte dans le paragraphe
	document.getElementById('parag1').style.color="lightblue"; //getElementById => prendre l'element avec l'ID
	// Ajout d'une bordure rouge de 10px dotted
	document.getElementById('parag1').style.border="red 10px dotted";
	// Ajout d'un padding de 5px
    document.getElementById('parag1').style.padding="5px";
    // Changement de la couleur de fond du body
    document.body.style.backgroundColor = "black"; //Dans le "body" (html), modifier le "style" (CSS), en choisissant "backgroundColor" (Propriete)
	// On rend invisible le "button"
	monButton = document.querySelector('button');
	monButton.style.display = 'none';
}
