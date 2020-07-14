
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido:string = '';

    constructor(
        nombreParametro:string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }

    private mostrarNombreApellido(){
        return this.nombreYApellido;
    }
}


// Usuario extiende de Persona
class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro:string,
        public cedula: string,
        public estadoCivil:string,
    ) {
        super(nombreParametro, apellidoParametro);
    }

}

const katherin = new Usuario(
    'Katherin',
    'Sango',
    '1725839690',
    'soltero'
)
console.log(katherin.nombre);
console.log(katherin.apellido);
console.log(katherin.cedula);
console.log(katherin.estadoCivil);