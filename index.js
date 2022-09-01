// Registro de los trabajadores
class trabajador {
    constructor(nombre, apellido, cargo, sueldo) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.cargo = cargo,
        this.sueldo = sueldo
    }
    actualizarSueldo (sueldoConDescuento){
        this.sueldo - sueldoConDescuento;
    }
}
let registro = []
alert ("Ingrese los datos del trabajador")
cargaUsuario(registro)
// Datos para recolectar y crear un usuario
function cargaUsuario(registro) {
    let empleadoNombre = prompt("Ingrese nombre")
    let empleadoApellido = prompt("Ingrese apellido")
    let empleadoCargo = prompt("Ingrese el cargo")
    let empleadoSueldo = parseInt(prompt("Ingrese el salario básico"))
    let newUser = new trabajador (empleadoNombre, empleadoApellido, empleadoCargo, empleadoSueldo)
    registro.push(newUser);
    console.log("Se agregó el usuario ", newUser)
}
// Cargar la fecha de ingreso a la empresa
class FechaDeIngreso {
    constructor (día, mes, año) {
        this.dia = día,
        this.mes = mes,
        this.año = año
    }
}
let registroFecha = []
alert ("Ingrese los datos de ingreso a la empresa")
cargaFecha(registroFecha)
// Datos para recolectar la fecha
function cargaFecha(registroFecha) {
    let diaFecha = parseInt(prompt("Ingrese el día de ingreso a la empresa"))
    let mesFecha = prompt("Ingresa el mes")
    let anoFecha = parseInt(prompt("Ingresa el año"))
    let newDate = new FechaDeIngreso (diaFecha, mesFecha, anoFecha)
    registroFecha.push(newDate);
    console.log("Se agregó la fecha de ingreso", newDate)
}
//Calcular 

let cargo = trabajador.cargo
let sueldo = trabajador.sueldo
let horasTrabajadasMes = 240
let horaExtra = (sueldo/horasTrabajadasMes) * 1.5
// Delcarar la fecha de hoy y restar la fecha de ingreso para conseguir la antigüedad
let fechaActual = 0
let antiguedad = fechaActual - registroFecha

// Horas extra
let cantidadHoras = parseInt(prompt("Ingrese el número de horas extra que desea registrar"))
