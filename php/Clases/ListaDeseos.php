<?php
    class ListaDeseos {
        private $deseos;
        public function __construct() {
            $this->deseos = array();
        }
        public function agregar($deseo) {
            array_push($this->deseos, $deseo);
        }
        public function getDeseos() {
            return $this->deseos;
        }
        public function getJSON() {
            return json_encode($this->deseos);
        }
    }
?>