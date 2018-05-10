<template>
<div class="row header-second align-items-center">
							<div class="col-md-5 user-tools form-group m-3">
							<ul class="nav ml-3">
								<button class="btn" type="button"><router-link :to="{name :'new-articleLink'}" tag="li" class="nav-item"> +CREAR ARTICULO </router-link></button>
								<li clas="nav-item"><button class="btn" type="button"> CATALOGO </button></li>
								<li clas="nav-item"><button class="btn" type="button"> NOTICIAS </button></li>
							</ul>
						</div>
					</div>
</template>

<style>
	.header-second{
	background-color:#E9E9E9;
	height: 40px;
}
	
a {
	color:white;
}
</style>