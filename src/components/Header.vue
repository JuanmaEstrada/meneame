<template>
	<header class="row">
		<nav class="navbar navbar-toggleable-md navbar-light">
			<a href="/" class="navbar-brand">Pizza Planet</a>
			<ul class="nav">
					<router-link :to="{name :'homeLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Home</a></router-link>
					<router-link :to = "{name:'menuLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Menu</a></router-link>
					<router-link :to = "{name:'aboutLink'}" tag="li" class="nav-item"><a class="nav-link" href="">About us</a></router-link>
			</ul>
		</nav>
	</header>
</template>