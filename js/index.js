const niveles = [
    { 
        nivel: 1,
        pregunta: "¿Qué animal puede girar su cabeza hasta 270 grados?", 
        adivinanza: "Vuela sin alas, silba sin boca y pica sin dientes. ¿Qué es?", 
        completar: "La lechuza",
    },
    { 
        nivel: 2,
        pregunta: "¿Qué tiene ojos pero no puede ver?", 
        adivinanza: "Sin cuerpo voy, sin cuerpo vengo, y aunque no tengo cuerpo, viajo con el viento.", 
        completar: "La cerradura",
    },
    { 
        nivel: 3,
        pregunta: "¿Qué es lo que no tiene vida, pero puede morir si se le aplasta?", 
        adivinanza: "Tiene barbas y no es persona, tiene corona y no es reina.", 
        completar: "El maíz",
    },
    { 
        nivel: 4,
        pregunta: "¿Cuál es el único animal que puede ver el color azul?", 
        adivinanza: "De tal palo, tal astilla.", 
        completar: "El perro",
    },
    { 
        nivel: 5,
        pregunta: "¿Qué animal puede vivir sin cabeza durante nueve días?", 
        adivinanza: "¿Cuál es el animal más antiguo?", 
        completar: "La gallina",
    },
    { 
        nivel: 6,
        pregunta: "¿Qué cosa alumbra más que el sol?", 
        adivinanza: "¿Cuál es el colmo de un electricista?", 
        completar: "Que su hijo sea un rayo",
    },
    { 
        nivel: 7,
        pregunta: "¿Qué cosa llega más rápida al horizonte que el sol?", 
        adivinanza: "¿Qué cosa será, que cuanto más grande, menos se ve?", 
        completar: "La sombra",
    },
    { 
        nivel: 8,
        pregunta: "¿Qué planta siempre está en el mismo lugar?", 
        adivinanza: "Verde por fuera, blanco por dentro. Si quieres que te lo diga, espera un momento.", 
        completar: "La cebolla",
    },
    { 
        nivel: 9,
        pregunta: "¿Cuál es el animal que tiene más dientes?", 
        adivinanza: "Tiene nombre de flor y esconde un gran temor.", 
        completar: "El tiburón",
    },
    { 
        nivel: 10,
        pregunta: "¿Cuál es el animal más antiguo del mundo?", 
        adivinanza: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.", 
        completar: "La pera",
    },
    { 
        nivel: 11,
        pregunta: "¿Cuál es el lugar más frío del mundo?", 
        adivinanza: "De plata me bañaron, de oro me untaron, y si quieres que te diga, no me adivinarás.", 
        completar: "El plátano",
    },
    { 
        nivel: 12,
        pregunta: "¿Cuál es el animal más perezoso del mundo?", 
        adivinanza: "¿Cuál es el colmo de los colmos?", 
        completar: "Que un mudo le diga a un sordo que un ciego lo está mirando",
    },
    { 
        nivel: 13,
        pregunta: "¿Qué cosa está en el medio del mar?", 
        adivinanza: "¿Qué cosa es un punto blanco en el campo y un punto negro en el agua?", 
        completar: "El avestruz",
    },
    { 
        nivel: 14,
        pregunta: "¿Qué cosa puede subir sin moverse?", 
        adivinanza: "Si me pronuncias, desaparezco. ¿Qué soy?", 
        completar: "El silencio",
    },
    { 
        nivel: 15,
        pregunta: "¿Qué cosa crece mientras más la quitas?", 
        adivinanza: "Limpio por fuera, verde por dentro. Si quieres que te lo diga, espera.", 
        completar: "El pepino",
    },
    { 
        nivel: 16,
        pregunta: "¿Cuál es el animal que puede vivir sin agua?", 
        adivinanza: "Una cuerda, un pozo, un balde y un cántaro. ¿Qué es?", 
        completar: "El pozo",
    },
    { 
        nivel: 17,
        pregunta: "¿Cuál es el único animal que no puede saltar?", 
        adivinanza: "Rico como un rey, pero no tengo reino. Verde como el mar, pero no soy un pepino. ¿Qué soy?", 
        completar: "El aguacate",
    },
    { 
        nivel: 18,
        pregunta: "¿Qué cosa sube al cielo y baja a la tierra?", 
        adivinanza: "Tiene dientes y no come, tiene cabeza y no es hombre. ¿Qué es?", 
        completar: "El peine",
    },
    { 
        nivel: 19,
        pregunta: "¿Qué cosa tiene ojos pero no ve?", 
        adivinanza: "Alto como un pino, pesa como un comino. ¿Qué es?", 
        completar: "El humo",
    },
    { 
        nivel: 20,
        pregunta: "¿Qué cosa tiene patas pero no puede caminar?", 
        adivinanza: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera.", 
        completar: "La lechuga",
    },
    { 
        nivel: 21,
        pregunta: "¿Qué cosa tiene cabeza y cola pero no es un animal?", 
        adivinanza: "Aunque soy blanca, nunca seré harina, ¿Qué soy?", 
        completar: "La nieve",
    },
    { 
        nivel: 22,
        pregunta: "¿Qué cosa tiene llaves pero no abre ninguna puerta?", 
        adivinanza: "Cuanto más se moja, más se seca. ¿Qué es?", 
        completar: "El sol",
    },
    { 
        nivel: 23,
        pregunta: "¿Qué cosa tiene agujas pero no puede coser?", 
        adivinanza: "Dura por fuera, verde por dentro. Si quieres que te lo diga, espera.", 
        completar: "La sandía",
    },
    { 
        nivel: 24,
        pregunta:"¿Qué cosa es transparente y siempre está delante tuyo?",
        adivinanza: "Tiene capa de cuero y alma de acero. ¿Qué es?",
        completar: "La cebolla",
        },
        {
        nivel: 25,
        pregunta: "¿Qué cosa es imposible mantenerla hasta que alguien no la pide?",
        adivinanza: "Vuela sin alas, silba sin boca y pica sin dientes. ¿Qué es?",
        completar: "La carta",
        },
        {
        nivel: 26,
        pregunta: "¿Qué cosa siempre se va hacia arriba aunque nunca se mueve?",
        adivinanza: "Aunque soy amarilla, nunca seré una banana. ¿Qué soy?",
        completar: "La escalera",
        },
        {
        nivel: 27,
        pregunta: "¿Qué cosa es más pequeña cuando más grande es?",
        adivinanza: "Tiene ojos y no ve, tiene agua y no bebe. ¿Qué es?",
        completar: "La nube",
        },
        {
        nivel: 28,
        pregunta: "¿Qué cosa es tan frágil que se puede romper con sólo decir su nombre?",
        adivinanza: "Soy redondo como una rueda pero no lo soy. ¿Qué soy?",
        completar: "El reloj de arena",
        },
        {
        nivel: 29,
        pregunta: "¿Qué cosa no tiene forma pero la puedes ver?",
        adivinanza: "Tiene ojos y no ve, tiene agua y no bebe. ¿Qué es?",
        completar: "La nube",
        },
        {
        nivel: 30,
        pregunta: "¿Qué cosa es más grande cuando más pequeña es?",
        adivinanza: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera.",
        completar: "La sandía",
        },
    // Agrega aquí el resto de los niveles
];

