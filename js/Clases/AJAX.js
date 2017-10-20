class AJAX {
    constructor(php, peticion) {
        this.php = php;
        this.peticion = peticion;
        this.xmlHTTP = null;
    }
    activar(funcion) {
        if(this.php.length == 0 || this.peticion.length == 0) {
            console.log("Establesca los datos.");
            return;
        }
        if(window.XMLHttpRequest) {
            this.xmlHTTP = new XMLHttpRequest();
        }
        else {
            this.xmlHTTP = new ActiveXObject(Microsoft.XMLHTTP);
        }
        this.xmlHTTP.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                funcion(this.responseText);
            }
        }
        this.xmlHTTP.open("POST", this.php + this.peticion , true);
        this.xmlHTTP.send();
    }
}
