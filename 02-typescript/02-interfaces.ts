interface Usuario {
    //datos que deseamos que existan
    nombre:string;
    apellido:string;
    edad?:number; // opcional
    sueldo?:number; // opcional
    casado:boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje:string) => string; //funcion que recibe un string y devulve un string
    //funcion con parametro numero impuesto y devuelve el sueldo+ sueldo*porcentaje
    calcularImpuesto: (impuesto: number) => number;
    //funcion sin parametros y devuelve 'AP', 'AF' y 'AT' respectivamente de lo que sea el estado
    estadoActual: ()=> 'AP' | 'AF' | 'AT';
}

const adrian: Usuario ={
    nombre:'Adrian',
    apellido:'Eguez',
    casado: false,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje:string) => {
        return 'El mensaje es:' + mensaje
    },
    calcularImpuesto: impuesto => {  //impuesto en %
        if(this.sueldo){  //como es opcional debemos verificar si se envia
            return this.sueldo + (this.sueldo*(impuesto/100));
        }
    },
    estadoActual:() => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AT';
            case 'BN':
                return 'AF';
        }
    }
}

