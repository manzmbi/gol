import controller from './controller.js';
import model from './model.js';

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
        // bouton = document.querySelectorAll('.bouton');
        // Ajouter un ecouteur puis l'evenement
        controller.bouton[0].addEventListener('click', function() {
          //Verification contenu bouton Start en Pause
        if (this.textContent === 'Start'){
          this.textContent = 'Pause';
          // Desactivation du bouton Random
          controller.bouton[1].disabled = true;
          
          controller.intervalID = setInterval(view.afficherProchaineGeneration, 100);
  
          
        }
          //Verification contenu bouton Pause en controller.intervalID
        else if (this.textContent === 'Pause'){
          this.textContent = 'controller.intervalID';  
          clearInterval(controller.intervalID);
        }
          //Verification contenu bouton Start/Pause/controller.intervalID controller.intervalID en pause
        else if (this.textContent === 'controller.intervalID'){
          this.textContent = 'Pause';
          controller.intervalID = setInterval(view.afficherProchaineGeneration, 100);
        }
        })
      },
      signalReset: () =>{

          controller.bouton[2].addEventListener(
          'click', () =>{
            clearInterval(controller.intervalID);
            document.querySelectorAll('td').forEach(td => td.removeAttribute('class'));
            controller.bouton[0].textContent = 'Start';
            controller.bouton[1].disabled = false;
            model.representationVirt = undefined;
          } 
        ) 
      }
  
    }
export default view = view;