const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const tablaVehiculosCuerpo = document.getElementById("tabla_vehiculos_cuerpo");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;
    const cumpleaños = document.getElementById("cumpleanos").value;
    
    agregarFilaATabla(nombre, edad, sexo, correo, celular, cumpleaños);
    formulario.reset();

    mostrarMensaje("Los datos se agregaron correctamente.");
});

function agregarFilaATabla(nombre, edad, sexo, correo, celular, cumpleaños) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${sexo}</td>
        <td>${correo}</td>
        <td>${celular}</td>
        <td>${cumpleaños}</td>
        <td><button class="eliminar-btn">Eliminar</button></td>
    `;
    tablaCuerpo.appendChild(fila);
}

tablaCuerpo.addEventListener("click", function(event) {
    if (event.target.classList.contains("eliminar-btn")) {
        const filaAEliminar = event.target.closest("tr");
        tablaCuerpo.removeChild(filaAEliminar);
        mostrarMensaje("Registro eliminado correctamente.");
    }
});
function mostrarMensaje(mensaje) {
    const mensajeFlotante = document.getElementById("mensaje-flotante");
    mensajeFlotante.textContent = mensaje;
    mensajeFlotante.style.display = "block";

    setTimeout(() => {
        mensajeFlotante.style.display = "none";
    }, 3000); 
}


const botonBorrarTabla = document.getElementById("borrarTabla");
botonBorrarTabla.addEventListener("click", function() {
    borrarTabla();
});

function borrarTabla() {
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    while (tablaCuerpo.firstChild) {
        tablaCuerpo.removeChild(tablaCuerpo.firstChild);
    }

    mostrarMensaje("La tabla se ha borrado correctamente.");
}

function mostrarMensaje(mensaje) {
    const mensajeFlotante = document.getElementById("mensaje-flotante");
    mensajeFlotante.textContent = mensaje;
    mensajeFlotante.style.display = "block";

    setTimeout(() => {
        mensajeFlotante.style.display = "none";
    }, 3000); 
}


document.addEventListener("DOMContentLoaded", function () {
    const registrarVehiculoButton = document.getElementById("registrar_vehiculo");
    
    registrarVehiculoButton.addEventListener("click", function() {
        const modelo = document.getElementById("modelo").value;
        const cilindraje = document.getElementById("cilindrado").value;
        const potencia = document.getElementById("potencia").value;
        const peso = document.getElementById("peso").value;
        const categoria = document.getElementById("categoria").value;
        const version = document.getElementById("version").value;
        const kilometraje = document.getElementById("kilometraje").value;
        const precio = document.getElementById("precio").value;

        if (
            modelo === "" ||
            cilindraje === "" ||
            potencia === "" ||
            peso === "" ||
            categoria === "" ||
            version === "" ||
            kilometraje === "" ||
            precio === ""
        ) {
            mostrarMensaje("Por favor, completa todos los campos.");
        } else {
            agregarFilaATablaVehiculos(modelo, cilindraje, potencia, peso, categoria, version, kilometraje, precio);
            formulario_vehiculo.reset();
            mostrarMensaje("¡Tu vehículo ha sido publicado!");
        }
    });
});


function agregarFilaATablaVehiculos(modelo, cilindraje, potencia, peso, categoria, version, kilometraje, precio) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${modelo}</td>
        <td>${cilindraje}</td>
        <td>${potencia}</td>
        <td>${peso}</td>
        <td>${categoria}</td>
        <td>${version}</td>
        <td>${kilometraje}</td>
        <td>${precio}</td>
        <td><button class="eliminar-btn">Eliminar</button></td>
    `;
    tabla_vehiculos_cuerpo.appendChild(fila);
}

tabla_vehiculos_cuerpo.addEventListener("click", function(event) {
    if (event.target.classList.contains("eliminar-btn")) {
        const filaAEliminar = event.target.closest("tr");
        tabla_vehiculos_cuerpo.removeChild(filaAEliminar);
        mostrarMensaje("Vehículo eliminado correctamente.");
    }
});
