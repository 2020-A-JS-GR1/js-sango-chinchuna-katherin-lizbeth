const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Funciones como parametros
//FIND
//se necesita devolver una funcion (true or false)
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valor actual ', valorActual);
            console.log('indice actual', indiceActual);
            console.log('arreglo completo ',arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuesta find', respuestaFind);

//FIND INDEX
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valor actual ', valorActual);
            console.log('indice actual', indiceActual);
            console.log('arreglo completo ',arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuesta findIndex', respuestaIndex);

//FOREACH no se necesita devolver nada, su respuesta siempre va a ser undefined
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valor actual ', valorActual);
            console.log('indice actual', indiceActual);
            console.log('arreglo completo ',arregloCompleto);
        }
    );
console.log('respuesta forEach', respuestaForEach); //undefined

//MAP cuando se quiere modificar
//devuelve un nuevo elemento
//crea un nuevo arreglo y empieza a agregarar los parametros modificados
const respuestaMap = arreglo
    .map(
        function (valorActual, indiceActual, arregloCompleto) {
            return {
                id:valorActual.id,
                nombre:valorActual.nombre,
                nota:valorActual.nota + 1,
            }
        }
    );
console.log('respuesta map', respuestaMap);
console.log('Arreglo original', arreglo)

const respuestaMapNuevo = arreglo
    .map(
        //funcion anonima: funcion que no tine nombre
        //funcion de flecha gorda, en estas ya no ponemos la palabra function solo ponemos => despues del parentesis
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota
        }
    );
console.log('respuesta map', respuestaMapNuevo);
console.log('Arreglo original', arreglo)

//FILTER

const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >=14 ;
        }
    );
console.log('respuesta filter', respuestaFilter);
console.log('Arreglo original', arreglo)