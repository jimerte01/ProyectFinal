let vitrina = `
<div id="demo" class="carousel slide" data-ride="carousel">
					<ul class="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" class="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
						<li data-target="#demo" data-slide-to="3"></li>
					</ul>
					<div class="carousel-inner">
						<div class="carousel-item active" data-duration="2seg">
							<img src="../Imagenes/fachada.jpg" alt="Imagen0"  width="100%" height="450px" class="img-responsive">
						</div>
						<div class="carousel-item"data-duration="2seg">
							<img src="../Imagenes/interna.jpg" alt="Imagen1" width="100%" height="450px" class="img-responsive">
						</div>
						<div class="carousel-item"data-duration="2seg">
							<img src="../Imagenes/image1.jpg" alt="Imagen2" width="100%" height="450px" class="img-responsive">
						</div>
						<div class="carousel-item"data-duration="2seg">
							<img src="../Imagenes/image3.jpg" alt="Imagen2" width="100%" height="450px" class="img-responsive">
						</div>
					</div>
						<a href="#demo" class="carousel-control-next" data-slide="next">
							<span class="carousel-control-next-icon"></span>
						</a>
						<a href="#demo" class="carousel-control-prev" data-slide="prev">
							<span class="carousel-control-prev-icon"></span>
						</a>
					</div>
				</div>`

document.getElementById("carruselInicio").innerHTML=vitrina;
