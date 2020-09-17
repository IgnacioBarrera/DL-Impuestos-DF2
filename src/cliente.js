export default class Cliente {
    constructor(nombre,impuestos) {
        this._nombre = () => nombre;
        this._impuestos = () => impuestos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    calculoImpuetos(bruto,deduccion){
        return ((parseFloat(bruto) - parseFloat(deduccion))*parseFloat(0.21));
    } 
}