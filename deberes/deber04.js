/*Escribir un programa CRUD (Create Read Update Delete).
Estas operaciones deben de realizarse en las dos entidades.
Las entidades deben de tener 5 datos cada una Ej: Nombre. Entre los 10 datos de las entidades deben de haber las
siguientes variables primitivas de JS: Booleano, String, Entero, Booleanos.
Las entidades estan relacionadas de UNO a MUCHOS.
En el ejemplo 1 RECETA contiene un arreglo de INGREDIENTES.
*/

const inquirer = require('inquirer');
const fs = require('fs');


mainMenu();

/* *********************************** Menu Principal *********************************** */
async function mainMenu() {

    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'MENU PRINCIPAL ',
                    choices: ['Generos', 'Peliculas', 'Salir']
                }
            ]);

        switch (respuesta.opcion) {
            case 'Generos':
                submenuGenero();
                break;
            case 'Peliculas':
                submenuPelicula();
                break;
            case 'Salir':
                break;
        }

    } catch (e) {
        console.error(e);
    }

}

/* ************************************************************************************** */

/* ************************************* Sub-menus  ************************************* */

/* Generos */
async function submenuGenero() {

    try {
        const respuestasGenero = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'SUB-MENU GENERO',
                    choices: ['Lista de Generos', 'Ingresar Genero', 'Modificar Genero', 'Eliminar Genero', 'Salir']
                }
            ]);

        const genderMovie = respuestasGenero.opcion;
        ControladorGeneros(genderMovie);

    } catch (e) {
        console.error(e);
    }
}

/* Peliculas */
async function submenuPelicula() {

    try {
        const respuestasPelicula = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'SUB-MENU PELICULAS',
                    choices: ['Lista de Peliculas', 'Ingresar Pelicula', 'Modificar Pelicula', 'Eliminar Pelicula', 'Salir']
                }
            ]);

        const movie = respuestasPelicula.opcion;
        ControladorPeliculas(movie);
    } catch (e) {
        console.error(e);
    }
}

/* ************************************************************************************** */

/* ********************************* Controladores  ******************************** */

/* Controlador de los Generos */
async function ControladorGeneros(respuesta) {

    const path = './04-Genero.txt';

    switch (respuesta) {
        case 'Lista de Generos':

            const leerArchivoGeneroM = await promesaLeerArchivo(path);
            let listaGeneros = listaDatos(leerArchivoGeneroM);
            if (leerArchivoGeneroM === '') {
                console.log('No existen registros');
            } else {
                console.table(listaGeneros);
            }
            submenuGenero();
            break;

        case 'Ingresar Genero':
            const respuestaG = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'codigo',
                        message: 'Codigo del genero (Ejm. 00001):'

                    },
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'Nombre del genero:',
                    },
                    {

                        type: 'input',
                        name: 'descripcion',
                        message: 'Breve descripcion:'
                    },
                    {

                        type: 'confirm',
                        name: 'popular',
                        message: 'Es considerado un genero popular?'
                    },
                    {

                        type: 'number',
                        name: 'año',
                        message: 'Ingrese el año de aparicion: '
                    },

                ]);
            const leerArchivoGenero = await promesaLeerArchivo(path);

            //verificar si el archivo esta vacio
            if (leerArchivoGenero !== '') {
                await promesaEscribirArchivo(path, leerArchivoGenero + '\n' + JSON.stringify(respuestaG));
            } else {
                await promesaEscribirArchivo(path, JSON.stringify(respuestaG));
            }
            submenuGenero();
            break;

        case 'Modificar Genero':
            const leerArchivoGeneroMo = await promesaLeerArchivo(path);
            let listaGenerosMo = listaDatos(leerArchivoGeneroMo);
            //Selecciona el codigo del genero a modificar
            const respuestaSelectModificar = await promesaSeleccionarGenero(listaGenerosMo.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));
            //Selecciona lo que quiere modificar
            const respuesta = await inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'gender',
                        message: 'SUB-MENU GENERO',
                        choices: ['Codigo', 'Nombre', 'Descripcion', 'Popularidad', 'Año de aparicion']
                    }
                ]);

            //modificacion
            let listaActualizada = '';
            const id = idModificar(listaGenerosMo, respuestaSelectModificar); //obtiene el indice del codigo que va a modificar
            console.table(listaGenerosMo[id]);
            switch (respuesta.gender) {
                case 'Codigo':
                    const respuestacod = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'codigoActulizar',
                                message: 'Ingrese el nuevo codigo del genero:'

                            }
                        ]);
                    listaGenerosMo[id].codigo = respuestacod.codigoActulizar;
                    listaActualizada = nuevaListaActualizar(listaGenerosMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Nombre':
                    const respuestaNom = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'nombreActulizar',
                                message: 'Ingrese el nuevo nombre del genero:'
                            }
                        ]);
                    listaGenerosMo[id].nombre = respuestaNom.nombreActulizar;
                    listaActualizada = nuevaListaActualizar(listaGenerosMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Descripcion':
                    const respuestaDes = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'descripcionActulizar',
                                message: 'Ingrese la nueva descripcion del genero:'

                            }
                        ]);
                    listaGenerosMo[id].descripcion = respuestaDes.descripcionActulizar;
                    listaActualizada = nuevaListaActualizar(listaGenerosMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Popularidad':
                    const respuestaPop = await inquirer
                        .prompt([
                            {
                                type: 'confirm',
                                name: 'popularidadActulizar',
                                message: 'Pertenece a los generos populares?'

                            }
                        ]);
                    listaGenerosMo[id].popular = respuestaPop.popularidadActulizar;
                    listaActualizada = nuevaListaActualizar(listaGenerosMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Año de aparicion':
                    const respuestaRec = await inquirer
                        .prompt([
                            {
                                type: 'number',
                                name: 'añoActulizar',
                                message: 'Ingrese el año de aparicion:'

                            }
                        ]);
                    listaGenerosMo[id].año = respuestaRec.añoActulizar;
                    listaActualizada = nuevaListaActualizar(listaGenerosMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
            }
            submenuGenero();
            break;

        case 'Eliminar Genero':
            const leerArchivoGeneroE = await promesaLeerArchivo(path);
            let listaGenerosE = listaDatos(leerArchivoGeneroE);

            //Selecciona el codigo del genero a eliminar
            const respuestaSelectBorrar = await promesaSeleccionarGenero(listaGenerosE.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));

            //busca el codigo del genero seleccionado y lo elimina
            listaGenerosE.splice(listaGenerosE.findIndex(
                valorActual => {
                    return valorActual.codigo === respuestaSelectBorrar.codGen;
                }
            ), 1);

            //escribir nueva lista en archivo
            let listaBorrado = '';
            listaGenerosE.map(
                (valorActual, indiceActual) => {
                    if (indiceActual < listaGenerosE.length - 1) {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual) + '\n';
                    } else {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual);
                    }
                }
            );
            await promesaEscribirArchivo(path, listaBorrado);
            submenuGenero();
            break;
        case 'Salir':
            mainMenu();
            break;

    }
}

