Generar();
function Generar() {
    var PorcientoUtopico = document.getElementById("PorcientoUtopico");
    var PorcientoDistopico = document.getElementById("PorcientoDistopico");
    var ImgMundo = document.getElementById("imgMundo");
    var ResultadoMundo = document.getElementById("ResultadoMundo");
    var BotonGenerar = document.getElementById("generarMundo");
    var DeseosUtopicos = document.getElementsByClassName("utopico");
    var DeseosDistopicos = document.getElementsByClassName("distopico");
    var ContenedorResultado = document.getElementById("articuloMotivos");
    
    
    BotonGenerar.addEventListener("click", function() {
        var DeseosUtopicos_Checked = [];
        var DeseosDistopicos_Checked = [];
        var CantidadDeseosUtopicos = 0;
        var CantidadDeseosDistopicos = 0;
        var ContadorUtopicos = 0;
        var ContadorDistopicos = 0;
        
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
        
        var evaluadora = new EvaluadoraDeDeseos(ContadorUtopicos, ContadorDistopicos);
        
        if(evaluadora.obtenerMundo() != null) {
            
            if(evaluadora.obtenerMundo().toLowerCase() == "utopico") {
                ImgMundo.setAttribute("src", "img/Utopico.png");
                var resultado = new EvaluadoraDeResultado(ContenedorResultado, DeseosUtopicos_Checked);
            }
            else if(evaluadora.obtenerMundo().toLowerCase() == "distopico") {
                ImgMundo.setAttribute("src", "img/Distopico.png");
                var resultado = new EvaluadoraDeResultado(ContenedorResultado, DeseosDistopicos_Checked);
            }
            else if(evaluadora.obtenerMundo().toLowerCase() == "intermedio") {
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
            
            resultado.generarResultado();
            var ElementosGenerados = document.getElementsByClassName("ElementosGenerados");
            for(var i = 0; i < ElementosGenerados.length; i++) {
                ElementosGenerados[i].addEventListener("click", function() {
                    var NombreDeseo = ElementosGenerados[i].innerHTML;
                    var AJAX_Conexion_1 = new AJAX("../php/ObtenerDeseos.php", "?q=" + NombreDeseo);
                    AJAX_Conexion_1.activar(function(respuesta) {
                        ContenedorResultado.innerHTML = respuesta;
                    });
                });
            }
            
        } else {
            
            imgMundo.setAttribute("src", "img/Ninguno.png");
            ResultadoMundo.innerHTML = "No has generado ningun mundo";
            PorcientoUtopico.innerHTML = "Utopico: 0%";
            PorcientoDistopico.innerHTML = "Distopico: 0%";
            
        }
        
    });
    
}