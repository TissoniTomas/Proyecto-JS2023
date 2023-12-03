/**
 *
 *
 * INICIO DE APLICACION
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  class Mesas {
    constructor(id) {
      this.id = id;
      this.ocupado = false;
      this.pedido = false;
    }
  }

  const informacionMozo = async () => {
    const resp = await fetch("/mozos.json");
    const data = await resp.json();
    let valor = "";

    Swal.fire({
      title: "¡IMPORTANTE!",
      text: "Ingrese a continuacion su clave de trabajador por favor",
      input: "password",
      inputPlaceholder: "Ingrese su clave",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "CANCELAR",
      confirmButtonText: "OK",
      allowEnterKey: true,
      allowEscapeKey: true,
    })
      
      
      .then((result) => {
        valor = result.value;
        console.log("Ingreso " + valor);
        console.log(typeof valor);
        const mozoClave = data.find((mozo) => mozo.codigoTrabajo === valor);
        if (mozoClave) {
          Swal.fire({
            title: "¡IMPORTANTE!",
            html: `A continuación presentaremos la información relacionada a su código de trabajo:<br>
          <b>Nombre:</b> ${mozoClave.nombre}<br>
          <b>Edad:</b> ${mozoClave.edad}<br>
          <b>Sexo:</b> ${mozoClave.sexo}<br>
          <b>Turno:</b> ${mozoClave.turno}<br>
          ¿Es esta informacion correcta?`,
            icon: "question",
            showCancelButton: true,
            cancelButtonText: "NO",
            confirmButtonText: "SI",
            allowEnterKey: true,
            allowEscapeKey: true,
          }).then((result) => {
            if(result.isDismissed){
              setTimeout(() => {
                Swal.fire({
                  title: "¡IMPORTANTE!",
                  text: "Vuelva a ingresar su clave o informele a su encargado del turno",
              
                  icon: "error",
                
                  confirmButtonText: "OK",
                  allowEnterKey: true,
                  
                })
               }, 1000)

            }else{
              setTimeout(() => {
                Swal.fire({
                  title: "¡BIENVENIDO!",
                  text: `Hola ${mozoClave.nombre}, ¡bienveido/a!`,
              
                  icon: "success",
                
                  confirmButtonText: "OK",
                  allowEnterKey: true,
                  
                })
               }, 1000)
              

            }
              });
        } else {
          Swal.fire({
            title: "ERROR",
            text: "Clave invalida, vuelva a intentarlo o informele al encargado del turno",
            
            icon: "error",
            
            confirmButtonText: "OK",
            allowEnterKey: true,
            
          })
        }
      });
  };

  const capturaModal = (id) => {
    ingresoEntrada = document.querySelector(`#entrada-${id}`);
    let ingresoPlatoPrincipal = document.querySelector(`#platoPrincipal-${id}`);
    let ingresoBebidas = document.querySelector(`#bebida-${id}`);
    let ingresoPostre = document.querySelector(`#postre-${id}`);

    let pedido = {
      entrada: ingresoEntrada.value,
      platoPrincipal: ingresoPlatoPrincipal.value,
      bebida: ingresoBebidas.value,
      postre: ingresoPostre.value,
    };

    pedidoArray.push(pedido);
    console.log(pedidoArray);

    return pedido;
  };

  const borrarPedido = (id) => {
    const seleccionMesa = document.getElementById(`mesa-${id}`);
    const keys = Object.keys(localStorage);
    const idString = id.toString();
    console.log("ID a borrar:", id);
    console.log("Tipo de ID:", typeof id);
    console.log("Tipo de claves en localStorage:", typeof keys[0]);
    keys.includes(idString)
      ? (localStorage.removeItem(idString),
        seleccionMesa.classList.remove("ocupado"),
        console.log(`Elemento con id ${id} eliminado del localStorage.`))
      : console.log(
          `No se encontró ningún elemento con id ${id} en el localStorage`
        );
  };

  const enviarPedido = (id) => {
    let pedido = capturaModal(id);
    localStorage.setItem(id, JSON.stringify(pedido));
    const seleccionMesa = document.getElementById(`mesa-${id}`);

    seleccionMesa.className += " ocupado";
    console.log(pedido);
  };

  const agregarPedido = (mesa) => {

    
    let pedidoModal = document.createElement("dialog");
    pedidoModal.id = "modal";
    pedidoModal.classList.add("modal");

    let tituloModal = document.createElement("h2");
    tituloModal.innerText = `Ingrese la orden de la mesa n° ${mesa.id}`;
    tituloModal.classList.add("titulo--dialog");

    let formModal = document.createElement("form");
    formModal.classList.add("form--modal");

    let entradaModal = document.createElement("div");
    entradaModal.classList.add("input");
    entradaModal.innerHTML = `<label class="etiqueta--dialog" for="inputEntrada">Entrada:</label>
    <input type="text" id="entrada-${mesa.id}"  class="input--form" required>`;

    let platoPrincipalModal = document.createElement("div");
    platoPrincipalModal.classList.add("input");
    platoPrincipalModal.innerHTML = ` <label class="etiqueta--dialog" for="inputPlatoPrincipal">Plato Principal:</label>
    <input type="text" id="platoPrincipal-${mesa.id}" class="input--form" required>`;

    let bebidaModal = document.createElement("div");
    bebidaModal.classList.add("input");
    bebidaModal.innerHTML = ` <label class="etiqueta--dialog" for="inputBebida">Bebida :</label>
    <input type="text" id="bebida-${mesa.id}" class="input--form" required>`;

    let postreModal = document.createElement("div");
    postreModal.classList.add("input");
    postreModal.innerHTML = ` <label class="etiqueta--dialog" for="inputEntrada">Postre:</label>
    <input type="text" id="postre-${mesa.id}" class="input--form" required>`;

    let divBotones = document.createElement("div");
    divBotones.classList.add("divBotones");

    let botonPedidoModal = document.createElement("button");
    botonPedidoModal.classList.add("botonPedido");
    botonPedidoModal.innerText = "ENVIAR";

    let botonLiberarMesa = document.createElement("button");
    botonLiberarMesa.classList.add("botonLiberarMesa");
    botonLiberarMesa.innerText = "LIBERAR MESA";

    divBotones.append(botonPedidoModal, botonLiberarMesa);

    pedidoModal.append(
      tituloModal,
      formModal,
      entradaModal,
      platoPrincipalModal,
      bebidaModal,
      postreModal,
      divBotones
    );

    document.body.appendChild(pedidoModal);

    pedidoModal.showModal();

    botonPedidoModal.addEventListener("click", () => {
      enviarPedido(mesa.id);

      pedidoModal.close();
    });

    botonLiberarMesa.addEventListener("click", () => {
      borrarPedido(mesa.id);
      pedidoModal.close();
    });
  };

  const seleccionarMesa = (elemento) => {
    const seleccionMesa = document.getElementById(`mesa-${elemento.id}`);

    agregarPedido(elemento);
    elemento.ocupado = true;
  };

  function crearMesas() {
    let mesaNumero = parseFloat(localStorage.getItem("numeroMesas"));
    mesaNumero =
      !mesaNumero || isNaN(mesaNumero)
        ? parseFloat(
            prompt("Indique el número de mesas que trabajará el día de hoy")
          )
        : mesaNumero;

    localStorage.setItem("numeroMesas", mesaNumero);
    let mesasArray = [];

    for (let i = 1; i <= mesaNumero; i++) {
      mesasArray.push(new Mesas(i));
    }
    return mesasArray;
  }

  const crearNuevoGrid = () => {
    Swal.fire({
      title: "¡Atencion!",
      text: "Estas a punto de reiniciar la grilla de trabajo.¿Quieres continuar?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "CANCELAR",
      confirmButtonText: "OK",
      allowEnterKey: true,
      allowEscapeKey: true,
    }).then((result) => {
      result.isConfirmed
        ? setTimeout(() => {
            Swal.fire({
              title: "Grilla de trabajo reiniciada",
              text: "Se ha reiniciado la grilla de trabajo, refresque la página para volver a indicar el número de mesas",
              icon: "success",
            }),
              localStorage.clear();
          }, 2000)
        : console.log("Operación Cancelada");
    });
  };

  const renderizarPlataforma = (mesas) => {
    let main = document.querySelector("#main");
    main.innerHTML = "";

    let divButtonsPlatform = document.createElement("div");
    divButtonsPlatform.classList.add("div-plataforma");

    let boton = document.createElement("button");
    boton.className = "boton";
    boton.innerHTML =
      '<a class="text--boton" href="/index.html">Volver al inicio</a>';

    let botonNuevoGrid = document.createElement("button");
    botonNuevoGrid.classList.add("boton", "text--boton", "botonGrid");
    botonNuevoGrid.innerText = "Reiniciar Grid";
    botonNuevoGrid.addEventListener("click", () => {
      crearNuevoGrid();
    });

    let titulo = document.createElement("h1");
    titulo.className = "titulo";
    titulo.innerText = "Proyecto JS-Distribucion de mesas de restaurante";

    let contenedor = document.createElement("div");
    contenedor.className = "grilla";

    let mesasRender = "";
    for (const mesa of mesas) {
      mesasRender = document.createElement("div");
      mesasRender.className = "casilla";
      mesasRender.innerText = `${mesa.id}`;
      mesasRender.id = `mesa-${mesa.id}`;

      contenedor.append(mesasRender);

      mesasRender.addEventListener("click", () => {
        seleccionarMesa(mesa);
      });
    }

    divButtonsPlatform.append(boton, botonNuevoGrid);
    main.append(divButtonsPlatform, titulo, contenedor);
  };

  informacionMozo();
  let mesas = crearMesas();
  let pedidoArray = [];
  renderizarPlataforma(mesas);
  const keys = Object.keys(localStorage);
  console.log(keys);
  if (keys.length > 0) {
    keys.forEach((key) => {
      let mesa = document.querySelector(`#mesa-${key}`);
      if (mesa) {
        mesa.classList.add("ocupado");
      }
    });
  }
  
document.addEventListener("DOMContentLoaded", function () {
  const hamburguesa = document.querySelector(".hamburguesa");
  const navbarItems = document.querySelector(".navbar-items");

  hamburguesa.addEventListener("click", function () {
    navbarItems.classList.toggle("show");
  });
});

});
