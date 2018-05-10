<template>
	<div class="row header-top align-items-center">

							<nav class="col-md-7 main-nav">
								<img src="https://s18955.pcdn.co/wp-content/uploads/2017/05/Meneame.png" class="img-fluid" alt="Responsive image" height="40px" width="40px">
								<a href="/" class="title navbar-brand"> Meneame </a>
							</nav>

							<div class="col-md-5 user-tools form-group mt-1">

							<ul class="nav">
								<li clas="nav-item"><a href="#" class="nav-link"> <i class="fas fa-search"></i></a></li>
								<router-link :to="{name :'loginLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Login</a></router-link>
									<router-link :to="{name :'registerLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Register</a></router-link>
								</li>
								</li>
							</ul>

						</div>
					</div>
				
</template>

<style>

.header-top{
	background-color:#e35614;
}
	
.nav-link {
	color:white;
}

.title{
	position: relative;
    left: 20px;
    top:4px;
    color:white;
    font-size: 20px;
    font-family: 'Russo One', sans-serif;
}
img{
	position: relative;
	left:30px;
}
</style>