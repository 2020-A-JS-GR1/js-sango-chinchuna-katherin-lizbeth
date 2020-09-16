/**
 * Genero.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'db_generos',
  attributes: {

    codigo:{
      type: 'string',
      columnName: 'codigo_genero',
      unique: true,
      minLength: 3,
      maxLength: 6,
      required: true, // Por defecto es false
    },

    nombre:{
      type: 'string',
      columnName: 'nombre_genero',
      minLength: 3,
      required: true,
    },

    descripcion:{
      type: 'string',
      columnName: 'descripcion',
      maxLength: 100,
    },

    popular:{
      type: 'boolean',
      columnName: 'popular',
      //columnType: 'Bool', //0 ó 1
    },

    año:{
      type: 'number',
      columnName: 'anio',
      columnType: 'integer',
    },

    //RELACIONES
    //Genero -> Peliculas
    peliculas:{ //Uno a muchos (nombre en plural)
      collection: 'Pelicula',
      via:'genero', //FK
    }

  },

};

