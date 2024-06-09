// ==UserScript==
// @name         Extraer Llave y Contar Mensajes Cifrados
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Extrae la llave de los párrafos y cuenta mensajes cifrados en cripto.tiiny.site
// @author       Pedro_Sandoval
// @match        https://cripto.tiiny.site/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Función para extraer la clave de los párrafos
    function obtenerClave() {
        let clave = '';
        const parrafos = document.querySelectorAll('p');
        parrafos.forEach(parrafo => {
            const texto = parrafo.innerText;
            for (let i = 0; i < texto.length; i++) {
                if (texto[i] === texto[i].toUpperCase() && /[A-Z]/.test(texto[i])) {
                    clave += texto[i];
                }
            }
        });
        return clave;
    }

    // Función para contar los mensajes cifrados en los divs
    function contarMensajesCifrados() {
        const divs = document.querySelectorAll('div');
        let contador = 0;
        divs.forEach(div => {
            if (div.id && /^[A-Za-z0-9+/=]+$/.test(div.id)) {
                contador++;
            }
        });
        return contador;
    }

    // Obtener la clave de los párrafos
    const clave = obtenerClave();
    console.log("La llave es: " + clave);

    // Contar los mensajes cifrados en los divs
    const cantidadMensajesCifrados = contarMensajesCifrados();
    console.log("Cantidad de mensajes cifrados: " + cantidadMensajesCifrados);
})();
