var monBouton = document.querySelector('button');

function changerStyle(){
	document.getElementById('parag1').style.color="lightblue";
	document.getElementById('parag1').style.border="red 10px dotted";
    document.getElementById('parag1').style.padding="5px";
    document.body.style.backgroundColor = "black";
}

monBouton.onclick = function() {
	changerStyle();
}