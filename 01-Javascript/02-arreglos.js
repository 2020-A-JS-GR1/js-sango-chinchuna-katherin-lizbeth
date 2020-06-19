const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //no se puede reasignar valores
const  arregloTodo = [
    true, 1, 1.2, "Adrian", undefined, null, {}, [1,2,true,"A"]  //{} objeto vacio
];

//Tipos de for
//for of
/*for (let numero of arreglo){
    console.log('numero', numero);
}
//for in
for (let numero in arreglo){
    console.log('numero', numero);
}*/
//Operaciones basicas con arreglos
//añadir elementos
arreglo.push(11);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.unshift(5);
console.log(arreglo);
arreglo.splice(0,1);
console.log(arreglo);
arreglo.splice(0, 0,3,4,5);
console.log(arreglo);
//Para buscar el indice
const indice = arreglo.indexOf(9);
console.log('indice de 9 ' ,indice);
const indice1 = arreglo.indexOf(101);
console.log(indice1);
//arreglo.findIndex();
