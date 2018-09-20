
import controller from './controller.js';
import view from './view.js';

window.onload =function() {

  controller.creerTable();
  view.randomClick();
  view.changerColeurCellule();
  view.changerContenuBouton1();
  view.signalReset();
}
