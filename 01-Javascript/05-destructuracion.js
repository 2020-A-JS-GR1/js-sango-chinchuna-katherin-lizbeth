const adrian = {
    nombre: "Adrian",
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
};

//Destructuracion del objeto
//Destructurar es unir el contenido de dos objetos
//Objetos
const adrianCarolina = {
    ...adrian,
    ...carolina,
};
console.log('adrian', adrian);
console.log('adrian carolina ', adrianCarolina);

//Arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

const superArreglo = [
    ...arregloUno,
    ...arregloDos
];
superArreglo[0] = 100;
console.log('superArreglo ', superArreglo);
console.log('arregloUno ', arregloUno);

