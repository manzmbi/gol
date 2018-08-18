
creerTable = function(){

  // Nombre des lignes et ceux des colonnes
  let nombreDeLigne = 50;
  let nombreDeColonne = 50;
  
  // Acceder a l'element Body
  let body = document.getElementsByTagName("body");

   // On acceder a l'element table
   let table = document.getElementById('table');

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
      // td.setAttribute("id",i+j);
      tr.appendChild(td);
    }
 
    // Puis chaque <tr> à son parent <tbody>
    tbody.appendChild(tr);
  }
 
  // Puis l'élément <tbody> est attaché à son élément parent <table>
  table.appendChild(tbody);


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
// Acceder a l'element
bouton.addEventListener('click', function() {
if (bouton.textContent === 'Start'){
  bouton.textContent = 'Pause';
  console.log('Pause');
}

else if (bouton.textContent === 'Pause'){
  bouton.textContent = 'Continue';
  console.log('Continue');
  
}

else if (bouton.textContent === 'Continue'){
  bouton.textContent = 'Pause';
  console.log('Pause');
  
}


})



