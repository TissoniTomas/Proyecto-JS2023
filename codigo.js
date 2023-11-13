// let nombreUsuario = prompt(
//     "Hola! Bienvenido al menu de distribucion de mesas de su restaurante, por favor ingrese su usuario"
//   );
//   console.log("El usuario ingresado es " + nombreUsuario);
  
//   alert("El usuario ingresado es " + nombreUsuario);
  
//   let contraseniaUsuario = prompt(
//     " Bienvenido " + nombreUsuario + " por favor ingrese su clave de trabajador"
//   );
  
//   if (nombreUsuario != "" && contraseniaUsuario != "") {
//     console.log("Bienvenido " + nombreUsuario + " a su turno laboral");
//     alert(
//       "Bienvenido " +
//         nombreUsuario +
//         " a su turno laboral. El proceso continuara con una serie de datos a fin de determinar la estructura de su turno"
//     );
//   }
  
//   let horarioLaboral = parseInt(
//     prompt("Por favor registre la cantidad de horas que hara en su turno")
//   );
  
//   if (horarioLaboral <= 7) {
//     alert("Su turno del dia de hoy sera part time");
//   } else {
//     alert("Su turno del dia de hoy sera full time");
//   }
  
//   const sectorA = "Mesas 1-12";
//   const sectorB = "Mesas 13-24";
//   const sectorC = "Mesas 25-36";
//   const finTurno = "FINALIZAR";
  
//   let seccionEmpleado = prompt(
//     "Por favor ingrese a continuacion la designacion de su sector de trabajo informada previamente por su supervisor/encargado. Los valores posibles son A-B-C"
//   );
  
//   class Pedido {
//     constructor(numeroMesa, entrada, platoPrincipal, postre, bebida) {
//       this.numeroMesa = numeroMesa;
//       this.entrada = entrada;
//       this.platoPrincipal = platoPrincipal;
//       this.postre = postre;
//       this.bebida = bebida;
//     }
//   }
//   const pedidosRestaurante = [];
  
//   if (seccionEmpleado == "A") {
//     tomaPedido(0, sectorA);
//   } else if (seccionEmpleado == "B") {
//     tomaPedido(12, sectorB);
//   } else if (seccionEmpleado == "C") {
//     tomaPedido(24, sectorC);
//   } else {
//     alert(
//       "Por favor, ingrese una opcion valida. Recuerde que las opciones validas son A-B-C"
//     );
//   }
  
//   function tomaPedido(numeroMesa, sector) {
//     alert("Su sector de trabajo sera " + sector);
//     let ordenMesa = "";
   
  
//     do {
  
     
//       for (i = 1; i <= 12; i++) {
        
        
//         alert("A continuacion se solicitara el ingreso del pedido de la mesa " + (i + numeroMesa));
//         let numeroMesaPedido = (numeroMesa + i)
//         let entradaPedido = prompt("Ingrese la entrada solicitada");
//         let platoPrincipalPedido = prompt(
//           "Ingrese el plato principal solicitado"
//           );
//           let postrePedido = prompt("Ingrese el postre solicitada");
//           let bebidaPedido = prompt("Ingrese la bebida solicitada");
          
//           const pedidoMesa = new Pedido(
//             numeroMesaPedido,
//             entradaPedido,
//             platoPrincipalPedido,
//             postrePedido,
//             bebidaPedido
//             );
            
//             pedidosRestaurante.push(pedidoMesa);
//             ordenMesa =  prompt("Si quiere seleccionar la mesa siguiente, deje la casilla en blanco. Si quiere volver al inicio, digite FINALIZAR")
//                         if (ordenMesa.toUpperCase() === finTurno){
//                              break;
//                          }
//       }
      
//     } while (ordenMesa !== finTurno);
//   }
  
//   pedidosRestaurante.map((atributo) => [
//     alert(
//       `El pedido de la mesa numero ${atributo.numeroMesa} consta de :\n Entrada: ${atributo.entrada} \n Plato Principal:  ${atributo.platoPrincipal} \n Bebida: ${atributo.bebida} \n Postre: ${atributo.postre}`
//     ),
//   ]);
  
  
  
//   alert("Gracias por usar mi sistema");



// <button class="boton bg-red-400 rounded m-5 p-5 text-bold">
// <a href="/index.html">Volver al inicio</a> 
// </button>
// <h1 class="text-5xl text-center text-purple-500">Proyecto JS-Distribucion de mesas de restaurante</h1>
// <div class="grilla grid grid-cols-6 grid-rows-6 m-16 ">

 
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 1</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 2</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 3</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 4</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 5</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500"> 6</div>  
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">7 </div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">8</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">9</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">10</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">11</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">12</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">13</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">14</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">15</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">20</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">17</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">18</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">19</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">20</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">21</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">22</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">23</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">24</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">25</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">26</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">27</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">28</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">29</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">30</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">31</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">32</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">33</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">34</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">35</div>
//      <div class="casilla font-serif flex mt-10 items-center justify-center text-2xl  w-20 h-20 border text-center bg-pink-500">36</div>

 
// </div>


  
let main = document.querySelector("#main");
class Mesas{
  constructor(id){
    this.id= id;
  }
}

 const mesasPlataforma = [
  new Mesas(1), new Mesas(2),new Mesas(3),new Mesas(4),new Mesas(5),new Mesas(6),new Mesas(7),new Mesas(8),new Mesas(9),new Mesas(10),new Mesas(11),new Mesas(12),new Mesas(13),new Mesas(14),new Mesas(15),new Mesas(16),new Mesas(17),new Mesas(18),new Mesas(19),new Mesas(20),new Mesas(21),new Mesas(22),new Mesas(23),new Mesas(24),new Mesas(25),new Mesas(26),new Mesas(27),new Mesas(28),new Mesas(29),new Mesas(30),new Mesas(31),new Mesas(32),new Mesas(33),new Mesas(34),new Mesas(35),new Mesas(36),
 ]

const renderizarPlataforma = ()=>{
  let boton = document.createElement("button");
  boton.classList.add("boton", "bg-red-400", "rounded", "m-5", "p-5", "text-bold");

  boton.innerHTML = '<a href="/index.html">Volver al inicio</a>';


  let titulo = document.createElement("h1");
  titulo.classList.add("text-5xl", "text-center", "text-purple-500");
  titulo.innerText = "Proyecto JS-Distribucion de mesas de restaurante";

  let contenedor = document.createElement("div");
  contenedor.classList.add("grilla", "grid", "grid-cols-6", "grid-rows-6", "m-16");

  let mesasRender = "";
  for(const mesa of mesasPlataforma){
    mesasRender = document.createElement("div");
    mesasRender.classList.add("font-serif", "flex", "mt-10", "items-center", "justify-center", "text-2xl", "w-20", "h-20", "border", "text-center", "bg-pink-500");
    mesasRender.innerText= `${mesa.id}`;
    contenedor.append(mesasRender);
  }
  
  main.append(boton, titulo, contenedor);

}
 
renderizarPlataforma();
