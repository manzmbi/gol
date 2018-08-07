// le model
let model = {
    nombreDeLigne: 15,
    nombreDeColonne: 16,

    // creation d'un tableau
    creerTableau: function () {
        let tableau = document.getElementById('tableau');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        for(let i = 0; i < this.nombreDeLigne; i ++) {
            tr.appendChild(td)
            for(let j = 0; j < this.nombreDeColonne; j++) {

            }
        }
        }
        

    }






}





















// la vue du Octopus
let view = {

}




//l'Octopus
let controller = {

}
