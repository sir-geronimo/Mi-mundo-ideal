// Inicializar variables.
var DeseosUtopicos;
var DeseosDistopicos;
var ContadorUtopicos;
var ContadorDistopicos;
var CantidadDeseosUtopicos;
var CantidadDeseosDistopicos;
var DeseosUtopicos_Checked;
var DeseosDistopicos_Checked;
var PorcientoUtopico = document.getElementById("PorcientoUtopico");
var PorcientoDistopico = document.getElementById("PorcientoDistopico");
var ImgMundo = document.getElementById("imgMundo");
var ResultadoMundo = document.getElementById("ResultadoMundo");
var BotonGenerar = document.getElementById("generarMundo");
var ContenedorResultado = document.getElementById("articuloMotivos");
var DetalleElemento = document.getElementById("detalleElemento");

main();

function main() {
    // Generar deseos
    generarDeseos();
    // Inicializar deseos
    DeseosUtopicos = document.getElementsByClassName("utopico");
    DeseosDistopicos = document.getElementsByClassName("distopico"); 
    // Poner el boton generar a la escucha.
    BotonGenerar.addEventListener("click", function() {
        // Inicializar variables.
        ContadorUtopicos = 0;
        ContadorDistopicos = 0;
        CantidadDeseosUtopicos = 0;
        CantidadDeseosDistopicos = 0;
        DeseosUtopicos_Checked = [];
        DeseosDistopicos_Checked = [];
        // Contar los deseos.
        contarDeseos();
        // Implementar las clases evaluadoras.
        evaluarDeseos(new EvaluadoraDeDeseos(ContadorUtopicos, ContadorDistopicos));
    });
}

function contarDeseos() {
    for(var i = 0; i < DeseosUtopicos.length; i++) {
        if(DeseosUtopicos[i].checked) {
            DeseosUtopicos_Checked[ContadorUtopicos] = DeseosUtopicos[i];
            ContadorUtopicos++;
        }
    }
    for(var i = 0; i < DeseosDistopicos.length; i++) {
        if(DeseosDistopicos[i].checked) {
            DeseosDistopicos_Checked[ContadorDistopicos] = DeseosDistopicos[i];
            ContadorDistopicos++;
        }
    }
}

function evaluarDeseos(evaluadora) {
    if(evaluadora.obtenerMundo() != null) {
        if(evaluadora.obtenerMundo().toLowerCase() == "utopico") {
            ImgMundo.setAttribute("src", "img/Utopico.png");
            var resultado = new EvaluadoraDeResultado(ContenedorResultado, DeseosUtopicos_Checked);
        } else if(evaluadora.obtenerMundo().toLowerCase() == "distopico") {
            ImgMundo.setAttribute("src", "img/Distopico.png");
            var resultado = new EvaluadoraDeResultado(ContenedorResultado, DeseosDistopicos_Checked);
        } else if(evaluadora.obtenerMundo().toLowerCase() == "intermedio") {
            ImgMundo.setAttribute("src", "img/Intermedio.png");
            var UnionDeseos_Checked = DeseosUtopicos_Checked;
            for(var i = 0; i < DeseosDistopicos_Checked.length; i++) {
                UnionDeseos_Checked.push(DeseosDistopicos_Checked[i]);
            }
            var resultado = new EvaluadoraDeResultado(ContenedorResultado, UnionDeseos_Checked);
        }
        PorcientoUtopico.innerHTML = "Utopico: " + evaluadora.calcularPorcentajeUtopico() + "%";
        PorcientoDistopico.innerHTML = "Distopico: " + evaluadora.calcularPorcentajeDistopico() + "%";
        ResultadoMundo.innerHTML = evaluadora.obtenerMundo();
        // Obtener elementos resultantes del mundo.
        resultado.generarResultado();
    } else {
        imgMundo.setAttribute("src", "img/Ninguno.png");
        ResultadoMundo.innerHTML = "No has generado ningun mundo";
        PorcientoUtopico.innerHTML = "Utopico: 0%";
        PorcientoDistopico.innerHTML = "Distopico: 0%";
    }
}

function generarDeseos() {
    var ArticuloElemento = document.getElementsByClassName("ArticuloElemento");
    var AJAX_Conexion_Elementos = new AJAX("php/ObtenerDeseos.php", "?q=null");
    AJAX_Conexion_Elementos.activar(function(RespuestaJSON) {
        var arrayJSON_Deseos = JSON.parse(RespuestaJSON);
        for(var i = 0; i < arrayJSON_Deseos.length; i++) {
            deseoActual = JSON.parse(arrayJSON_Deseos[i]);
            var tipoDeseo = deseoActual["Tipo"] == 1 ? "utopico" : "distopico"; 
            var inputCheckbox = document.createElement("input");
            inputCheckbox.setAttribute("type", "checkbox");
            inputCheckbox.id = "elemento" + (i + 1);
            inputCheckbox.className = tipoDeseo;
            var labelCheckbox = document.createElement("label");
            labelCheckbox.setAttribute("for", "elemento" + (i + 1));
            labelCheckbox.innerHTML = deseoActual["Nombre"];
            ArticuloElemento[0].appendChild(inputCheckbox);
            // Insertar en el html.
            if(i <= 10) {
                ArticuloElemento[0].appendChild(inputCheckbox);
                ArticuloElemento[0].appendChild(labelCheckbox);
            } else if(i <= 20) {
                ArticuloElemento[1].appendChild(inputCheckbox);
                ArticuloElemento[1].appendChild(labelCheckbox);
            } else if(i <= 30) {
                ArticuloElemento[2].appendChild(inputCheckbox);
                ArticuloElemento[2].appendChild(labelCheckbox);
            }
        }
    });
}