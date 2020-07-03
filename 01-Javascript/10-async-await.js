const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

//El async y el await solo se pueden usar dentro de una funcion
async function ejercicio() {
    console.log('1');
    try {
        const respuestaLecturaArchivo = await promesaLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    }catch (error) {
        console.error('Contenido catch', error);
    }
}

const f = async () => {
    //contenido
}

