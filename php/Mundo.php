<?php
    
    class Mundo {
        
        private $id = null;
        private $nombre = null;
        private $descripcion = null;
        
        public function __construct($id, $nombre, $descripcion) {
            
            $this->id = $id;
            $this->nombre = $nombre;
            $this->descripcion = $descripcion;
        
        }
        
        // Getters
        public function getID() {
            return $id;
        }
        public function getNombre() {
            return $nombre;
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