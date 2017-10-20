<?php
    class ListaDeseos {
        private $deseos;
        public function __construct() {
            $this->deseos = null;
        }
        public function agregar($deseo) {
            $this->deseos.array_push($deseo);
        }
        public function getDeseos() {
            return $this->deseos;
        }
        public function getJSON() {
            return json_encode($this->deseos);
        }
    }
?>