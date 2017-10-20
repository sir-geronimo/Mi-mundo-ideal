class EvaluadoraDeResultado {
    
    constructor(contenedor, deseos) {
        
        this.deseos = deseos;
        this.contenedor = contenedor;
        this.labels = document.getElementsByTagName("label");
        this.elementoActual = document.getElementById("elementoActual");
        this.detalleElemento = document.getElementById("detalleElemento");
        
    }
    
    restablecerResultado(contenedor) {
        contenedor.innerHTML = "";
    }
    
    obtenerLabel(deseo) {
        
        var idDeseo = deseo.getAttribute("id");
        
        for(var i = 0; i < this.labels.length; i++) {
            var forLabel = this.labels[i].getAttribute("for");
            if(idDeseo.toLowerCase() == forLabel.toLowerCase()) {
                return this.labels[i];
            }
        }
        
        return null;
        
    }
    
    generarResultado() {
        
        var elementoUL = document.createElement("ul");
        var elementosLI = [];
        
        this.restablecerResultado(this.contenedor);
        
        for(var i = 0; i < this.deseos.length; i++) 
        {
            elementosLI[i] = document.createElement("li");
            elementosLI[i].setAttribute("class", "ElementosGenerados");
            var label = this.obtenerLabel(this.deseos[i]);
            elementosLI[i].innerHTML = label.innerHTML;
            elementoUL.appendChild(elementosLI[i]);
        }
        
        this.contenedor.appendChild(elementoUL);
        
    }
    
}