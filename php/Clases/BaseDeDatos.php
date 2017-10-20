<?php

    class BaseDatos {
        
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
            return $host;
        }
        public function getNombreDB() {
            return $db;
        }
        public function getNombreUsuario() {
            return $usuario;
        }
        public function getConexion() {
            return $conn;
        }
        
        // Metodos
        public function conectar() {
            
            try {
                $conn = new PDO("mysql: host=$host; dbname=$nombreDB", $nombreUsuario, $pass);
            }
            catch(Exception $e) {
                echo "<script> alert('Error en la conexion con la base de datos...'); </script>";
            }
            
        }
        public function desconectar() {
            $conn.close();
        }
        public function __toString() {
            return "Nombre de la base de datos: " . $db;
        }
        
    }

?>