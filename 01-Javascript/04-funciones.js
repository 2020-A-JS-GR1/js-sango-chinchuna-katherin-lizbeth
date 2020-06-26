
//Funciones nombradas
function funcionNombrada() {}
funcionNombrada(); //para ejecutar

//Cuando se iguala a una variable una funciones anonimas pasan a ser nombradas
const funcionNombradaDos = function () {};
var funcionNombradaTres = function () {};
let funcionNombradaCuatro = function () {};
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

const funcioNombradaCinco = () => {
}; //FAT ARROW FUNCTIONS Funcion de flecha gorda
   //no recibe parametros y no devuelve nada
const funcioNombradaSeis = (x) => {  //Ejemplo
    return x + 1
};
const funcioNombradaSiete = (x) => x + 1; //cuando el contenido de las llaves es una sola linea de codigo se puede omitir el return y las llaves
const funcioNombradaOcho = x => x + 1;      //cuando se tiene un solo parametro se omiten los parentesis
const funcionNombradaNueve = (x, y, z) => x + y + z; //Si hay mas de un parametro se debe poner los parentesis

//sumar dos o mas numeros
function sumarNumeros(numeroInicial, //numero
                      ...otrosNumeros) { //parametros infinitos (...) le llega como un arreglo de valores infinito
    //si se va a tener mas parametros se debe poner antes de los parametros infinitos, tambien se lo puede usar solo
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const arreglo = [0,1,2];

function sumarArreglo(arregloParametro) {
    const clonArreglo = Object.assign([], arregloParametro);
    clonArreglo[0] = 100;
    return clonArreglo;
}


