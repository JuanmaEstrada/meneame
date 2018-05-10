<template>
	<form class="form-horizontal">
		<fieldset>

		<!-- Form Name -->
		<legend>Register</legend>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">First name</label>  
		  <div class="col-md-4">
		  <input id="textinput" name="textinput" type="text" placeholder="John" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="textinput">Last name</label>  
		  <div class="col-md-4">
		  <input id="textinput" name="textinput" type="text" placeholder="Smith" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="email">Email</label>  
		  <div class="col-md-4">
		  <input id="email" name="email" type="text" placeholder="john.smith@mail.com" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Password input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="passwordinput">Password</label>
		  <div class="col-md-4">
		    <input id="passwordinput" name="passwordinput" type="password" placeholder="Enter your password" class="form-control input-md" required="">
		    
		  </div>
		</div>

		<!-- Button -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="singlebutton"></label>
		  <div class="col-md-4">
		    <button id="singlebutton" name="singlebutton" class="btn btn-primary">Register</button>
		  </div>
		</div>

		</fieldset>
	</form>
</template>