<?php
    class Deseo {   
        // Atributos
        private $id = null;
        private $nombre = null;
        private $tipo = null;
        private $descripcion = null;
        // Constructor
        public function __construct($id, $nombre, $tipo, $descripcion) {
            $this->id = $id;
            $this->nombre = $nombre;
            $this->tipo = $tipo;
            $this->descripcion = $descripcion;
        }
        // Getters
        public function getID() {
            return $this->id;
        }
        public function getNombre() {
            return $this->nombre;
        }
        public function getTipo() {
            return $this->tipo;
        }
        public function getDescripcion() {
            return $this->descripcion;
        }
        public function getJSON() {
            $datos = array("ID" => $this->id, 'Nombre' => $this->nombre, 'Tipo' => $this->nombre, 'Descripion' => $this->descripcion);
            return json_encode($datos);
        }
        // Metodos
        public function __toString() {
            return $this->nombre;
        }   
    }
?>