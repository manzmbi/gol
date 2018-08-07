function grille () {
    for ( let i = 0; i < 30; i ++) {
        for ( let j = 0; j < 30; j++) {
            let x = i * 30;
            let y = j * 30;
            stroke(0);
            fill(255);
            rect(x, y, 30, 30)
        }
    }
}

