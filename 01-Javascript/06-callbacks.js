
const fs = require('fs'); // importamos la libreria del filesystem

console.log('Primero'); //SINCRONA

fs.readFile( //ASINCRONA
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido)=>{ //CALLBACK
        console.log('Segundo');
        if (error){
            console.error('Hubo error ', error);
        }else {
            console.log(contenido);
        }
    }
)
const suma = 5 + 3; //SINCRONA

console.log('Suma',suma); //SINCRONA
console.log('Final'); //SINCRONA



