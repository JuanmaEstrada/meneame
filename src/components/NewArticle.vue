<template>
	<form class="form-horizontal">
		<fieldset>

		<!-- Form Name -->
		<legend>Nuevo Articulo</legend>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Titulo</label>  
		  <div class="col-md-4">
		  <input id="titulo" name="titulo" type="text" class="form-control input-md" required="" v-model="titulo">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Entradilla</label>  
		  <div class="col-md-4">
		  <input id="entradilla" name="entradilla" type="text" class="form-control input-md" required="" v-model="entradilla">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Categoria</label>  
		  <div class="col-md-4">
		  <input id="categoria" name="categoria" type="text" class="form-control input-md" required="" v-model="categoria">
		    
		  </div>
		</div>

		<!-- Password input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Url del Articulo</label>
		  <div class="col-md-4">
		    <input id="url" name="url" type="text" class="form-control input-md" required="" v-model="url">
		    
		  </div>
		</div>

		<!-- Button -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="singlebutton"></label>
		  <div class="col-md-4">
		    <button id="singlebutton" name="singlebutton" class="btn btn-primary" @click="sendArticle">Publicar</button>
		  </div>
		</div>

		</fieldset>
	</form>
</template>

<script>
	export default {
  data(){
    return {
    	titulo:"",
    	entradilla: "",
    	categoria: "",
    	url: ""
    }
  },
  methods: {
  	sendArticle: function(e){
  		e.preventDefault()
  		fetch('http://localhost:3000/api/articles', {
				method: 'post',
				 headers: {
    'Content-Type': 'application/json'
  },
				body: JSON.stringify({
					titulo: this.titulo,
					entradilla: this.entradilla,
					categoria: this.categoria,
					url: this.url
			})
	});
  	}
  }
}
</script>