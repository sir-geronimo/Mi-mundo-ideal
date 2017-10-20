<?php
    
    class Deseo {
        
        private $id = null;
        private $nombre = null;
        private $tipo = null;
        private $descripcion = null;
        
        public function __construct($id, $nombre, $tipo, $descripcion) {
            
            $this->id = $id;
            $this->nombre = $nombre;
            $this->tipo = $tipo;
            $this->descripcion = $descripcion;
        
        }
        
        // Getters
        public function getID() {
            return $id;
        }
        public function getNombre() {
            return $nombre;
        }
        public function getTipo() {
            return $tipo;
        }
        public function getDescripcion() {
            return $descripcion;
        }
        
        // Metodos
        public function __toString() {
            return $nombre;
        }
        
    }

?>