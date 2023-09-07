function viajar(destino) {
    if (destino === "Brasil"){
    console.log("gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("gire a la DERECHA");
    } else {
        console.log("Nos PERDIMOS");
    }
}
viajar("Venezuela");

function puedeManejar (edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
}
puedeManejar(20); 

