const fs = require('fs');

/*
* Hacer una funcion que acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La funcion debe tomar estos dos parametros y leer
* el archivo y añadir el texto al final del archivo.
*
* */

function  escribirArchivo(path,contenidoNuevo) {

    fs.readFile(
        path,
        'utf-8',
        (error, contenido)=>{ //CALLBACK
            if (error){
                console.error('Hubo error ', error);
            }else {
                agregarContenido(path, (contenido + "\n" +contenidoNuevo));
            }
        }
    );

}

function agregarContenido(path,contenidoNuevo){
    fs.writeFile(
        path,
        contenidoNuevo,
        'utf-8',
        (error)=>{ //CALLBACK
            if (error)
                console.error('Hubo error ', error);
            else
                console.log('Operacion terminada con exito');
        }
    );
}
escribirArchivo('./06-ejemplo.txt','Bien gracias');