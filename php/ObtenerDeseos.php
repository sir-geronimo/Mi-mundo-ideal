<?php
    // Importando clases
    require("config.php");
    require("Clases/Deseo.php");
    require("Clases/ListaDeseos.php");

    if($_REQUEST["q"] != null) {
        $deseo = new Deseo(null, null, null, null);
        $deseos = new ListaDeseos();
        try {
            $NombreDeseo = $_REQUEST["q"];
            $conn = $db->getConexion();
            if($_REQUEST["q"] != "null") {
                $consulta = $conn->prepare("SELECT * FROM Deseos WHERE Nombre = :NombreDeseo");
                $consulta->execute(array("NombreDeseo" => $NombreDeseo));
            } else {
                $consulta = $conn->prepare("SELECT * FROM Deseos");
                $consulta->execute();
            }
            $resultadoConsulta = $consulta->fetchAll();
            foreach ($resultadoConsulta as $fila) {
                $deseo = new Deseo($fila["ID"], $fila["Nombre"], $fila["Tipo"], $fila["Descripcion"]);
                 if($_REQUEST["q"] != "null") {
                     echo $deseo->getJSON();
                 }
                 else if($_REQUEST["q"] == "null") {
                     $deseos->agregar($deseo->getJSON());
                 }
            }
            if($_REQUEST["q"] == "null") {
               echo $deseos->getJSON();
            }
        } catch(PDOException $e) {
            echo $e;
        }   
    }
?>