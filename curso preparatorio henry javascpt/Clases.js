//function Auto (puertas, color, marca, año, ruedas) {
//    this.puertas = puertas;
//    this.color = color;
//    this.marca = marca; 
//    this.año = año;
//    this.ruedas = ruedas;
//    this.informacion = function() {
//        console.log("Este es un "+ this.marca + " de color "+ this.color);
//}
//}
//var miPrimerAuto = new Auto(2, "rojo", "Ferrari", 2018, 4);
//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

//miPrimerAuto.informacion();

//class Auto {
//    constructor(puertas, color, marca, año, ruedas){
 //       this.puertas = puertas;
  //       this.color = color;
  //       this.marca = marca; 
   //       this.año = año;
    //     this.ruedas = ruedas;
   // }
   // informacion() {
   //     console.log("Este es un "+ this.marca + " de color "+ this.color);
    // }
//}
//var miSegundoAuto = new Auto (4, "blanco", "Fiat", 2015, 4);
//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);
//miSegundoAuto.informacion();

class Football {
    constructor(jugador) {
        this.jugador = jugador
    }
    obtenerNombre() {console.log(this.jugador)}
} 
var Argentina = new Football("Messi");
var Brasil = new Football("Pele");

Argentina.obtenerNombre();
Brasil.obtenerNombre ();