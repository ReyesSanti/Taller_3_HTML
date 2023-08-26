const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    
    agregarFilaATabla(nombre, edad);
    formulario.reset();
});

function agregarFilaATabla(nombre, edad) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
    `;
    tablaCuerpo.appendChild(fila);
}
