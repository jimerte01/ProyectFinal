let formulario = `
    <form name="formulario" >	
	<div class="form-group">
		<label for="Nombre" > <strong> Nombre y Apellido </strong> </label>
		<input placeholder="Escriba sus nombres y apellidos" type="text" id="txtNombre" class="form-control" maxlength="40" onchange="alertaCambios(event)" required>
	</div>
	<div class="form-group">
		<label for="numero"> <strong> Teléfono de contacto </strong> </label>
		<input placeholder="Escriba número celular sin espacios" type="tel" name="telefono" class="form-control" pattern="[0-9]{10}" onchange="alertaCambios(event)" required>
		</div>
	<div class="form-group">
		<label for="correo"> <strong> Correo electrónico </strong> </label>
		<input placeholder="Escriba su email" type="email" name="email" class="form-control" maxlength="50" onchange="alertaCambios(event)" required>
	</div>
	<div class="form-group">
    	<label for="Comentarios"> <strong> Comentarios </strong> </label>
		<input placeholder="Dejenos sus sugerencias y comentarios" type="textarea"  id="txtComentarios" class="form-control" maxlength="300"> 
	</div>
	<div class="form-group">
	    <input type="button" name="enviar" value="enviar datos" onclick="preguntaConfirmacion()" > 
	</div>
</form>
`
document.getElementById("clientes").innerHTML=formulario;

function alertaCambios(event){
    console.log(event.target.value);
}



function preguntaConfirmacion(){
    if (confirm('¿Desea enviar los datos?')){
        document.formulario.submit()
    }
}
