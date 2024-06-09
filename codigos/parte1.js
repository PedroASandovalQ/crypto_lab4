// ==UserScript==
// @name         Extraer Llave de Párrafos
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Extrae la llave de los párrafos en cripto.tiiny.site
// @author       Pedro_Sandoval
// @match        https://cripto.tiiny.site/*
// @grant        none
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

    // Obtener la clave de los párrafos
    const clave = obtenerClave();
    console.log("La llave es: " + clave);
})();