/* Controlador de las Peliculas */
async function ControladorPeliculas(respuesta) {

    const path = './04-Peliculas.txt';
    switch (respuesta) {

        case 'Lista de Peliculas':

            const leerArchivoPeliculaM = await promesaLeerArchivo(path);
            let listaPeliculas = listaDatos(leerArchivoPeliculaM);
            if (leerArchivoPeliculaM === '')
                console.log('No existen registros');
            else
                console.table(listaPeliculas);
            submenuPelicula();
            break;

        case 'Ingresar Pelicula':
            const respuestaP = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'codigo',
                        message: 'Codigo de la pelicula (Ejm. 00001):'

                    },
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'Nombre de la pelicula:',
                    },
                    {

                        type: 'input',
                        name: 'fecha_estreno',
                        message: 'Fecha de estreno:'
                    },
                    {

                        type: 'number',
                        name: 'duracion',
                        message: 'Duracion en minutos:'
                    },
                    {

                        type: 'confirm',
                        name: 'estrenada',
                        message: 'La pelicula ya se estreno?'
                    },

                ]);
            const leerArchivoPelicula = await promesaLeerArchivo(path);
            //obtener nombres de los generos
            const leerArchivoGenero = await promesaLeerArchivo("./04-Genero.txt");
            let listaGeneros = listaDatos(leerArchivoGenero);
            const respuestaSelect = await promesaSeleccionarGeneroNombre(listaGeneros.map(
                valorActual => {
                    return valorActual.nombre;
                }
            ));
            respuestaP["genero"] = respuestaSelect.genderName;

            //verificar si el archivo esta vacio
            if (leerArchivoPelicula.length !== 0)
                await promesaEscribirArchivo(path, leerArchivoPelicula + '\n' + JSON.stringify(respuestaP));
            else
                await promesaEscribirArchivo(path, JSON.stringify(respuestaP));
            submenuPelicula();
            break;

        case 'Modificar Pelicula':
            const leerArchivoPeliculasMo = await promesaLeerArchivo(path);
            let listaPeliculasMo = listaDatos(leerArchivoPeliculasMo);
            //Selecciona el codigo de la pelicula a modificar
            const respuestaSelectModificar = await promesaSeleccionarPelicula(listaPeliculasMo.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));
            //Selecciona lo que quiere modificar
            const respuesta = await inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'movie',
                        message: 'SUB-MENU GENERO',
                        choices: ['Codigo', 'Nombre','Genero', 'Fecha de estreno', 'Duracion', 'Estreno']
                    }
                ]);

            //modificacion
            let listaActualizada = '';
            const id = idModificarPelicula(listaPeliculasMo, respuestaSelectModificar); // obtiene indice del codigo de la pelicula a modificar
            console.table(listaPeliculasMo[id]); //pendiente
            switch (respuesta.movie) {
                case 'Codigo':
                    const respuestacod = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'codigoActulizar',
                                message: 'Ingrese el nuevo codigo de la pelicula:'

                            }
                        ]);
                    listaPeliculasMo[id].codigo = respuestacod.codigoActulizar;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Nombre':
                    const respuestaNom = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'nombreActulizar',
                                message: 'Ingrese el nuevo nombre de la pelicula:'
                            }
                        ]);
                    listaPeliculasMo[id].nombre = respuestaNom.nombreActulizar;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Genero':
                    const leerArchivoGenero = await promesaLeerArchivo("./04-Genero.txt");
                    let listaGeneros = listaDatos(leerArchivoGenero);
                    const respuestaSelect = await promesaSeleccionarGeneroNombre(listaGeneros.map(
                        valorActual => {
                            return valorActual.nombre;
                        }
                    ));
                    listaPeliculasMo[id].genero = respuestaSelect.genderName;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Fecha de estreno':
                    const respuestaDes = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'fechaActulizar',
                                message: 'Ingrese la nueva fecha de estreno de la pelicula:'

                            }
                        ]);
                    listaPeliculasMo[id].fecha_estreno = respuestaDes.fechaActulizar;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Duracion':
                    const respuestaDu = await inquirer
                        .prompt([
                            {
                                type: 'number',
                                name: 'duracionActulizar',
                                message: 'Ingrese la nueva duracion de la pelicula:'

                            }
                        ]);
                    listaPeliculasMo[id].duracion = respuestaDu.duracionActulizar;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
                case 'Estreno':
                    const respuestaGa = await inquirer
                        .prompt([
                            {
                                type: 'confirm',
                                name: 'estrenarActulizar',
                                message: 'La pelicula ya se estreno?'
                            }
                        ]);
                    listaPeliculasMo[id].estrenada = respuestaGa.estrenarActulizar;
                    listaActualizada = nuevaListaActualizar(listaPeliculasMo);
                    await promesaEscribirArchivo(path, listaActualizada);
                    break;
            }
            submenuPelicula();
            break;

        case 'Eliminar Pelicula':
            const leerArchivoPeliculasE = await promesaLeerArchivo(path);
            let listaPeliculasE = listaDatos(leerArchivoPeliculasE);

            //Selecciona el codigo de pelicula a eliminar
            const respuestaSelectBorrar = await promesaSeleccionarPelicula(listaPeliculasE.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));

            //busca el codigo de la pelicula seleccionado y lo elimina
            listaPeliculasE.splice(listaPeliculasE.findIndex(
                valorActual => {
                    return valorActual.codigo === respuestaSelectBorrar.codMov;
                }
            ), 1);

            //escribir nueva lista en archivo
            let listaBorrado = '';
            listaPeliculasE.map(
                (valorActual, indiceActual) => {
                    if (indiceActual < listaPeliculasE.length - 1) {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual) + '\n';
                    } else {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual);
                    }
                }
            );
            await promesaEscribirArchivo(path, listaBorrado);
            submenuPelicula();
            break;
        case 'Salir':
            mainMenu();
            break;

    }

}

