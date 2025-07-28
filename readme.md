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
- `app.js` → contiene toda la lógica en JavaScript
- `README.md` → este archivo, explicando cómo funciona la app

---

Continuando con la mejora de la app, se integró **manipulación del DOM** para ofrecer una experiencia de usuario más interactiva y dinámica.  
Ahora toda la interacción se realiza en pantalla, sin usar `prompt` ni `alert` (excepto en validaciones), mostrando formularios y resúmenes directamente en el navegador.

---

## **Estructura del proyecto**

- **`cotizador.html`**  
  Contiene la estructura principal de la página:
  - Un formulario con:
    - Nombre del cumpleañero/a.
    - Cantidad de invitados menores.
    - Cantidad de invitados adultos.
    - Correo electrónico.
    - Botón para iniciar la cotización.
  - Contenedores vacíos que se completan dinámicamente con los nombres de invitados y el resumen.

- **`cotizador.js`**  
  Contiene toda la lógica de la aplicación:
  - Genera dinámicamente los campos para ingresar los nombres de los invitados.
  - Escucha eventos de **`submit`** y **`click`** para manejar la interacción.
  - Guarda y recupera los datos en el **`localStorage`**.
  - Muestra el resumen de la cotización en el DOM.
  - Agrega un botón para eliminar los datos y volver a comenzar.

- **`style.css`**
  Define estilos visuales, incluyendo el fondo con imagen de cumpleaños y diseño general de la app.

---

## **Características principales**

### **1. Interacción con el DOM**

- La app genera dinámicamente inputs para los nombres de los invitados dependiendo de las cantidades ingresadas (menores y adultos).
- Los datos se muestran directamente en pantalla, sin usar `prompt` ni `alert` (salvo para validaciones puntuales).

### **2. Eventos**

- **`submit`** en el formulario principal: Captura los datos iniciales (nombre, cantidades, email).  
- **`click`** en el botón "Confirmar invitados": Toma los nombres de todos los invitados, los guarda y genera el resumen.
- **`click`** en el botón "Eliminar datos y volver a empezar": Limpia el **`localStorage`** y reinicia la app.

### **3. Uso de localStorage**

- Los datos de la cotización se guardan en el **localStorage** para que al recargar la página sigan visibles.
- Si ya hay datos guardados, el resumen se muestra automáticamente al cargar la página.
- Solo se borran al hacer clic en "Eliminar datos y volver a empezar".

---

## **Flujo de la aplicación**

1. El usuario completa:
   - Nombre del cumpleañero/a.
   - Cantidad de invitados menores.
   - Cantidad de invitados adultos.
   - Correo electrónico.

2. Se generan inputs dinámicos para ingresar los nombres de los invitados.

3. Al hacer clic en **"Confirmar invitados"**, se:
   - Valida que todos los nombres estén completos.
   - Guarda toda la información en el **localStorage**.
   - Muestra un **resumen en pantalla**, incluyendo el mensaje:
     > *"A la brevedad nos estaremos comunicando para enviarle su cotización."*

4. Si el usuario recarga la página, la información sigue disponible.

5. Si el usuario hace clic en **"Volver a Cotizar"**, se borra todo del **localStorage** y la app vuelve al estado inicial.

---

## **Tecnologías utilizadas**

- **HTML5**: Estructura principal de la página.
- **CSS**: Diseño visual, fondo con imagen y estilos responsivos.
- **JavaScript**:
  - Manipulación del DOM (`createElement`, `appendChild`, `innerHTML`).
  - Eventos (`addEventListener`).
  - Almacenamiento local (`localStorage`).

---
