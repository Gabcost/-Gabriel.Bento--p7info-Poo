"use strict";
function gerarRan() {
    var random = [];
    var max = 6;
    for (var i = 0; i < max; i++) {
        var temp = Math.floor(Math.random() * 60);
        if (random.indexOf(temp) == -1) {
        }
        else
            i--;
    }
    console.log(random);
}
console.log(gerarRan());
