creerTable = function(){

  // Nombre des lignes et ceux des colonnes
  let nombreDeLigne = 50;
  let nombreDeColonne = 50;
  
  // On acceder a l'element Body
  let body = document.getElementsByTagName("body")[0];

   // On crée d'abord l'élément <table>.
  let table = document.createElement("table");
   // let table = document.getElementById('table');

  // Ensuite, On crée l'élément <tbody> qui est un enfant de l'élément <table>.
  let tbody = document.createElement("tbody");

 
  // Puis, grâce à une boucle, on crée les éléments <tr>, qui sont des enfants de l'élément <tbody>.
  for (let i = 0; i < nombreDeLigne; i++) {
    let tr = document.createElement("tr");

  // Pour chaque élément <tr>, on emploie une boucle pour créer les éléments enfants <td>.
    for (let j = 0; j < nombreDeColonne; j++) {
      let td = document.createElement("td");
     // let textcell = document.createTextNode(i+j);
      // td.appendChild(textcell);
      td.setAttribute("id",i+j);
      tr.appendChild(td);
    }
 
    // Puis chaque <tr> à son parent <tbody>
    tbody.appendChild(tr);
  }
 
  // Puis l'élément <tbody> est attaché à son élément parent <table>
  table.appendChild(tbody);

  // Enfin, <table> est rattaché à <body>   
  body.appendChild(table)

} 

creerTable()


// changer la couleur 
let td = document.getElementsByTagName('td');
for ( let i = 0; i < td.length; i++) {
  let tdindex = td[i];
  tdindex.addEventListener('click', function () {
      tdindex.classList.toggle('mort')
    })
}


// changer le contenue du bouton start en pause
let bouton = document.querySelector('.bouton');
bouton.addEventListener('click', function() {
bouton.textContent = 'pause';
// changer le contenu du bouton pause en continue
if(bouton.textContent =='pause') {
  bouton.addEventListener('click', function() {
    bouton.textContent = 'continue'
})
}
else if (bouton.textContent == 'continue') {
bouton.addEventListener('click', function () {
  bouton.textContent = 'pause';
})
}


})



