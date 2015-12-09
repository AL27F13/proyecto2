// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btenlistar').on('tap',function(){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.185/libreria/buscartodo.php",
			data:"",
			error: function(){alert("Error en la conexion");},
			success: function(respuesta){var producto = JSON.parse(respuesta);
			 $('#contenido').empty();
			for(var $x=0; $x<producto.libreria.length; $x++)
			{
				$('#contenido').append('<div><div style=" display:inline-block"><div ><img src="http://192.168.1.185/perfumeria/images/imagenes/'+producto.libreria[$x].idlibros+'.jpg" style="height:30px; width:30px;"></div><div ><p>Clave: </p>'+ producto.libreria[$x].idlibros +'</div></div<div style="display: inline-block"><div ><p>Nombre: </p>'+ producto.libreria[$x].nombrelibro +'</div><div ><p>Marca: </p>'+ producto.libreria[$x].categoria +'</div><div ><p>Contenido: </p>'+ producto.libreria[$x].descripcion +'</div></div></div><br><hr>');
			}
			$(':mobile-pageconteiner') .pagecontainer('change','#Enlistar',{
				transition: 'pop'});
				
			}
			
			
			
					
    }); 
});
     //buscar
	
	$('#btenlistar').on('tap',function(){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.185/perfumeria/buscartodo.php",
			data:"Marca"+$('#txt_buscar').val(),
			error: function(){alert("Error en la conexion");},
			success: function(respuesta){var producto = JSON.parse(respuesta);
			 $('#encontrar').empty();
			for(var $x=0; $x<producto.libreria.length; $x++)
			{
				$('#encontrar').append('<div><div style=" display:inline-block"><div ><img src="http://192.168.1.185/libreria/images/imagenes/'+producto.libreria[$x].idlibros+'"></div><div><p>Clave: </p>'+ producto.libreria[$x].idlibros +'</div></div><div style="display: inline-block"><div ><p>Nombre: </p>'+ producto.libreria[$x].nombrelibro +'</div><div ><p>Marca: </p>'+ producto.libreria[$x].categoria +'</div> <div ><p>Contenido: </p>'+producto.libreria[$x].descripcion +'</div></div></div><br><hr>');  
			}
			
			
			}
			
			
	    }); 
});


 }); 
});
		
			
		