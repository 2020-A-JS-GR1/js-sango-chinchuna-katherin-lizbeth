function sumarNumeros(
    numeroInicial: number,
    ...numerosASumarse: number[]
): number {
    return numeroInicial;
}

sumarNumeros(1,1,2,3,4);

function imprimir(memsaje: string): void {
    console.log('Hola' + memsaje);
}

//Tipado de arreglos
const arregloNumeros : number[] = [1,2,3];
const arregloNumerosDos: Array<number> = [1,2,3];
const arregloNumerosTres: (number | string | boolean)[] = [1, "a", true];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, "a", true];
let arregloDeNumerosOTexto: number[] | string[] = ['1','2']; //arreglo de numeros o arreglo de strings
arregloDeNumerosOTexto = [1,2,3];

