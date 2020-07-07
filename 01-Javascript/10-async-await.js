const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) =>{
            res('Contenido leer archivo');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (res,rej) => {
            //res('Contenido escribir archivo');
            rej('ERROR =(');
        }
    );
}

//El async y el await solo se pueden usar dentro de una funcion
async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error('Contenido catch', error);
    }
    console.log('6');
    console.log('7');
}
const respuestaEjercicio = ejercicio();
//console.log('Respuesta ejercicio', respuestaEjercicio);
//console.log('promesa leer archivo', promesaLeerArchivo());
//console.log('promesa escribir archivo', promesaEscribirArchivo());




//const f = async () => {
//contenido
//}

