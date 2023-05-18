<?php include '_header.php' ?>
<?php
		  	$nombre = $_POST["Nombre"];
		  	$apellido = $_POST["Apellido"];
		  	$FechaNacimiento = $_POST["FechaNacimiento"];
		  	$sexo = $_POST["Sexo"];
		  	$DNI = $_POST["DNI"];
		  	$direccion = $_POST["Direccion"];
		  	$telefono = $_POST["Telefono"];
		  	$Email = $_POST["Email"];
		  	$contrasena = $_POST["Contrasena"];
		  	$servidor = "localhost";
			$usuario = "marcadores";
			$passw = "marcadores";
			$basedatos = "marcadores";
?>

<?php
	if (isset($_POST["enviar"])) {
		# code...
	$conexion = mysql_connect($servidor,$usuario,$passw);	
		//1.- seleccionar la base de datos
	mysql_select_db($basedatos, $conexion);

	//2.- crea consulta
	$sql = "
	INSERT INTO Usuarios (Nombre, Apellido, FechaNacimiento, Sexo, DNI, Direccion, Telefono, Email, contrasena)
	VALUES ('$nombre', '$apellido', $FechaNacimiento,'$sexo', '$DNI','$direccion', $telefono,'$Email','$contrasena') ";

	//3.- ejecuta la consulta
	mysql_query($sql, $conexion);

	
	/**
	 * terminar conexión
	 */
	mysql_close($conexion);

	}
	
?>
		