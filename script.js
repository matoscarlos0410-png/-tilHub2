/* =====================================
   SISTEMA DE VENTANA
===================================== */

function abrirModal(contenido) {

    document.getElementById(
        "contenidoModal"
    ).innerHTML = contenido;

    document.getElementById(
        "modal"
    ).style.display = "flex";
}


function cerrarModal() {

    document.getElementById(
        "modal"
    ).style.display = "none";
}


window.onclick = function(event) {

    let modal =
        document.getElementById("modal");

    if (event.target === modal) {

        cerrarModal();
    }
};



/* =====================================
   BUSCADOR
===================================== */

function buscarHerramienta() {

    let texto =
        document.getElementById(
            "buscador"
        ).value.toLowerCase();

    let tarjetas =
        document.querySelectorAll(
            ".herramienta"
        );

    tarjetas.forEach(function(card) {

        let contenido =
            card.innerText.toLowerCase();

        if (contenido.includes(texto)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}



/* =====================================
   CALCULADORA
===================================== */

function calculadora() {

    abrirModal(`

        <h2>🧮 Calculadora</h2>

        <div class="calculadora">

            <input
                id="pantalla"
                readonly
            >

            <button onclick="numero('7')">7</button>
            <button onclick="numero('8')">8</button>
            <button onclick="numero('9')">9</button>
            <button onclick="numero('/')">÷</button>

            <button onclick="numero('4')">4</button>
            <button onclick="numero('5')">5</button>
            <button onclick="numero('6')">6</button>
            <button onclick="numero('*')">×</button>

            <button onclick="numero('1')">1</button>
            <button onclick="numero('2')">2</button>
            <button onclick="numero('3')">3</button>
            <button onclick="numero('-')">−</button>

            <button onclick="numero('0')">0</button>
            <button onclick="numero('.')">.</button>
            <button onclick="resolver()">=</button>
            <button onclick="numero('+')">+</button>

            <button
                onclick="limpiarCalculadora()"
                style="grid-column:1/-1"
            >
                C
            </button>

        </div>

    `);
}


function numero(valor) {

    document.getElementById(
        "pantalla"
    ).value += valor;
}


function limpiarCalculadora() {

    document.getElementById(
        "pantalla"
    ).value = "";
}


function resolver() {

    let pantalla =
        document.getElementById(
            "pantalla"
        );

    try {

        pantalla.value =
            Function(
                "return (" +
                pantalla.value +
                ")"
            )();

    } catch {

        pantalla.value = "Error";
    }
}



/* =====================================
   CONVERSOR
===================================== */

function conversor() {

    abrirModal(`

        <h2>🔄 Conversor de unidades</h2>

        <input
            id="valorConversion"
            type="number"
            placeholder="Cantidad"
        >

        <select id="tipoConversion">

            <option value="m-km">
                Metros → Kilómetros
            </option>

            <option value="km-m">
                Kilómetros → Metros
            </option>

            <option value="cm-m">
                Centímetros → Metros
            </option>

            <option value="m-cm">
                Metros → Centímetros
            </option>

        </select>

        <button onclick="convertirUnidad()">
            Convertir
        </button>

        <div
            class="resultado"
            id="resultadoConversion"
        ></div>

    `);
}


function convertirUnidad() {

    let valor =
        parseFloat(
            document.getElementById(
                "valorConversion"
            ).value
        );

    let tipo =
        document.getElementById(
            "tipoConversion"
        ).value;

    if (isNaN(valor)) {

        alert("Escribe una cantidad.");

        return;
    }

    let resultado;


    if (tipo === "m-km")
        resultado = valor / 1000;

    if (tipo === "km-m")
        resultado = valor * 1000;

    if (tipo === "cm-m")
        resultado = valor / 100;

    if (tipo === "m-cm")
        resultado = valor * 100;


    document.getElementById(
        "resultadoConversion"
    ).innerText =
        "Resultado: " +
        resultado;
}



/* =====================================
   PORCENTAJES
===================================== */

function porcentajes() {

    abrirModal(`

        <h2>📊 Porcentajes</h2>

        <input
            id="numeroPorcentaje"
            type="number"
            placeholder="Número"
        >

        <input
            id="porcentaje"
            type="number"
            placeholder="Porcentaje"
        >

        <button onclick="calcularPorcentaje()">
            Calcular
        </button>

        <div
            id="resultadoPorcentaje"
            class="resultado"
        ></div>

    `);
}


function calcularPorcentaje() {

    let numero =
        parseFloat(
            document.getElementById(
                "numeroPorcentaje"
            ).value
        );

    let porcentaje =
        parseFloat(
            document.getElementById(
                "porcentaje"
            ).value
        );

    if (isNaN(numero) ||
        isNaN(porcentaje)) {

        alert("Completa los campos.");

        return;
    }


    let resultado =
        numero * porcentaje / 100;


    document.getElementById(
        "resultadoPorcentaje"
    ).innerText =
        porcentaje +
        "% de " +
        numero +
        " = " +
        resultado;
}



/* =====================================
   DESCUENTOS
===================================== */

function descuentos() {

    abrirModal(`

        <h2>💰 Calculadora de descuentos</h2>

        <input
            id="precio"
            type="number"
            placeholder="Precio original"
        >

        <input
            id="descuento"
            type="number"
            placeholder="Descuento %"
        >

        <button onclick="calcularDescuento()">
            Calcular
        </button>

        <div
            id="resultadoDescuento"
            class="resultado"
        ></div>

    `);
}


function calcularDescuento() {

    let precio =
        parseFloat(
            document.getElementById(
                "precio"
            ).value
        );

    let descuento =
        parseFloat(
            document.getElementById(
                "descuento"
            ).value
        );


    if (isNaN(precio) ||
        isNaN(descuento)) {

        alert("Completa los campos.");

        return;
    }


    let ahorro =
        precio * descuento / 100;

    let final =
        precio - ahorro;


    document.getElementById(
        "resultadoDescuento"
    ).innerHTML =

        "Ahorro: " +
        ahorro.toFixed(2) +
        "<br><br>" +

        "Precio final: " +
        final.toFixed(2);
}



/* =====================================
   CONTADOR DE DÍAS
===================================== */

function contadorDias() {

    abrirModal(`

        <h2>📅 Contador de días</h2>

        <label>Fecha inicial</label>

        <input
            id="fecha1"
            type="date"
        >

        <label>Fecha final</label>

        <input
            id="fecha2"
            type="date"
        >

        <button onclick="calcularDias()">
            Calcular
        </button>

        <div
            id="resultadoDias"
            class="resultado"
        ></div>

    `);
}


function calcularDias() {

    let fecha1 =
        new Date(
            document.getElementById(
                "fecha1"
            ).value
        );

    let fecha2 =
        new Date(
            document.getElementById(
                "fecha2"
            ).value
        );


    if (
        isNaN(fecha1) ||
        isNaN(fecha2)
    ) {

        alert("Selecciona las dos fechas.");

        return;
    }


    let diferencia =
        Math.abs(
            fecha2 - fecha1
        );


    let dias =
        Math.ceil(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    document.getElementById(
        "resultadoDias"
    ).innerText =
        "Hay " +
        dias +
        " días de diferencia.";
}



/* =====================================
   TEMPERATURA
===================================== */

function temperatura() {

    abrirModal(`

        <h2>🌡️ Conversor de temperatura</h2>

        <input
            id="valorTemperatura"
            type="number"
            placeholder="Temperatura"
        >

        <select id="tipoTemperatura">

            <option value="cf">
                Celsius → Fahrenheit
            </option>

            <option value="fc">
                Fahrenheit → Celsius
            </option>

            <option value="ck">
                Celsius → Kelvin
            </option>

            <option value="kc">
                Kelvin → Celsius
            </option>

        </select>

        <button onclick="convertirTemperatura()">
            Convertir
        </button>

        <div
            id="resultadoTemperatura"
            class="resultado"
        ></div>

    `);
}


function convertirTemperatura() {

    let valor =
        parseFloat(
            document.getElementById(
                "valorTemperatura"
            ).value
        );

    let tipo =
        document.getElementById(
            "tipoTemperatura"
        ).value;


    if (isNaN(valor)) {

        alert("Escribe una temperatura.");

        return;
    }


    let resultado;


    if (tipo === "cf")
        resultado =
            (valor * 9 / 5) + 32;


    if (tipo === "fc")
        resultado =
            (valor - 32) * 5 / 9;


    if (tipo === "ck")
        resultado =
            valor + 273.15;


    if (tipo === "kc")
        resultado =
            valor - 273.15;


    document.getElementById(
        "resultadoTemperatura"
    ).innerText =
        "Resultado: " +
        resultado.toFixed(2);
}



/* =====================================
   PESO
===================================== */

function peso() {

    abrirModal(`

        <h2>⚖️ Conversor de peso</h2>

        <input
            id="valorPeso"
            type="number"
            placeholder="Cantidad"
        >

        <select id="tipoPeso">

            <option value="kl">
                Kilogramos → Libras
            </option>

            <option value="lk">
                Libras → Kilogramos
            </option>

        </select>

        <button onclick="convertirPeso()">
            Convertir
        </button>

        <div
            id="resultadoPeso"
            class="resultado"
        ></div>

    `);
}


function convertirPeso() {

    let valor =
        parseFloat(
            document.getElementById(
                "valorPeso"
            ).value
        );

    let tipo =
        document.getElementById(
            "tipoPeso"
        ).value;


    if (isNaN(valor)) {

        alert("Escribe una cantidad.");

        return;
    }


    let resultado;


    if (tipo === "kl")
        resultado =
            valor * 2.20462;


    if (tipo === "lk")
        resultado =
            valor * 0.453592;


    document.getElementById(
        "resultadoPeso"
    ).innerText =
        resultado.toFixed(3);
}



/* =====================================
   DISTANCIA
===================================== */

function distancia() {

    abrirModal(`

        <h2>📏 Conversor de distancia</h2>

        <input
            id="valorDistancia"
            type="number"
            placeholder="Cantidad"
        >

        <select id="tipoDistancia">

            <option value="km">
                Kilómetros → Millas
            </option>

            <option value="mk">
                Millas → Kilómetros
            </option>

        </select>

        <button onclick="convertirDistancia()">
            Convertir
        </button>

        <div
            id="resultadoDistancia"
            class="resultado"
        ></div>

    `);
}


function convertirDistancia() {

    let valor =
        parseFloat(
            document.getElementById(
                "valorDistancia"
            ).value
        );

    let tipo =
        document.getElementById(
            "tipoDistancia"
        ).value;


    if (isNaN(valor)) {

        alert("Escribe una cantidad.");

        return;
    }


    let resultado;


    if (tipo === "km")
        resultado =
            valor * 0.621371;


    if (tipo === "mk")
        resultado =
            valor * 1.60934;


    document.getElementById(
        "resultadoDistancia"
    ).innerText =
        resultado.toFixed(3);
}



/* =====================================
   TEMPORIZADOR
===================================== */

let intervalo;


function temporizador() {

    abrirModal(`

        <h2>⏱️ Temporizador</h2>

        <input
            id="segundos"
            type="number"
            min="1"
            placeholder="Segundos"
        >

        <button onclick="iniciarTemporizador()">
            Iniciar
        </button>

        <h1
            id="reloj"
            style="text-align:center;margin:25px;"
        >
            00:00
        </h1>

    `);
}


function iniciarTemporizador() {

    clearInterval(intervalo);


    let segundos =
        parseInt(
            document.getElementById(
                "segundos"
            ).value
        );


    if (
        isNaN(segundos) ||
        segundos <= 0
    ) {

        alert("Introduce los segundos.");

        return;
    }


    intervalo =
        setInterval(function() {

            let minutos =
                Math.floor(
                    segundos / 60
                );

            let seg =
                segundos % 60;


            document.getElementById(
                "reloj"
            ).innerText =

                String(minutos)
                .padStart(2, "0") +

                ":" +

                String(seg)
                .padStart(2, "0");


            if (segundos <= 0) {

                clearInterval(intervalo);

                alert(
                    "⏰ ¡Tiempo terminado!"
                );

                return;
            }


            segundos--;

        }, 1000);
}



/* =====================================
   CRONÓMETRO
===================================== */

let tiempoCronometro = 0;

let intervaloCronometro;


function cronometro() {

    tiempoCronometro = 0;


    abrirModal(`

        <h2>⏱️ Cronómetro</h2>

        <h1
            id="cronometroReloj"
            style="text-align:center;margin:25px;"
        >
            00:00:00
        </h1>

        <button onclick="iniciarCronometro()">
            Iniciar
        </button>

        <button onclick="detenerCronometro()">
            Detener
        </button>

        <button onclick="reiniciarCronometro()">
            Reiniciar
        </button>

    `);
}


function iniciarCronometro() {

    clearInterval(intervaloCronometro);


    intervaloCronometro =
        setInterval(function() {

            tiempoCronometro++;

            mostrarCronometro();

        }, 1000);
}


function detenerCronometro() {

    clearInterval(
        intervaloCronometro
    );
}


function reiniciarCronometro() {

    clearInterval(
        intervaloCronometro
    );

    tiempoCronometro = 0;

    mostrarCronometro();
}


function mostrarCronometro() {

    let horas =
        Math.floor(
            tiempoCronometro / 3600
        );

    let minutos =
        Math.floor(
            (tiempoCronometro % 3600) / 60
        );

    let segundos =
        tiempoCronometro % 60;


    document.getElementById(
        "cronometroReloj"
    ).innerText =

        String(horas).padStart(2, "0") +
        ":" +
        String(minutos).padStart(2, "0") +
        ":" +
        String(segundos).padStart(2, "0");
}



/* =====================================
   NOTAS
===================================== */

function notas() {

    let guardadas =
        localStorage.getItem(
            "utilhubNotas"
        ) || "";


    abrirModal(`

        <h2>📝 Mis notas</h2>

        <textarea
            id="campoNotas"
            placeholder="Escribe aquí..."
        >${guardadas}</textarea>

        <button onclick="guardarNotas()">
            Guardar
        </button>

        <button
            onclick="borrarNotas()"
            style="background:#ef4444"
        >
            Borrar
        </button>

    `);
}


function guardarNotas() {

    let texto =
        document.getElementById(
            "campoNotas"
        ).value;


    localStorage.setItem(
        "utilhubNotas",
        texto
    );


    alert("✅ Nota guardada.");
}


function borrarNotas() {

    localStorage.removeItem(
        "utilhubNotas"
    );


    document.getElementById(
        "campoNotas"
    ).value = "";
}



/* =====================================
   LISTA DE TAREAS
===================================== */

function tareas() {

    abrirModal(`

        <h2>✅ Lista de tareas</h2>

        <input
            id="nuevaTarea"
            placeholder="Escribe una tarea"
        >

        <button onclick="agregarTarea()">
            Agregar
        </button>

        <ul
            id="listaTareas"
            class="lista"
        ></ul>

    `);
}


function agregarTarea() {

    let tarea =
        document.getElementById(
            "nuevaTarea"
        ).value;


    if (!tarea) return;


    let li =
        document.createElement("li");


    li.innerHTML =

        "✅ " +
        tarea +
        `

        <button
            onclick="this.parentElement.remove()"
            style="
                float:right;
                background:#ef4444;
                padding:5px 9px;
            "
        >
            X
        </button>

        `;


    document.getElementById(
        "listaTareas"
    ).appendChild(li);


    document.getElementById(
        "nuevaTarea"
    ).value = "";
}



/* =====================================
   LISTA DE COMPRAS
===================================== */

function compras() {

    abrirModal(`

        <h2>🛒 Lista de compras</h2>

        <input
            id="producto"
            placeholder="Producto"
        >

        <button onclick="agregarCompra()">
            Agregar
        </button>

        <ul
            id="listaCompras"
            class="lista"
        ></ul>

    `);
}


function agregarCompra() {

    let producto =
        document.getElementById(
            "producto"
        ).value;


    if (!producto) return;


    let li =
        document.createElement("li");


    li.innerHTML =

        "🛒 " +
        producto +
        `

        <button
            onclick="this.parentElement.remove()"
            style="
                float:right;
                background:#ef4444;
                padding:5px 9px;
            "
        >
            X
        </button>

        `;


    document.getElementById(
        "listaCompras"
    ).appendChild(li);


    document.getElementById(
        "producto"
    ).value = "";
}



/* =====================================
   CONTRASEÑA
===================================== */

function password() {

    let caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let resultado = "";


    for (
        let i = 0;
        i < 16;
        i++
    ) {

        resultado +=
            caracteres[
                Math.floor(
                    Math.random() *
                    caracteres.length
                )
            ];
    }


    abrirModal(`

        <h2>🔐 Contraseña segura</h2>

        <input
            id="passwordResultado"
            value="${resultado}"
            readonly
        >

        <button onclick="copiarPassword()">
            Copiar
        </button>

    `);
}


function copiarPassword() {

    let campo =
        document.getElementById(
            "passwordResultado"
        );


    navigator.clipboard.writeText(
        campo.value
    );


    alert("✅ Contraseña copiada.");
}



/* =====================================
   QR
===================================== */

function qr() {

    abrirModal(`

        <h2>📱 Generador QR</h2>

        <input
            id="textoQR"
            placeholder="Escribe texto o enlace"
        >

        <button onclick="crearQR()">
            Crear QR
        </button>

        <div
            id="resultadoQR"
            style="text-align:center;margin-top:20px;"
        ></div>

    `);
}


function crearQR() {

    let texto =
        document.getElementById(
            "textoQR"
        ).value;


    if (!texto) {

        alert("Escribe algo primero.");

        return;
    }


    let url =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
        encodeURIComponent(texto);


    document.getElementById(
        "resultadoQR"
    ).innerHTML =

        `<img
            src="${url}"
            alt="Código QR"
            width="250"
        >`;
}



/* =====================================
   NÚMERO ALEATORIO
===================================== */

function numeroAleatorio() {

    abrirModal(`

        <h2>🎯 Número aleatorio</h2>

        <input
            id="minimo"
            type="number"
            placeholder="Mínimo"
        >

        <input
            id="maximo"
            type="number"
            placeholder="Máximo"
        >

        <button onclick="generarNumero()">
            Generar
        </button>

        <div
            id="resultadoNumero"
            class="resultado"
        ></div>

    `);
}


function generarNumero() {

    let minimo =
        parseInt(
            document.getElementById(
                "minimo"
            ).value
        );

    let maximo =
        parseInt(
            document.getElementById(
                "maximo"
            ).value
        );


    if (
        isNaN(minimo) ||
        isNaN(maximo) ||
        minimo > maximo
    ) {

        alert("Revisa los valores.");

        return;
    }


    let resultado =
        Math.floor(
            Math.random() *
            (maximo - minimo + 1)
        ) + minimo;


    document.getElementById(
        "resultadoNumero"
    ).innerText =
        "Número: " +
        resultado;
}



/* =====================================
   DADO
===================================== */

function dado() {

    abrirModal(`

        <h2>🎲 Lanzador de dado</h2>

        <div
            id="resultadoDado"
            style="
                font-size:80px;
                text-align:center;
                margin:30px;
            "
        >
            🎲
        </div>

        <button onclick="lanzarDado()">
            Lanzar dado
        </button>

    `);
}


function lanzarDado() {

    let numero =
        Math.floor(
            Math.random() * 6
        ) + 1;


    let caras = [
        "⚀",
        "⚁",
        "⚂",
        "⚃",
        "⚄",
        "⚅"
    ];


    document.getElementById(
        "resultadoDado"
    ).innerText =
        caras[numero - 1];
}



/* =====================================
   DICCIONARIO
===================================== */

async function diccionario() {

    abrirModal(`

        <h2>📖 Diccionario</h2>

        <input
            id="palabra"
            placeholder="Escribe una palabra"
        >

        <button onclick="buscarPalabra()">
            Buscar
        </button>

        <div
            id="resultadoDiccionario"
            class="resultado"
        ></div>

    `);
}


async function buscarPalabra() {

    let palabra =
        document.getElementById(
            "palabra"
        ).value.trim();


    if (!palabra) return;


    let resultado =
        document.getElementById(
            "resultadoDiccionario"
        );


    resultado.innerText =
        "Buscando...";


    try {

        let respuesta =
            await fetch(
                "https://api.dictionaryapi.dev/api/v2/entries/es/" +
                encodeURIComponent(palabra)
            );


        if (!respuesta.ok)
            throw new Error();


        let datos =
            await respuesta.json();


        let significado =
            datos[0]
            .meanings[0]
            .definitions[0]
            .definition;


        resultado.innerHTML =
            "<strong>Significado:</strong><br>" +
            significado;


    } catch {

        resultado.innerText =
            "No se encontró esa palabra.";
    }
}



/* =====================================
   ORGANIZADOR DE ESTUDIO
===================================== */

function estudio() {

    abrirModal(`

        <h2>🎓 Organizador de estudio</h2>

        <input
            id="materia"
            placeholder="Materia"
        >

        <input
            id="tema"
            placeholder="Tema"
        >

        <input
            id="tiempoEstudio"
            type="number"
            placeholder="Minutos"
        >

        <button onclick="agregarEstudio()">
            Agregar sesión
        </button>

        <ul
            id="listaEstudio"
            class="lista"
        ></ul>

    `);
}


function agregarEstudio() {

    let materia =
        document.getElementById(
            "materia"
        ).value;

    let tema =
        document.getElementById(
            "tema"
        ).value;

    let tiempo =
        document.getElementById(
            "tiempoEstudio"
        ).value;


    if (
        !materia ||
        !tema ||
        !tiempo
    ) {

        alert("Completa todos los campos.");

        return;
    }


    let li =
        document.createElement("li");


    li.innerHTML =
        "📚 <strong>" +
        materia +
        "</strong><br>" +
        "Tema: " +
        tema +
        "<br>" +
        "Tiempo: " +
        tiempo +
        " minutos";


    document.getElementById(
        "listaEstudio"
    ).appendChild(li);
}



/* =====================================
   CONSEJOS
===================================== */

function consejos() {

    let consejos = [

        "📚 Organiza tus tareas antes de comenzar.",

        "⏰ Divide las actividades grandes en pasos pequeños.",

        "🔐 Utiliza contraseñas diferentes para tus cuentas.",

        "💾 Mantén copias de seguridad de tus archivos importantes.",

        "🔎 Comprueba la información antes de compartirla.",

        "📝 Anota las cosas importantes para no olvidarlas.",

        "🌐 No compartas información personal con desconocidos.",

        "🎯 Establece objetivos claros para tus actividades."

    ];


    let lista = "";


    consejos.forEach(function(consejo) {

        lista +=
            "<li>" +
            consejo +
            "</li>";

    });


    abrirModal(`

        <h2>💡 Consejos útiles</h2>

        <ul class="lista">
            ${lista}
        </ul>

    `);
}