/* ************************************************************************************** */

/* ********************************* Manejo De Archivos  ******************************** */

/* Leer archivo */
function promesaLeerArchivo(path) {
    const promesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => { //CALLBACK
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    )
    return promesa;
}

/* Escribir Archivo */
function promesaEscribirArchivo(path, contenidoNuevo) {
    const promesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoNuevo,
                'utf-8',
                (error) => { //CALLBACK
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    )
    return promesa;
}

/* Mostrar lista de generos */
const promesaSeleccionarGenero = (genero) => {
    return inquirer
        .prompt({
            type: 'rawlist',
            name: 'codGen',
            message: 'Seleccione el codigo del genero',
            choices: genero,
        });

}

const promesaSeleccionarPelicula = (pelicula) => {
    return inquirer
        .prompt({
            type: 'rawlist',
            name: 'codMov',
            message: 'Seleccione el codigo de la pelicula',
            choices: pelicula,
        });

}

const promesaSeleccionarGeneroNombre = (genero) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'genderName',
            message: 'Seleccione un genero',
            choices: genero,
        });

}
/* ************************************************************************************** */

/* ********************************** Funciones extras  ********************************* */

function listaDatos(leerArchivo) {
    let lista = [];
    if (leerArchivo !== '') {
        lista = leerArchivo.split('\n').map(
            valorActual => {
                return JSON.parse(valorActual);
            }
        );
        return lista;
    }
}

function nuevaListaActualizar(listaActual) {

    let listaActualizada = [];
    listaActual.map(
        (valorActual, indiceActual) => {
            if (indiceActual < listaActual.length - 1) {
                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
            } else {
                listaActualizada = listaActualizada + JSON.stringify(valorActual);
            }

        }
    );
    return listaActualizada;
}

function idModificar(listaActual, respuestaModificar) {
    return listaActual.findIndex(
        valorActual => {
            return valorActual.codigo === respuestaModificar.codGen;
        }
    );
}

function idModificarPelicula(listaActual, respuestaModificar) {
    return listaActual.findIndex(
        valorActual => {
            return valorActual.codigo === respuestaModificar.codMov;
        }
    );
}
