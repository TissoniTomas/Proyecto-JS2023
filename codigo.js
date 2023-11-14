/**
 *
 *
 * INICIO DE APLICACION
 *
 */
const agregarPedido = (mesa) =>{
  let pedido = document.createElement("dialog");
  pedido.id = "modal";
  pedido.classList.add = "modal"

  let titulo = document.createElement("h2");
  titulo.innerText = `Ingrese la orden de la mesa n° ${mesa.id}`
  titulo.classList.add("titulo--dialog")
  
  let entrada = document.createElement("div");
  entrada.classList.add("input");
  entrada.innerHTML = ` <label class="etiqueta--dialog" for="inputEntrada">Entrada:</label>
  <input type="text" id="inputEntrada" class="input--form">`
  
  let platoPrincipal = document.createElement("div");
  platoPrincipal.classList.add("input");
  platoPrincipal.innerHTML = ` <label class="etiqueta--dialog" for="inputPlatoPrincipal">Plato Principal:</label>
  <input type="text" id="inputEntrada" class="input--form">`
  
  let bebida = document.createElement("div");
  bebida.classList.add("input");
  bebida.innerHTML = ` <label class="etiqueta--dialog" for="inputBebida">Bebida :</label>
  <input type="text" id="inputEntrada" class="input--form">`
  
  let postre = document.createElement("div");
  postre.classList.add("input");
  postre.innerHTML = ` <label class="etiqueta--dialog" for="inputEntrada">Postre:</label>
  <input type="text" id="inputEntrada" class="input--form">`
  
  pedido.append(titulo, entrada, platoPrincipal, bebida, postre);
  document.body.appendChild(pedido);
  pedido.showModal();

}

const indiceMesa = (id) =>{
  return mesasSeleccionadas.findIndex((el)=>{
    return el.id === id;

  })

}

const seleccionarMesa = (elemento)=>{
    
  const seleccionMesa = document.getElementById(`mesa-${elemento.id}`);
  seleccionMesa.className += " ocupado";
  // Agregar mesa a la lista
  const indiceSeleccionMesa = indiceMesa(elemento.id);
  if(indiceSeleccionMesa !== -1){
    elemento.ocupado = false;
    seleccionMesa.classList.remove("ocupado");
    mesasSeleccionadas.splice(indiceSeleccionMesa, 1);
    
  }else{
    elemento.ocupado = true;
    seleccionMesa.classList.add = " ocupado "
    mesasSeleccionadas.push(elemento);
    agregarPedido(elemento);
    
  }

}


function crearMesas(render) {
  let mesasArray = [];
  for (let i = 1; i <= 36; i++) {
    mesasArray.push(new Mesas(i));
  }
  return mesasArray;
}

const renderizarPlataforma = (elemento) => {
  let main = document.querySelector("#main");
  main.innerHTML = "";
  let boton = document.createElement("button");
  boton.className = "boton";

  boton.innerHTML = '<a href="/index.html">Volver al inicio</a>';

  let titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.innerText = "Proyecto JS-Distribucion de mesas de restaurante";

  let contenedor = document.createElement("div");
  contenedor.className = "grilla";

  let mesasRender = "";
  for (const mesa of elemento) {
    mesasRender = document.createElement("div");
    mesasRender.className = "casilla";
    mesasRender.innerText = `${mesa.id}`;
    mesasRender.id = `mesa-${mesa.id}`
    if(mesa.ocupado === true){
    mesasRender.className += " ocupado";
    
    }
   if(mesa.nodisponible === true){
      mesasRender.className += " nodisponible";
    }
    contenedor.append(mesasRender);

    // Eventos del click

    mesasRender.addEventListener("click", () =>{
      seleccionarMesa(mesa);
      console.log(mesasSeleccionadas);
    })
  }

  main.append(boton, titulo, contenedor);
  
};


class Mesas {
  constructor(id) {
    this.id = id;
    this.ocupado = false;
    this.nodisponible = false;
  }
}

let mesas = crearMesas();
const mesasSeleccionadas = [];
renderizarPlataforma(mesas);


