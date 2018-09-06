
 // Nombre des lignes et ceux des colonnes
 let nombreDeLigne = 50;
 let nombreDeColonne = 50;
 
creerTable = function(){
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



// changer la couleur des cellules en cliquant
changerColeurCellule = function () {
  let td = document.getElementsByTagName('td');
  for ( let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function () {
        td[i].classList.toggle('mort')
      })
  }
}

changerColeurCellule()



// changer le contenue du premier bouton start en pause <<==>> continue

let changerContenuBouton1 = function () {
// Acceder a l'element bouton
let bouton = document.querySelector('.bouton');
// Ajouter un ecouteur puis l'evenement
bouton.addEventListener('click', function() {
  //Verification contenu bouton Start en Pause
if (bouton.textContent === 'Start'){
  bouton.textContent = 'Pause';
}
  //Verification contenu bouton Pause en Continue
else if (bouton.textContent === 'Pause'){
  bouton.textContent = 'Continue';  
}
  //Verification contenu bouton continue en pause
else if (bouton.textContent === 'Continue'){
  bouton.textContent = 'Pause';
}
})
}

changerContenuBouton1()




 
// La fonction : Generer aleatoirement les cellules mortes et vivantes
let genereAleatoireBinaire = function() {
  let td = document.getElementsByTagName('td');
  for ( let i = 0; i < td.length; i++) {
    // let x = Math.round(Math.random());
    // Changer les cellules qui contienent 1 en noir
    // x === 0 ? td[i].className = "mort" : td[i].className = "vivant";
    td[i].className = Math.round(Math.random()) === 0 ? "mort" : "vivant"; 
    // if (x === 0){
    //   td[i].className = "mort";
    //   }
    // // Changer les cellules qui contienent 0 en blanc
    // else {
    //   td[i].className = "vivant";
    //   }
      
    }
  }

// Clique sur le bouton random, Appeler la fonction genereAleatoireBinaire
let boutonRandom = document.querySelectorAll('.bouton')[1]
boutonRandom.addEventListener('click',function() {
  genereAleatoireBinaire()
})





// creation d'un tableau virtuel

let createTableauVirtuel = function() {
  let tableauVirtuel = [];
  // recuperer le tableau physique HTML
  let tableauNavigateur = document.getElementById('table');
  //parcourir toutes les lignes
  for (var i = 0; i < nombreDeLigne.length; i++) {
    let tr = document.getElementsByTagName('tr');
    let trs = tr[i];
    // creation d'un array vide qui contiendra les 'tr virtuel'
    let trVirtuel = []
    // ajouter les 'tr virtuel' dans le tableau virtuel
    tableauVirtuel.push(trVirtuel);

    // Parcourir et Ajouter les donnees des cellules dans le 'tr virtuel'
    for (var j = 0; i < nombreDeColonne.length; j++) {
    let td = document.getElementsByTagName('td');

       // verification
      // if (td[j].className === 'mort' ) {
      //   trVirtuel.push(1);
      // }  
      // else {
      //   trVirtuel.push(0);
      // }
      td[j].className === 'vivant' ? trVirtuel.push(1) : trVirtuel.push(0);
    }
  }
  return tableauVirtuel;
}
createTableauVirtuel()


  
























// clique sur bouton reset pour reset
let boutonReset = document.querySelectorAll('.bouton')[2]
boutonReset.addEventListener('click',function() {
  
})




