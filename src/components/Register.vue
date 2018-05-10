<template>
	<form class="form-horizontal">
		<fieldset>

		<!-- Form Name -->
		<legend>Register</legend>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">First name</label>  
		  <div class="col-md-4">
		  <input name="textnput" type="text" placeholder="John" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Last name</label>  
		  <div class="col-md-4">
		  <input name="textinput" type="text" placeholder="Smith" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="email">Email</label>  
		  <div class="col-md-4">
		  <input id="email"  v-model='email'  name="email" type="text" placeholder="john.smith@mail.com" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Password input-->
		<div class="form-group">
		  <label class="col-md-4 control-label"  for="passwordinput">Password</label>
		  <div class="col-md-4">
		    <input id="passwordinput"  v-model='password'  name="passwordinput" type="password" placeholder="Enter your password" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Button -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="singlebutton"></label>
		  <div class="col-md-4">
		    <button v-on:click='signUp' id="singlebutton" name="singlebutton" class="btn btn-primary">Register</button>
		  </div>
		</div>

		</fieldset>
	</form>
</template>
<script>
import firebase from 'firebase';

export default {
	name: 'signUp',
	data: function() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp: function(){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				 (user) => {
					this.$router.replace('Home')
				},
				function (err) {
					alert('ooops. ' + err.message)
				}
				);
		}		




	}
}



</script>