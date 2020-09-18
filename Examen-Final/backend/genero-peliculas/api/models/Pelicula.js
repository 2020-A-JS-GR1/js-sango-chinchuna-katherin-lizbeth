/**
 * Pelicula.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'db_pelicula',
  attributes: {

    codigo:{
      type: 'string',
      columnName: 'codigo_pelicula',
      unique: true,
      minLength: 3,
      maxLength: 6,
      required: true, // Por defecto es false
    },

    nombre:{
      type: 'string',
      columnName: 'nombre_pelicula',
      minLength: 3,
      required: true,
    },

    fechaEstreno:{
      type: 'string',
      columnName: 'fecha_estreno',
      columnType: 'Date',  //año-mes-dia 2020/10/15
    },

    estrenada:{
      type: 'boolean',
      columnName: 'estrenada',
      //columnType: 'Bool', //0 ó 1
    },

    duracion:{
      type: 'number',
      columnName: 'duracion',
      columnType: 'integer',
    },

    //RELACIONES
    //Pelicula <- Genero
    genero:{ //Nombre FK
      model: 'Genero',
      required: true,   //Requerida 1 -N
    }

  },

};

