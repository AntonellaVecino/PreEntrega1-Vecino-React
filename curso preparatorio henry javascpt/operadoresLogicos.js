//OPERADOR AND &&
function mayorYMenor(num) {
    if (num > 5 && num < 10)console.log(true);
    else console.log(false);
}; 
mayorYMenor(2);
mayorYMenor(7);
 
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0 )console.log(true);
    else console.log(false);
};
mayorYMenorYPar(8);
mayorYMenorYPar(7);

//OPERADOR OR ||
function operadorOr(str) {
    if (str === "Henry" || str.length < 2)console.log(true);
    else console.log(false);
};
operadorOr("Henry");
operadorOr("A");
operadorOr("Javascript");

//OPERADOR NOT
function negacion(permiso) {
    if (permiso) console.log("Tiene permiso");

};
negacion(true); //esta da tiene permiso
negacion(false); //esta no aparece

function negacion(permiso) {
    if (!permiso) console.log("Tiene permiso");

};
negacion(false);

function negacion(permiso) {
    if (permiso === true) console.log("Tiene permiso");

};
negacion(true); 

function negacion(permiso) {
    if (permiso !== true) console.log("Tiene permiso");

};
negacion(false);