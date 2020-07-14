var _this = this;
var adrian = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: false,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es:' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        if (_this.sueldo) { //como es opcional debemos verificar si se envia
            return _this.sueldo + (_this.sueldo * (impuesto / 100));
        }
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AT';
            case 'BN':
                return 'AF';
        }
    }
};
