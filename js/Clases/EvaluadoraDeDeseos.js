class EvaluadoraDeDeseos {
    
    constructor(deseosPositivos, deseosNegativos) {
        this.deseosPositivos = deseosPositivos;
        this.deseosNegativos = deseosNegativos;
        this.sumaDeDeseos = this.deseosPositivos + this.deseosNegativos;
    }
    
    calcularPorcentajeUtopico() {
        return parseInt((this.deseosPositivos / this.sumaDeDeseos) * 100);
    }
    calcularPorcentajeDistopico() {
        return parseInt((this.deseosNegativos / this.sumaDeDeseos) * 100);
    }
    
    obtenerMundo() {
        var porcentajeUtopico = this.calcularPorcentajeUtopico();
        var porcentajeDistopico = this.calcularPorcentajeDistopico();
        if(this.sumaDeDeseos == 0) { 
            return null;
        }
        else if(porcentajeUtopico > porcentajeDistopico) { 
            return "Utopico";
        }
        else if(porcentajeUtopico < porcentajeDistopico) { 
            return "Distopico";
        }
        else if(porcentajeUtopico == porcentajeDistopico) {
            return "Intermedio";
        }
        return null;
    }
    
}