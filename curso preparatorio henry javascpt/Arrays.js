//var listaDeCompras = [];
//listaDeCompras [3] = "Tomates";
//listaDeCompras [1] = "Papas"; 
//console.log(listaDeCompras); 

//listaDeCompras [1];

//var elementoDelArray = listaDeCompras [1];
//console.log(elementoDelArray);

//console.log(listaDeCompras.length);

//var nombres = ["Elvis", "Alfonso", "Gricel", "Sofia", "Antonella"].length;
//console.log(nombres);

//var colores = ["amarillo", "azul"];
//colores.push("rojo");
//colores.unshift("violeta");
//colores.pop();
//colores.shift();
//console.log(colores);

//var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"]
//var incluyeDali = pintores.includes("Monet ");
//console.log(incluyeDali);

//var numeros = [11, 6, 8, 9];
//var cumpleCondicion = numeros.every ( (num) => {
//    return num >5;
//})
//console.log(cumpleCondicion); 

//var palabra =  "Henri";
//var palabraSeparada = palabra.split('');
//palabraSeparada.pop();
//palabraSeparada.push("y");
//console.log(palabraSeparada); 
//var palabraArreglada = palabraSeparada.join('');
//console.log(palabraArreglada);

//var numeros = [1, 2, 3, 4];
//numeros.forEach(num => console.log(num));
//numeros.forEach((num) => {
//    if (num === 3) {
//        console.log(num)
//    }
//})
//var numeros = [ 1, 2, 3, 4 ];
//var masUno = numeros.map( (num) => { return num + 1 } );

//console.log(masUno);

//var arr = [1, 2, 3, 4, 5];
//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//function encontrarLetraP(string) {
//    var letras = string.split('');
//    for (let i = 0; i < letras.length; i++) {
//        if (letras[i] === "p") {
//            console.log("Si contiene a P");
//        }
//    }
//}
//encontrarLetraP("Javascript");
//encontrarLetraP("Henry");

//var arr = [];
//while(arr.length < 5) {
//    arr.push("Boom");
//}
//console.log(arr);

var arr = [];
var n = 1;
while(n < 3) {
    arr.push(Math.random());
}