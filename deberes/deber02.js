const fs = require('fs');

/* DEBER 03
* */

function promesaLeerArchivo(path) {
    return new Promise( //Definicion de la promesa
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido)=>{ //CALLBACK
                    if (error){
                        console.error('Hubo error ', error)
                        reject(error);
                    }else {
                        console.log('Archivo leido');
                        resolve(contenido);
                    }
                }
            );
        }
    )
}

function promesaEscribirArchivo(path, contenidoNuevo) {
    return new Promise( //Definicion de la promesa
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoNuevo,
                'utf-8',
                (error)=>{ //CALLBACK
                    if (error){
                        console.log('Hubo error ', error);
                        reject(error);
                    }
                    else{
                        console.log('Operacion terminada con exito');
                        resolve();
                    }
                }
            );
        }
    )
}

//El async y el await solo se pueden usar dentro de una funcion
async function ejercicio(path, contenidoNuevo) {
    //console.log('1');
    try {
        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        await promesaEscribirArchivo(path, respuestaLecturaArchivo+ "\n" +contenidoNuevo);
        const nuevoContenido = await promesaLeerArchivo(path);
        console.log(nuevoContenido);
    }catch (error) {
        console.error('Contenido catch', error);
    }
}

ejercicio('../01-Javascript/06-ejemplo.txt','Hola :)')