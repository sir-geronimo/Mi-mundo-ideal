<?php
    // Importando clases
    require("config.php");
    require("Clases/Deseo.php");
    require("Clases/ListaDeseos.php");

    if($_REQUEST["q"] != null) {
        $deseo = new Deseo(null, null, null, null);
        $listaDeseos = new ListaDeseos();
        try {
            $NombreDeseo = $_REQUEST["q"];
            $conn = $db->getConexion();
            if($_REQUEST["q"] != "0") {
                $consulta = $conn->prepare("SELECT * FROM Deseos WHERE Nombre = :NombreDeseo");
                $consulta->execute(array("NombreDeseo" => $NombreDeseo));
            } else {
                $consulta = $conn->prepare("SELECT * FROM Deseos");
            }
            $resultadoConsulta = $consulta->fetchAll();
            foreach ($resultadoConsulta as $fila) {
                $deseo = new Deseo($fila["ID"], $fila["Nombre"], $fila["Tipo"], $fila["Descripcion"]);
                 //if($_REQUEST["q"] != "0") {
                     echo $deseo->getJSON();
                 //}
                //  else {
                //      $listaDeseos.agregar($deseo);
                //  }
            }
            // if($_REQUEST["q"] == "0") {
            //     echo $listaDeseos.getJSON();
            // }
        } catch(PDOException $e) {
            echo $e;
        }   
    }
?>