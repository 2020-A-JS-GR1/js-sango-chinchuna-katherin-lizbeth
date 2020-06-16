//Variables en JavaScript
//Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
//Inmutables
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML"; si hacemos esto nos salta un error

//Tipos de variables
const numero = 1;  //number
const sueldo = 1.2; // number
const  texto = "Katherin"; // string
const booleanooo = false; //boolean
const hijos = null; // object
const zapatos = undefined; // undefined
const apellido = 'Sango';
//typeof numero   retorna string con tipo de variable
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);

//IF
if(true == true){
    console.log("Es verdadero"); //!
}else{
    console.log("Es Falso");
}

if(true == false){
    console.log("Es verdadero");
}else{
    console.log("Es Falso"); //!
}

if(""){
    console.log("Es verdadero");
}else{
    console.log("Es Falsy"); //!
}
if("Adrian"){
    console.log("Es truty"); //!
}else{
    console.log("Es Falso");
}
if(-1){
    console.log("Es truty"); // Truty
}else{
    console.log("Es Falso");
}
if(0){
    console.log("Es truty");
}else{
    console.log("Es Falso"); // Truty
}
if(1){
    console.log("Es truty"); // Falsy
}else{
    console.log("Es Falso");
}

if (null){
    console.log("Es truty")
}else{
    console.log("Es Falso"); //Falsy
}

if(undefined){
    console.log("Es truty"); // Falsy
}else{
    console.log("Es Falso");
}

//Objetos Javascript - Arreglos

const adrian ={
    nombre: "Katherin", //llave: valor,
    apellido: 'Sango',
    edad: 22,
    hijos: null,
    zapatos: undefined,
    casadp: false,
    ropa:{
        color: 'plomo',
        talla: "34",
    },
    mascotas: ['Scott, Firulais, Cocky'],
}; //object

//Para acceder a los elementos del arreglo/ objeto
adrian.nombre //Katherin
adrian.apellido //Sango
adrian["nombre"]; //Katherin

console.log(adrian);
adrian.nombre = "Lizbeth";
console.log(adrian);
adrian["nombre"] = "Katherin";

//agregar propiedades al objeto
adrian.sueldo;
console.log(adrian.sueldo); //undefined -> propiedad no definida
adrian.sueldo = 1.2;
console.log(adrian.sueldo); //1.2
adrian["gastos"] = 0.8;
console.log(adrian.gastos); //0.8

//una forma de "eliminar" una variables de un objeto es igualandole a undefined
adrian.nombre = undefined;
console.log(adrian)
//para eliminar completamente la variable dentro del objeto
delete adrian.nombre;
console.log(adrian)

console.log(Object.keys(adrian)); //obtener las llaves existentes dentro del objeto

console.log(Object.values(adrian)); //Nos da los valores de las llaves existetes dentro del objeto

// Lista de variables por valor en JS
//number, string, boolean, undefined
let edadAdrian = 31;
let edadVicente = edadAdrian;
console.log(edadAdrian); //31
console.log(edadVicente); //31
edadAdrian = edadAdrian + 1;
console.log(edadAdrian); //32
console.log(edadVicente); //31

//Lista de variables por referencia en JS,
//cuando le cambiamos el nombre a cualquiera de los dos, el valor cambia en todos los que apunten a esa referencia
let rafael = {
    nombre: "Rafael",
};
/*let lenin = rafael;
console.log(rafael); //Rafael
console.log(lenin); //Rafael
lenin.nombre = "Lenin";
console.log(rafael); //Lenin
console.log(lenin); //Lenin*/

let arregloClonado = Object.assign([],[1,2,3,4,5]);
console.log(arregloClonado);

//Clonar un objeto
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);


/* const arregloNumeros =[]; //object

 console.log(adrian);
 console.log(arregloNumeros); */
