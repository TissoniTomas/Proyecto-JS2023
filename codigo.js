
let nombreUsuario = prompt("Hola! Bienvenido al menu de distribucion de mesas de su restaurante, por favor ingrese su usuario");
console.log("El usuario ingresado es " + nombreUsuario)

alert ("El usuario ingresado es " + nombreUsuario);

let contraseniaUsuario = prompt(" Bienvenido " + nombreUsuario + " por favor ingrese su clave de trabajador");

if ((nombreUsuario != "") && (contraseniaUsuario != "")){
    console.log("Bienvenido " +nombreUsuario +" a su turno laboral")
    alert("Bienvenido " +nombreUsuario +" a su turno laboral. El proceso continuara con una serie de datos a fin de determinar la estructura de su turno")
}

let horarioLaboral = parseInt(prompt("Por favor registre la cantidad de horas que hara en su turno"));

if (horarioLaboral<=7){
    alert ("Su turno del dia de hoy sera part time");
} else{
    alert("Su turno del dia de hoy sera full time");
}

const sectorA = "Mesas 1-12"
const sectorB = "Mesas 13-24"
const sectorC = "Mesas 25-36"
const finTurno = "FINALIZAR";


function tomaPedido(numeroMesa, sector){
    alert("Su sector de trabajo sera "+ sector);
    let ordenMesa = ""

     do {
        console.log(ordenMesa);
        for(i=1; i<=12; i++){
            ordenMesa = prompt("Ingrese la orden de la mesa N° " +(i +numeroMesa) +". Si quiere seleccionar la mesa siguiente, deje la casilla en blanco. Si quiere volver al inicio, digite FINALIZAR")
            if (ordenMesa.toUpperCase() === finTurno){
                break;
            }
            alert(" La orden de la mesa " +(i + numeroMesa) + " es " +ordenMesa);
           }
            console.log(ordenMesa);
     } while (ordenMesa !== finTurno);   
        
}


let seccionEmpleado = prompt("Por favor ingrese a continuacion la designacion de su sector de trabajo informada previamente por su supervisor/encargado. Los valores posibles son A-B-C")

if(seccionEmpleado == "A"){
    tomaPedido(0, sectorA);
}
  else if (seccionEmpleado == "B") {
    tomaPedido(12, sectorB);
} else if (seccionEmpleado == "C") {
   tomaPedido(24, sectorC);
}else{
    alert ("Por favor, ingrese una opcion valida. Recuerde que las opciones validas son A-B-C")
}

alert("Gracias por usar mi sistema")