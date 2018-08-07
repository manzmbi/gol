window.onload = function(){
    let nombreDeLigne = 15;
    let nombreDeColonne = 15;

    let table = document.createElement("table");

    let tableauId = document.getElementById("tableauId");

    table.appendChild(tableauId);

    // Creation de lignes
    for (let i = 0; i < nombreDeLigne; i++){
        let tr = document.createElement("tr");
        tableauId.appendChild(tr);

        // Creation de cellules
        for (let j = 0; j < nombreDeColonne; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }
    body.appendChild(tableau);

}


