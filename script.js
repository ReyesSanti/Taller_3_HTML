const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

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
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const mensaje = "¡Tu vehículo ha sido publicado!";
        alert(mensaje);

        form.reset();
    });
});