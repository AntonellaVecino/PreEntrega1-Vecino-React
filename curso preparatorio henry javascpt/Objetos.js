//var deportes = { 
//  conBalon:["Football", "Basketball", "Rugby"], 
//  sinBalon: ["Boxeo", "Surf", "Natacion"]
//};

var persona = { nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};
//console.log(persona.edad);
//persona.nombre = "Martin";
//console.log(persona.nombre);
//persona.edad = 32;
//console.log(persona.edad);

//var autos = {};
//autos.marcas = ["Ford", "Mclaren", "Ferrari"];
//delete autos.marcas;
//console.log(autos);

//var misFunciones = {saludar: function ()
 //{console.log("Hola");
//},
//};
//misFunciones.saludar();

//var atuendos = {manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"]};

//atuendos["piernas"] = ["Bermudas", "Pantalones"];

//console.log(atuendos);

//var comidas = {};
//var diferenciaDeNotacion = function(propUno, propDos) {
//    comidas[propUno] = ["Frutas", "Vegetales"]
//    comidas[propDos] = ["Hamburguesas", "Papas Fritas"];
//};
//diferenciaDeNotacion("Saludable", "noSaludable"); 
//console.log(comidas);

//var libro = {autor: "Borges", genero: "Policial", año: 1990};
//var tienePropiedad = libro.hasOwnProperty("autor");

//console.log(tienePropiedad);
//var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades);

//var mundo = {continentes: 7, paises: 195, oceanos: 5};
//for(var prop in mundo) {
//    console.log("esta es la propiedad "+ prop);
//    console.log("este es el valor "+ mundo[prop]);
//}

var mascota = {
    animal: "perro",
     raza: "Ovejero Aleman",
      amistoso: true,
       dueño: "Elvis y Anto",
    info: function() {console.log("Mi perro es un "+ this.raza);
},
    };
    mascota.info();