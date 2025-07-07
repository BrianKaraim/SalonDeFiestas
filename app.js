// Array para guardar los nombres de los invitados
const invitados = [];

// Pide el nombre del cumpleañero con validación
function pedirNombreCumpleanero() {
    let nombre;
    do {
        nombre = prompt("¿Cuál es el nombre del cumpleañero o la cumpleañera?").trim();
    } while (nombre === "");
    return nombre;
}

// Pide los nombres de todos los invitados usando un ciclo for
function cargarInvitados(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let nombreInvitado;
        do {
            nombreInvitado = prompt(`Ingresá el nombre del invitado #${i + 1}`).trim();
        } while (nombreInvitado === "");
        invitados.push(nombreInvitado);
    }
}

// Muestra resumen por consola
function mostrarResumen(nombreCumpleanero, listaInvitados) {
    console.log(`🎉 Cotización para el cumpleaños de ${nombreCumpleanero}`);
    console.log("🧾 Lista de invitados:");
    for (let i = 0; i < listaInvitados.length; i++) {
        console.log(`- ${listaInvitados[i]}`);
    }
}

// 🟢 Flujo principal
alert("🎈 Bienvenido a tu cotización");

// Paso 1: Nombre del cumpleañero/a
const nombreCumpleanero = pedirNombreCumpleanero();

// Paso 2: Cantidad de invitados (validado)
let cantidadInvitados;
do {
    cantidadInvitados = parseInt(prompt(`¿Cuántos invitados tendrá ${nombreCumpleanero}?`));
} while (isNaN(cantidadInvitados) || cantidadInvitados <= 0);

cargarInvitados(cantidadInvitados);
mostrarResumen(nombreCumpleanero, invitados);

// Paso 3: Email con validación básica
let email;
do {
    email = prompt("Ingresá tu correo electrónico para enviarte la cotización").trim();
} while (email === "" || !email.includes("@"));

// Crear resumen para mostrarlo en alert
let resumenFinal = `📋 RESUMEN DE COTIZACIÓN\n------------------------\n`;
resumenFinal += `🎂 Cumpleañero/a: ${nombreCumpleanero}\n`;
resumenFinal += `👥 Cantidad de invitados: ${cantidadInvitados}\n`;
resumenFinal += `📄 Lista de invitados:\n- ${invitados.join("\n- ")}\n`;
resumenFinal += `📧 Email de contacto: ${email}`;

alert(resumenFinal);
alert("✅ A la brevedad estaremos enviando su cotización. ¡Gracias por usar nuestro servicio!");


