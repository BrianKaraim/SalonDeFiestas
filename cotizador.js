const formCotizacion = document.getElementById("formCotizacion");
const invitadosContainer = document.getElementById("invitados-container");
const resumenContainer = document.getElementById("resumen-container");

// Recuperamos datos previos del storage (si existen)
const cotizacionGuardada = JSON.parse(localStorage.getItem("cotizacion")) || null;
if (cotizacionGuardada) mostrarResumen(cotizacionGuardada);

//formulario inicial
formCotizacion.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreCumpleanero = document.getElementById("cumpleanero").value.trim();
  const cantidadMenores = parseInt(document.getElementById("cantidadMenores").value);
  const cantidadAdultos = parseInt(document.getElementById("cantidadAdultos").value);
  const email = document.getElementById("email").value.trim();

  // Limpiamos contenedor 
  invitadosContainer.innerHTML = `<h2>Ingresá los nombres de los invitados</h2>`;

  // Inputs para menores
  if (cantidadMenores > 0) {
    const tituloMenores = document.createElement("h3");
    tituloMenores.textContent = "Invitados menores";
    invitadosContainer.appendChild(tituloMenores);

    for (let i = 0; i < cantidadMenores; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Menor #${i + 1}`;
      input.classList.add("input-menor");
      input.required = true;
      invitadosContainer.appendChild(input);
    }
  }

  // Inputs para adultos
  if (cantidadAdultos > 0) {
    const tituloAdultos = document.createElement("h3");
    tituloAdultos.textContent = "Invitados adultos";
    invitadosContainer.appendChild(tituloAdultos);

    for (let i = 0; i < cantidadAdultos; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Adulto #${i + 1}`;
      input.classList.add("input-adulto");
      input.required = true;
      invitadosContainer.appendChild(input);
    }
  }

  // Botón confirmar
  const btnConfirmar = document.createElement("button");
  btnConfirmar.textContent = "Confirmar Invitados";
  btnConfirmar.type = "button";
  invitadosContainer.appendChild(btnConfirmar);

  btnConfirmar.addEventListener("click", () => {
    const menores = [];
    const adultos = [];

    document.querySelectorAll(".input-menor").forEach(input => {
      if (input.value.trim() !== "") menores.push({ nombre: input.value.trim() });
    });

    document.querySelectorAll(".input-adulto").forEach(input => {
      if (input.value.trim() !== "") adultos.push({ nombre: input.value.trim() });
    });

    if (menores.length !== cantidadMenores || adultos.length !== cantidadAdultos) {
      alert("Por favor completá todos los nombres de los invitados.");
      return;
    }

    const cotizacion = {
      nombreCumpleanero,
      cantidadMenores,
      cantidadAdultos,
      menores,
      adultos,
      email
    };

    localStorage.setItem("cotizacion", JSON.stringify(cotizacion));
    mostrarResumen(cotizacion);
  });
});

// Muestra resumen
function mostrarResumen(data) {
  resumenContainer.innerHTML = `
    <h2>Resumen de Cotización</h2>
    <p><strong>Cumpleañero:</strong> ${data.nombreCumpleanero}</p>
    <p><strong>Menores:</strong> ${data.cantidadMenores} (${data.menores.map(m => m.nombre).join(", ")})</p>
    <p><strong>Adultos:</strong> ${data.cantidadAdultos} (${data.adultos.map(a => a.nombre).join(", ")})</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><em>🎉 A la brevedad nos estaremos comunicando para enviarle su cotización.</em></p>
  `;

  // Botón para reiniciar
  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Volver a cotizar";
  resumenContainer.appendChild(btnReiniciar);

  btnReiniciar.addEventListener("click", () => {
    localStorage.removeItem("cotizacion");
    location.reload();
  });
}
