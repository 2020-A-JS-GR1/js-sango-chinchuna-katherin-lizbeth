
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

/*Por cada vocal dentro de la palabra del estudiante 0.1 decimas
Por cada consonante dentro de la palabra del estudiante 0.05 decimas

Filtren cuales personas pasaron */

const alumnosAprobados = arreglo
    .map((v) => {
        const numeroVocales = v.nombre.match(/[aeiou]/gi).length; //match devuelve un array
        const numeroConsonantes = v.nombre.length - numeroVocales;
        return {
            id: v.id,
            nombre: v.nombre,
            nota: (v.nota + (numeroVocales * 0.1) + (numeroConsonantes * 0.05)).toFixed(2),
        }
    })
    .filter((v) => v.nota >= 14 ) ;

console.log("Notas originales ", arreglo);
console.log("Alumnos aprobados ", alumnosAprobados);



/*Expresiones regulares
        /patrón/modificadores
  Tipos de patrones
    [abc] => Encuentra cualquier caracter entre los corchetes
    [^abc] => Encuentra cualquier caracter que NO este entre los corchetes
    [0-9] => Encuentra cualquier caracter entre los corchetes (cualquier dígito)
    [^0-9] => Encuentra cualquier caracter que NO este entre los corchetes (cualquier no-dígito)
    (x|y) => Encuentra cualquiera de las alternativas especificadas

  Modificadores
    g => Realizar una coincidencia global (encontrar todas las coincidencias en lugar de detenerse después de la primera coincidencia)
    i => Realizar la comparación sin tener en cuenta las mayúsculas y minúsculas
    m => Realizar la comparación de líneas múltiples

Se puede usar con la funcion RegExp('patron', 'modificadores') o con cadena.match(/patron/modificadores)
En ambos casos devuelve un array con los elementos que cumplen con el patron.
Ejemplo: */
/*var cadena = "Katherin";
var consonantes = cadena.match(/[^aeiou]/gi); // [ 'K', 't', 'h', 'r', 'n' ]
var vocales = cadena.match(RegExp('[aeiou]', 'gi')); // ['a', 'e', 'i']
console.log("vocales ", vocales, " consonantes ", consonantes);
* */