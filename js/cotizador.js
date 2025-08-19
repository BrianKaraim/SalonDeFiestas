document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCotizacion");
  const resumenContainer = document.getElementById("resumen");
  const selectPaquete = document.getElementById("paquete");

  // Cargar paquetes desde JSON
  fetch("data/servicios.json")
    .then(response => response.json())
    .then(paquetes => {
      paquetes.forEach(pkg => {
        const option = document.createElement("option");
        option.value = pkg.nombre;
        option.textContent = `${pkg.nombre} - $${pkg.precio}`;
        selectPaquete.appendChild(option);
      });
    })
    .catch(error => console.error("Error cargando paquetes:", error));

  // Cargar cotización guardada en localStorage
  const cotizacionGuardada = JSON.parse(localStorage.getItem("cotizacion"));
  if (cotizacionGuardada) {
    form.style.display = "none";
    mostrarResumen(cotizacionGuardada);
  }

  // Manejo de formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cumpleanero = document.getElementById("cumpleanero").value;
    const email = document.getElementById("email").value;
    const invitadosAdultos = parseInt(document.getElementById("invitadosAdultos").value, 10);
    const invitadosMenores = parseInt(document.getElementById("invitadosMenores").value, 10);
    const paquete = document.getElementById("paquete").value;

    const cotizacion = {
      cumpleanero,
      email,
      invitadosAdultos,
      invitadosMenores,
      paquete
    };

    localStorage.setItem("cotizacion", JSON.stringify(cotizacion));

    Swal.fire({
      icon: "success",
      title: "Cotización realizada",
      text: "Tu cotización se guardó correctamente",
    });

    form.style.display = "none"; 
    mostrarResumen(cotizacion);
    form.reset();
  });

  // Función para mostrar resumen
  function mostrarResumen(datos) {
    resumenContainer.innerHTML = `
      <h2>Resumen de cotización</h2>
      <p><strong>Cumpleañero:</strong> ${datos.cumpleanero}</p>
      <p><strong>Email:</strong> ${datos.email}</p>
      <p><strong>Adultos:</strong> ${datos.invitadosAdultos}</p>
      <p><strong>Menores:</strong> ${datos.invitadosMenores}</p>
      <p><strong>Paquete elegido:</strong> ${datos.paquete}</p>
      <p>🙌 “Gracias por confiar en nosotros, en breve nos contactaremos para ofrecerle el asesoramiento que necesita.”</p>
    `;
    resumenContainer.style.display = "block";
    // Botón para reiniciar
    const btnReiniciar = document.createElement("button");
    btnReiniciar.textContent = "Volver a cotizar";
    resumenContainer.appendChild(btnReiniciar);

    btnReiniciar.addEventListener("click", () => {
      localStorage.removeItem("cotizacion");
      resumenContainer.innerHTML = ""; 
      resumenContainer.style.display = "none";
      form.style.display = "block"; 
    });
  }
});
