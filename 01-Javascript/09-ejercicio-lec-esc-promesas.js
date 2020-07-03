const fs = require('fs');

/*
* Hacer una funcion que acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La funcion debe tomar estos dos parametros y leer
* el archivo y añadir el texto al final del archivo. Al final vamos
* a leer el archivo nuevamente e imprimirlo en consola.
* TOODO esto debe ser realizado con promesas
*
* */

function promesaLeerArchivo(path) {
    const promesa =  new Promise( //Definicion de la promesa
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
    return promesa;
}

function promesaEscribirArchivo(path, contenidoNuevo) {
    const promesa = new Promise( //Definicion de la promesa
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
    return promesa;
}

function archivo(path, contenidoNuevo) {
    promesaLeerArchivo(path)
        .then(
            (contenido) => {
                //console.error(contenido);
                return promesaEscribirArchivo( path,contenido + "\n" + contenidoNuevo)
            }
        )
        .then(
            () => promesaLeerArchivo(path)
        )
        .then(
            (contenido) => {
                console.log('\nContenido del archivo:');
                console.log(contenido);
            }
        )
        .catch( //catch
            (error) => {
                console.error('Contenido catch', error);
            }
        )
}

archivo('./06-ejemplo.txt','Hola :)');