let indiceActual = 0;

function mostrarAdivinanza() {
    const nivelActual = niveles[indiceActual];
    document.getElementById("pregunta").innerText = nivelActual.pregunta;
    document.getElementById("adivinanza").innerText = nivelActual.adivinanza;
    actualizarBarraProgreso(); // Actualizar la barra de progreso

}
function actualizarBarraProgreso() {
    const progreso = (indiceActual + 1) / niveles.length * 100; // Calcular el porcentaje de progreso
    document.getElementById("progress-bar").style.width = `${progreso}%`; // Actualizar el ancho de la barra de progreso
}
function comprobarRespuesta() {
    const respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
    const respuestaCorrecta = niveles[indiceActual].completar.toLowerCase();
    
    if (respuestaUsuario === respuestaCorrecta) {
        mostrarMensaje("¡Respuesta correcta!", true); // Mostrar mensaje de respuesta correcta
        indiceActual++; // Avanzar al siguiente nivel
        if (indiceActual >= niveles.length) {
            indiceActual = 0; // Si llegamos al final, volvemos al principio
        }
        mostrarAdivinanza(); // Mostrar la siguiente adivinanza
        document.getElementById("respuesta").value = ""; // Limpiar el campo de respuesta
    } else {
        mostrarMensaje("Respuesta incorrecta. Inténtalo de nuevo.", false); // Mostrar mensaje de respuesta incorrecta
    }
}

function mostrarMensaje(mensaje, correcto) {
    const respuestaUsuario = document.getElementById("respuesta").value.trim(); // Obtener la respuesta y eliminar espacios en blanco al inicio y al final
    
    // Verificar si la respuesta está vacía
    if (respuestaUsuario === "") {
        alert("¡Escribe una respuesta!"); // Mostrar mensaje de advertencia
        return; // Detener la ejecución de la función
    }
    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.toggle('correcto', correcto);
    mensajeElemento.classList.toggle('incorrecto', !correcto);
    mensajeElemento.style.display = 'block'; // Mostrar el mensaje
    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        mensajeElemento.style.display = 'none';
    }, 3000);
}



function siguienteAdivinanza() {
    indiceActual++;
    if (indiceActual >= niveles.length) {
        indiceActual = 0; // Si llegamos al final, volvemos al principio
    }
    mostrarAdivinanza();
}

// Mostrar la primera adivinanza cuando se cargue la página
mostrarAdivinanza();
