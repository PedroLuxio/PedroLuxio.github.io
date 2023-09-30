<?php


class Empleado{
    public $strNombre;
    public $strApellido;
    public $intEdad;
    public $strEstado;
    public $strSexo;
    public $intSueldo;
    public static $fileName = "empleados.txt";    
    public function __construct(string $nombre, string $apellido, int $edad, string $sexo, string $estado, int $sueldo) {
        $this->strNombre = $nombre;
        $this->strApellido = $apellido;
        $this->intEdad = $edad;
        $this->strEstado = $estado;
        $this->strSexo = $sexo;
        $this->intSueldo = $sueldo;
        $data = $nombre . "," . $apellido . "," . $edad . "," . $sexo . "," . $estado . "," . $sueldo . "\n";
        file_put_contents(self::$fileName, $data, FILE_APPEND | LOCK_EX);
    }
    
    public static function obtenerTodosEmpleados() {
        $fileData = file_get_contents(self::$fileName);
        $arrData = explode("\n", $fileData);
        $arrEmpleados = [];
        foreach ($arrData as $data) {
            if (empty($data)) continue;
            $empData = explode(",", $data);
            $arrEmpleados[] = [
                'nombre' => $empData[0],
                'apellido' => $empData[1],
                'edad' => (int)$empData[2],
                'sexo' => $empData[3],
                'estado' => $empData[4],
                'sueldo' => (int)$empData[5],
            ];
        }
        return $arrEmpleados;
    }
    
    public static function contarMujeres(){
        $arrEmpleados = self::obtenerTodosEmpleados();
        $count = 0;
        foreach ($arrEmpleados as $empleado) {
            if ($empleado['sexo'] == "Femenino") {
                $count++;
            }
        }
        return $count;
    }
    
    public static function contarHombres(){
        $arrEmpleados = self::obtenerTodosEmpleados();
        $count = 0;
        foreach ($arrEmpleados as $empleado) {
            if ($empleado['sexo'] == "Masculino" && $empleado['estado'] == "Casado(a)" && $empleado['sueldo'] > 2500) {
                $count++;
            }
        }
        return $count;
    }

    public static function contarViudas(){
        $arrEmpleados = self::obtenerTodosEmpleados();
        $count = 0;
        foreach ($arrEmpleados as $empleado) {
            if ($empleado['sexo'] == "Femenino" && $empleado['estado'] == "Viudo(a)" && $empleado['sueldo'] > 1000) {
                $count++;
            }
        }
        return $count;
    }
    
    public static function edadPromedioHombres(){
        $count = 0;
        $totalEdad = 0;
        $arrEmpleados = self::obtenerTodosEmpleados();
        foreach ($arrEmpleados as $empleado) {
            if($empleado['sexo'] == "Masculino"){
                $count++;
                $totalEdad = $totalEdad + $empleado['edad']; 
            }
        }
        if ($count == 0){
            return 0;
        } else {
            return $totalEdad / $count;
        }
    }

        
}

?>




