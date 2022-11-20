var divElt=byId("batonnets");



function byId(id) {
  return document.getElementById(id);
}

function charger(){
nbrbatonnets = byId("nombrebatonnets").value;
var zoneEnleverElt=byId("zoneEnlever");

divElt.innerHTML="";
zoneEnleverElt.innerHTML="";

for(var i=1;i<=nbrbatonnets;i++){
var div =document.createElement("div");
div.className="batonnets"
divElt.appendChild( div );
}

//creer le bouton enlever
var boutonEnlever = document.createElement("BUTTON");
boutonEnlever.type="submit";
boutonEnlever.setAttribute("onClick","enlever()");
var enlever = document.createTextNode("ENLEVER"); 
boutonEnlever.appendChild(enlever);
zoneEnleverElt.appendChild(boutonEnlever);

//creer le champ de saisie
var champ = document.createElement("input");
var txt = document.createTextNode(" batonnets(s).");
champ.type = "text";
champ.id="batonnetsEnlevees";
zoneEnleverElt.appendChild(champ);
zoneEnleverElt.appendChild(txt);		
}

function enlever(){
var batonnetsEnlevees =byId("batonnetsEnlevees").value;

if ((batonnetsEnlevees=="")||(batonnetsEnlevees>3)||(batonnetsEnlevees<1)){
alert("veuillez saisir un nombre compris entre 1 et 3 svp! ");
} else if (nbrbatonnets<batonnetsEnlevees){
alert("Pas assez de batonnets ! ");
} else {
for(var i=batonnetsEnlevees-1;i>=0;i--){
  divElt.removeChild( divElt.lastChild );
}
nbrbatonnets -= batonnetsEnlevees;
alert("Attention,il reste: " + nbrbatonnets + " batonnets(s)");
}

if ( nbrbatonnets == 1){
divElt.innerHTML="<p><strong>Jeux terminé</strong></p>";
}
}

