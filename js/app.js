let model = {

// Nombre des lignes et ceux des colonnes
nombreDeLigne: 50,
nombreDeColonne: 50,
representationVirt:undefined,

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
        boutonRandom.addEventListener(
          'click', this.genereAleatoireBinaire
        )
      },

      
    // changer la couleur des cellules en cliquant
    changerColeurCellule: function () {
      let td = document.getElementsByTagName('td');
      for ( let i = 0; i < td.length; i++) {
        td[i].addEventListener('click', function () {
          td[i].classList.toggle('vivant')
          })
      }
    },

    afficherProchaineGeneration : function () {
      let TR = document.getElementsByTagName('tr');
      let prochaineGeneration = controller.prochaineGeneration();
      for( let i = 0; i < model.nombreDeLigne; i++) {
        for (let j = 0; j < model.nombreDeColonne; j++) {
          if(prochaineGeneration[i][j] === 1) {
            TR[i].cells[j].className = 'vivant';
          } else {
            TR[i].cells[j].className = 'mort';
          }
        }
      }
    },



    // configuration des buton
    
    changerContenuBouton1: function () {
      // Acceder a l'element bouton
      bouton = document.querySelectorAll('.bouton');
      // Ajouter un ecouteur puis l'evenement
      bouton[0].addEventListener('click', function() {
        //Verification contenu bouton Start en Pause
      if (this.textContent === 'Start'){
        this.textContent = 'Pause';
        // Desactivation du bouton Random
        bouton[1].disabled = true;
        
        intervalID = setInterval(view.afficherProchaineGeneration, 100);

        
      }
        //Verification contenu bouton Pause en Continue
      else if (this.textContent === 'Pause'){
        this.textContent = 'Continue';  
        clearInterval(intervalID);
      }
        //Verification contenu bouton Start/Pause/Continue continue en pause
      else if (this.textContent === 'Continue'){
        this.textContent = 'Pause';
        intervalID = setInterval(view.afficherProchaineGeneration, 100);
      }
      })
    },
    signalReset: () =>{
      // capture du bouton Reset
      let reset = bouton[2];
      reset.addEventListener(
        'click', () =>{
          clearInterval(intervalID);
          document.querySelectorAll('td').forEach(td => td.removeAttribute('class'));
          bouton[0].textContent = 'Start';
          bouton[1].disabled = false;
          model.representationVirt = undefined;
        } 
      ) 
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
    let representationVirtuelle = [];
    let secondDArray = []
    for(let i = 0; i < model.nombreDeLigne; i++) {
      for(let j = 0; j < model.nombreDeColonne; j++){
        rowsCollection[i].cells[j].className === 'vivant' ? secondDArray.push(1) : secondDArray.push(0);
      }
      representationVirtuelle.push (secondDArray);
      secondDArray = [];
    }
    return representationVirtuelle;
  },


  // compter le nombre des cellules voisines et l'ajouter dans un tableau a deux dimensions
  prochaineGeneration : () => {
    
    // acceder au tableau virtuel



    if (model.representationVirt === undefined) {

      model.representationVirt = controller.representationVirtuelle()
    }
    // representation de chaque cellule voisine vivante
    let representationVirtuelle = model.representationVirt;
    let prochaineGeneration = [];
    let celluleVoisineParLigne = [];
    let sum = 0;
    for( let i = 0; i < model.nombreDeLigne; i ++ ){
      for( let j = 0; j < model.nombreDeColonne; j ++) {

        if (i - 1 >= 0 && i - 1 < model.nombreDeLigne) {
          // top
          sum += representationVirtuelle[i - 1 ][j];

          if(j - 1 >= 0 && j - 1 < model.nombreDeColonne) {
          // TopLetf 
            sum += representationVirtuelle[i - 1][j - 1];
          }

          if (j + 1 >= 0 && j + 1 < model.nombreDeColonne){
            // topRight et Right
            sum += representationVirtuelle[i - 1][j + 1];
          }

        }

        if( i + 1 >= 0 && i + 1 < model.nombreDeLigne) {
          // bottom
          sum += representationVirtuelle[i + 1][j];

          if(j - 1 >= 0 && j - 1 < model.nombreDeColonne) {
            // bottomLeft
              sum += representationVirtuelle[i + 1][j - 1];
            }
  
          if (j + 1 >= 0 && j + 1 < model.nombreDeColonne){
            // bottomRight
            sum += representationVirtuelle[i + 1][j + 1];
            
          }

        }

        if( j - 1 >= 0 && j - 1 < model.nombreDeColonne) {
          // left
          sum += representationVirtuelle[i + 0][j - 1];
        }

        if(j + 1 >= 0 && j + 1 < model.nombreDeColonne) {
          // right
          sum += representationVirtuelle[i][j + 1];
        }

        // application des regles
        if(representationVirtuelle[i][j] === 1 ) {

          if(sum === 2 || sum === 3) {
            celluleVoisineParLigne.push(1);

          }
          if (sum < 2 || sum > 3) {
            celluleVoisineParLigne.push(0);
          
          }
        } else {
          
          if(sum === 3) {
            celluleVoisineParLigne.push(1);
          
          } else {
            celluleVoisineParLigne.push(0);
            
          }
         
        }

        sum = 0;
      }
      prochaineGeneration.push(celluleVoisineParLigne);
      celluleVoisineParLigne = [];

    }

      model.representationVirt = prochaineGeneration;
      return prochaineGeneration;
  }    
}

window.onload =function() {
  controller.creerTable();
  view.randomClick();
  view.changerContenuBouton1();
  view.changerColeurCellule();
  view.signalReset();
}