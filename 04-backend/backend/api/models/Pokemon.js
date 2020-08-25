/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true, // Por defecto es false
    },

    //RELACIONES
    //Pokemon <- Usuario
    usuario:{ //Nombre FK
      model: 'Usuario',  //Modelo con el cual relacionamos
      required: true,  //Requerida 1 -N
             // false (Opcional) 0 -N (por defecto)
    },
    //Pokemon -> Batallas
    batallas:{
      collection: 'Batalla',
      via: 'pokemon'
    }
  },

};

