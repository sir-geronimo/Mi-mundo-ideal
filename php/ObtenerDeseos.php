<?php

    // Importando clases
    require("config.php");
    require("Clases/Deseo.php");
    
    if($_REQUEST["NombreDeseo"] != null) {
        Deseo $deseo = null;
        try {
            $NombreDeseo = $_REQUEST["NombreDeseo"];
            $conn = $db.getConexion();
            $consulta = $conn->prepare("SELECT * FROM Deseos WHERE Nombre = :NombreDeseo");
            $consulta->execute(array("NombreDeseo" => $NombreDeseo));
            $resultadoConsulta = $consulta->fetchAll();
            foreach ($resultadoConsulta as $fila) {
                $deseo = new Deseo($fila["ID"], $fila["Nombre"], $fila["Tipo"], $fila["Descripcion"]);
            }
            echo $deseo.getJSON();
        } catch(error) {}
        
    }

?>