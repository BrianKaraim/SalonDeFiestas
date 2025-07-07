# Cotizador de Fiestas - App en JavaScript

Esta es una pequeña aplicación que permite simular una cotización para un salón de fiestas.

---

## ¿Qué hace la aplicación?

1. Muestra un mensaje de bienvenida.
2. Pide el nombre del cumpleañero/a.
3. Solicita la cantidad de invitados.
4. Pide el nombre de cada invitado.
5. Pide un correo electrónico de contacto.
6. Muestra un resumen final con toda la información cargada.
7. Finaliza con un mensaje de confirmación.

---

## Funciones explicadas

### `pedirNombreCumpleanero()`

- Pide al usuario el nombre del cumpleañero/a.
- Valida que el valor no esté vacío.
- Retorna el nombre ingresado.

---

### `cargarInvitados(cantidad)`

- Pide el nombre de cada invitado según la cantidad especificada.
- Usa un `for` para iterar.
- Valida que cada nombre no esté vacío.
- Guarda los nombres en el array `invitados`.

---

### `mostrarResumen(nombreCumpleanero, listaInvitados)`

- Muestra en consola un resumen de la cotización.
- Incluye el nombre del cumpleañero/a y la lista de invitados.

---

## Archivos del proyecto

- `index.html` → archivo base para ejecutar la app en el navegador
- `script.js` → contiene toda la lógica en JavaScript
- `README.md` → este archivo, explicando cómo funciona la app

---
