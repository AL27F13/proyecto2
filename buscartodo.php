<?php
 include("config.inc.php");
 
 $consulta="select * FROM libros WHERE Nombre ='{$_POST['Nombre']}'";
 $resultado=mysqli_query($conexion,$consulta);
 $env='{"libros":[';
 $i = false;
 
   while ($fila = mysqli_fetch_array($resultado))
   {
	   if($i)
	   {
		   $env.=',';
	   }
	   $env .= '{"idlibro":"'.$fila["idlibro"] .'", "nombrelibro":"'.$fila["nombrelibro"] .'", "nombreautor":"'.$fila["nombreautor"] .'", "categoria":"'.$fila["categoria"] .'", "descripcion":"'.$fila["descripcion"] .'"}';
	   
	   $i=true;
   }
   
  $env .=']}';
  echo $env;
?>
 