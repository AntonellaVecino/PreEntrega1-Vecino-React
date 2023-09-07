//SWITCH
switch(expr) {
    case "Naranjas":
        console.log("El kilo de naranjas cuesta $1");
        break;
    case "Cocos":
        console.log("Cada coco vale $2");
        break;
    case "Manzanas":
        console.log("El kilo de manzanas cuesta $2");
        break;
        default:
            console.log("Lo siento, ya no contamos con "+expr+ ".");
}

// DO WHILE
do {
    i += 1;
    document.write(i);
  } while (i < 5);

  //CONTINUE CON WHILE (se ejecuta cuando el valor de i es 3. Así, n toma los valores 1, 3, 7 y 12.)
  i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

//CONTINUE CON LABEL (el programa continua hasta encima de la sentencia checkj. Cada vez que se encuentra continue, checkj se reitera hasta que su condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia checkiandj se completa.)
checkiandj: while (i < 4) {
    document.write(i + "<br>");
    i += 1;
  
    checkj: while (j > 4) {
      document.write(j + "<br>");
      j -= 1;
      if (j % 2 == 0) continue checkj;
      document.write(j + " is odd.<br>");
    }
    document.write("i = " + i + "<br>");
    document.write("j = " + j + "<br>");
  }