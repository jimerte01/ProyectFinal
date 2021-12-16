let carruselServicios = `
<<div id="demo" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
	<li data-target="#demo" data-slide-to="0" class="active"></li>
	<li data-target="#demo" data-slide-to="1"></li>
	<li data-target="#demo" data-slide-to="2"></li>
	<li data-target="#demo" data-slide-to="3"></li>
	<li data-target="#demo" data-slide-to="4"></li>
</ul>
<div class="carousel-inner">
	<div class="carousel-item active" data-duration="2seg">
		<img src="../Imagenes/servicios/internet.jpg" alt="Imagen0"  width="100%" height="450px" class="img-responsive">
		<div class="carousel-caption">
			<h3 style="color:green"> <strong> Internet </strong> </h3>
		</div>
	</div>
	<div class="carousel-item"data-duration="2seg">
		<img src="../Imagenes/servicios/fotocopia.jpg" alt="Imagen1" width="100%" height="450px" class="img-responsive">
		<div class="carousel-caption">
			<h3 style="color:green"> <strong>Fotocopias e Impresiones</strong> </h3>
		</div>
	</div>
	<div class="carousel-item"data-duration="2seg">
		<img src="../Imagenes/servicios/scaner.jpg" alt="Imagen2" width="100%" height="450px" class="img-responsive">
		<div class="carousel-caption">
			<h3 style="color:green"> <strong>Escáner de Documentos</strong> </h3>
		</div>
	</div>
	<div class="carousel-item"data-duration="2seg">
		<img src="../Imagenes/servicios/argollado.jpg" alt="Imagen3" width="100%" height="450px" class="img-responsive">
		<div class="carousel-caption">
			<h3 style="color:green"> <strong> Argollado</strong></h3>
		</div>
	</div>
	<div class="carousel-item"data-duration="2seg">
		<img src="../Imagenes/servicios/laminado.jpg" alt="Imagen4" width="100%" height="450px" class="img-responsive">
		<div class="carousel-caption">
			<h3 style="color:green"> <strong> Laminado </strong></h3>
		</div>
	</div>
</div>

<a href="#demo" class="carousel-control-next" data-slide="next">
	<span class="carousel-control-next-icon"></span>
</a>
<a href="#demo" class="carousel-control-prev" data-slide="prev">
	<span class="carousel-control-prev-icon"></span>
</a>
</div>`

document.getElementById("carrusel").innerHTML=carruselServicios;
