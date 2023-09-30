<?php

require_once 'vista/header.php';


$pagina = isset($_GET['p']) ? strtolower($_GET['p']) : 'default';

require_once 'vista/'.$pagina.'.php';

require_once 'vista/footer.php';


?>