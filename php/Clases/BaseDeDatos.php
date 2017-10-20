<?php

    class BaseDeDatos {
        
        // Atributos
        private $host = null;
        private $db = null;
        private $usuario = null;
        private $clave = null;
        private $conn = null;
        
        // Constructor
        public function __construct($host, $db, $usuario, $clave) {
            
            // Partes a modificar
            $this->host = $host;           // Host de la db.
            $this->db = $db;               // Nombre de la db.
            $this->usuario = $usuario;     // Nombre de usuario de la db.
            $this->clave = $clave;         // Contraseña de la db.

            $this->conectar();
            
        }
        
        // Getters
        public function getHost() {
            return $this->host;
        }
        public function getDB() {
            return $this->db;
        }
        public function getUsuario() {
            return $this->usuario;
        }
        public function getConexion() {
            return $this->conn;
        }
        
        // Metodos
        public function conectar() {
            $datos = array($this->db, $this->host, $this->usuario, $this->clave);
            try {
                $this->conn = new PDO("mysql:dbname=$datos[0];host=$datos[1]", $datos[2], $datos[3]);
            }
            catch(Exception $e) {
                echo "<script> alert('Error en la conexion con la base de datos...'); </script>";
            }
            
        }
        public function desconectar() {
            $this->conn.close();
        }
        public function __toString() {
            return "Nombre de la base de datos: " . $this->db;
        }
        
    }

?>