<?php
    
    class Jugador {
        
        // Atributos
        private $id = null;
        private $cantidad = null;
        private $mundo = null;
        
        // Constructor
        public function __construct($id, $cantidad, $mundo) {
            
            $this->id = $id;
            $this->cantidad = $cantidad;
            $this->mundo = $mundo;
        
        }
        
        // Getters
        public function getID() {
            return $id;
        }
        public function getCantidad() {
            return $cantidad;
        }
        public function getMundo() {
            return $mundo;
        }
        
        
        // Metodos
        public function agregar() {
            $cantidad++;
        }
        public function __toString() {
            return $nombre;
        }
        
    }

?>