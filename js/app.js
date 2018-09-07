let model = {

// Nombre des lignes et ceux des colonnes
nombreDeLigne: 50,
nombreDeColonne:50,
lesClasses:['mort','vivant'],

}



let view = {
  createAndAppend: function(tableData, tableRow){
    let td = document.createElement(tableData);
    tableRow.appendChild(td);
  },
  appendChildV: function(appender, appendedElement){
   appender.appendChild(appendedElement);
  },

  genereAleatoireBinaire: function() {
      let td = document.getElementsByTagName('td');
      for ( let i = 0; i < td.length; i++) {
        td[i].className = Math.round(Math.random()) === 0 ? "mort" : "vivant"; 
        }
      },

    // Clique sur le bouton random, Appeler la fonction genereAleatoireBinaire
      randomClick : function() {
        let boutonRandom = document.querySelectorAll('.bouton')[1]
        boutonRandom.addEventListener('click', this.genereAleatoireBinaire)
      },

      changerContenuBouton1: function () {
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
      },

      
    // changer la couleur des cellules en cliquant
    changerColeurCellule: function () {
      let td = document.getElementsByTagName('td');
      for ( let i = 0; i < td.length; i++) {
        td[i].addEventListener('click', function () {
            td[i].classList.toggle('vivant')
          })
      }
    }
  }



let controller = {

  creerTable: function(){
    // Acceder a l'element Body
    let body = document.getElementsByTagName("body");
  
     // On acceder a l'element table
     let table = document.getElementById('table');
  
    // Ensuite, On crée l'élément <tbody> qui est un enfant de l'élément <table>.
    let tbody = document.createElement("tbody");
  
    // Puis, grâce à une boucle, on crée les éléments <tr>, qui sont des enfants de l'élément <tbody>.
    for (let i = 0; i < model.nombreDeLigne; i++) {
      let tr = document.createElement("tr");
  
    // Pour chaque élément <tr>, on emploie une boucle pour créer les éléments enfants <td>.
      for (let j = 0; j < model.nombreDeColonne; j++) {
        let td = document.createElement("td");
        // tr.appendChild(td);
        view.appendChildV(tr, td)
      }
   
      // Puis chaque <tr> à son parent <tbody>
      tbody.appendChild(tr);
    }
   
    // Puis l'élément <tbody> est attaché à son élément parent <table>
    table.appendChild(tbody);
  
  
  },


  //  Acceder a chaque ligne 
  // let rows = rowsCollection[0] // HTMLTableRowElement
     //  Acceder aux cellules
  // let cellsCollection =  rows.cells // HTHmlColletion
     // Acceder a une cellules
  // let cell = cellsCollection [0] // HtmlCellElement
  
  representationVirtuelle : () => {
    let table = document.getElementById('table') // HTMLTableElement
    let rowsCollection = table.rows // HTMLCollecion / array
    let oneDArray = [];
    let secondDArray = []
    for(let i = 0; i < model.nombreDeLigne; i++) {
      for(let j = 0; j < model.nombreDeColonne; j++){
        rowsCollection[i].cells[j].className === 'vivant' ? secondDArray.push(1) : secondDArray.push(0);
      }
      oneDArray.push (secondDArray);
      secondDArray = [];
    }
    return oneDArray;
  }
}

window.onload =function() {
  controller.creerTable();
   view.randomClick();
   view.changerContenuBouton1();
   view.changerColeurCellule();
   controller.representationVirtuelle();
 
}
