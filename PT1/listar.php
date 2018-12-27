<?php 
include('conexion.php');
$con=conexion();
$resultado = $conn->query("SELECT * FROM proyecto");
$datos=array();
while($row=$resultado->fetch_assoc()){
	$datos[]=$row;
}

echo json_encode($datos);
 
 ?>