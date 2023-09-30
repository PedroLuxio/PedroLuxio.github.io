<?php

require_once '../modelo/empleados.php';

/*
new Empleado("Nicole", "Moran", 11, "Femenino", "Soltero(a)", 4500);  
new Empleado("Belcy", "Cortes", 37, "Masculino", "Soltero(a)", 3500);  
*/



$result = ['error' => 'Error en los datos'];


if (!empty($_REQUEST['nombre']) && !empty($_REQUEST['apellido']) && !empty($_REQUEST['edad']) && !empty($_REQUEST['sexo']) && !empty($_REQUEST['estado']) && !empty($_REQUEST['sueldo'])) {
new Empleado($_REQUEST['nombre'], $_REQUEST['apellido'], intval($_REQUEST['edad']), $_REQUEST['sexo'], $_REQUEST['estado'], intval($_REQUEST['sueldo']));  
$empleados = Empleado::obtenerTodosEmpleados();
$mujeres = Empleado::contarMujeres();
$hombres = Empleado::contarHombres();
$viudas = Empleado::contarViudas();
$prom = number_format(Empleado::edadPromedioHombres(),2,",",".");

$result = json_encode(array($empleados, $mujeres, $hombres, $viudas,  $prom));

}

echo $result;


?>