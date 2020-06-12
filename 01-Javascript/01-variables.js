/*//Variables en JavaScript
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
}*/

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
//Para acceder a los elementos del arreglo
adrian.nombre //Katherin
adrian.apellido //Sango

const arregloNumeros =[]; //object

console.log(adrian);
console.log(arregloNumeros);
