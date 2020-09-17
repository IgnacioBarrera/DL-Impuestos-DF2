import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

/* IMPUESTOS DEFAULT*/
let impuestos1 = new Impuestos(1000000,30000);
console.log(`El monto bruto anual default es $${impuestos1._monto_bruto_anual()} y las deducciones default son $${impuestos1._deducciones()}`);
/* CLIENTE DEFAULT*/
let cliente1 = new Cliente('Javiera',impuestos1);
console.log(`El nombre del cliente default es de ${cliente1._nombre()} con monto bruto anual de $${cliente1._impuestos()._monto_bruto_anual()} y deducciones de $${cliente1._impuestos()._deducciones()}`);
/* CALCULO IMPUESTOS DEFAULT */
console.log(`El calculos de los impuestos default del cliente son de $${cliente1.calculoImpuetos(cliente1._impuestos()._monto_bruto_anual(),cliente1._impuestos()._deducciones())}`);
    // INGRESE NOMBRE DEL CLIENTE
cliente1.nombre = 'INGRESE_EL_NOMBRE_DEL_CLIENTE';
console.log(`El nuevo nombre del cliente es: ${cliente1._nombre}`);
    // INGRESE MONTO BRUTO ANUAL DEL CLIENTE
impuestos1._monto_bruto_anual = 3333000;
console.log(`El nuevo monto bruto anual ingresado es de $${cliente1._impuestos()._monto_bruto_anual}`);
    // INGRESAR DEDUCCIONES DEL CLIENTE
impuestos1._deducciones = 123000;
console.log(`El nuevo monto de la deducciones ingresados es de $${cliente1._impuestos()._deducciones}`);
/* CALCULO DE IMPUESTOS CLIENTE CON MONTO Y DEDUCCIONES INGRESDAS */
console.log(`El nuevo valor de los impuestos respecto a los valores de monto y deducciones ingresados es de $${cliente1.calculoImpuetos(cliente1._impuestos()._monto_bruto_anual,cliente1._impuestos()._deducciones)}`);
/* CALCULO DE IMPUESTOS CLIENTE CON NOMBRE-SALARIO-DEDUCCIONES */
console.log(`El cliente ${cliente1._nombre}, con monto bruto anual de $${cliente1._impuestos()._monto_bruto_anual}, con deducciones de $${cliente1._impuestos()._deducciones} tienes unos impuestos de $${cliente1.calculoImpuetos(cliente1._impuestos()._monto_bruto_anual,cliente1._impuestos()._deducciones)}`);
