<?php  
 function conexion(){
            $server = "localhost";
            $usuario = "root";
            $pass = "";
            $BD = "e-barrio";
            //variable que guarda la conexión de la base de datos
            $conexion = mysqli_connect($server, $usuario, $pass, $BD); 
            //Comprobamos si la conexión ha tenido exito
            if(!$conexion){ 
               echo 'Ha sucedido un error inexperado en la conexion de la base de datos<br>'; 
            }
            else{
                echo 'conexion correcta';
            } 
            //devolvemos el objeto de conexión para usarlo en las consultas  
            return $conexion; 
    }
    // function insert(){
    //     //Generamos un número entero aleatorio entre 0 y 100
    //     $ran = rand(0, 100);
    //     //creamos la conexión
    //     $conexion = $this->conectarBD();
    //     //Escribimos la sentencia sql necesaria respetando los tipos de datos
    //     $sql = "insert into random (valor) 
    //     values (".$ran.")";
    //     //hacemos la consulta y la comprobamos 
    //     $consulta = mysqli_query($conexion,$sql);
    //     if(!$consulta){
    //         echo "No se ha podido insertar en la base de datos<br><br>".mysqli_error($conexion);
    //     }
    //     //Desconectamos la base de datos
    //     $this->desconectarBD($conexion);
    //     //devolvemos el resultado de la consulta (true o false)
    //     return $consulta;
    // }

 ?>
 