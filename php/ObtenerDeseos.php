<?php

    // Importando clases
    require("config.php");
    require("Clases/Deseo.php");
    
    if($_REQUEST["q"] != null) {
        $deseo = new Deseo(null, null, null, null);
        try {
            $NombreDeseo = $_REQUEST["q"];
            $conn = $db->getConexion();
            $sql = "SELECT * FROM Deseos WHERE Nombre = :NombreDeseo";
            $consulta = $conn->prepare($sql);
            $consulta->execute(array("NombreDeseo" => $NombreDeseo));
            $resultadoConsulta = $consulta->fetchAll();
            foreach ($resultadoConsulta as $fila) {
                $deseo = new Deseo($fila["ID"], $fila["Nombre"], $fila["Tipo"], $fila["Descripcion"]);
            }
            echo $deseo->getJSON();
        } catch(PDOException $e) {
            echo $e;
        }
        
    }

?>