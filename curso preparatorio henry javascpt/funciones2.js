function cuidadoconElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

//SIN RETURN
function cuidadoconElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

//UTILIZANDO MAL RESULTADO
function otraFuncion() {
    return (
         "El nombre retornado por la funcion 'cuidadoconElConsoleLog' es: " +
         cuidadoconElConsoleLog('Elvis')
    ); 
}

//CAMBIANDO EL ORDEN
function cuidadoconElReturn (nombre) {
    return nombre;
    console.log(nombre);
}