function gen(){
	var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var length = document.getElementById("length").value;
 	var passwordLength = length-1;
	var display_alert = document.getElementById("alerts");
 	if(passwordLength < 10){
 		display_alert.innerHTML="+10";
	if(passwordLength > 10){
		display_alert.innerHTML="";
	}
 	}else if(passwordLength > 40){
 		display_alert.innerHTML="Sorry. Your password is so long.";
 	}else{
 		var display = document.getElementById("password");
 		var password = "";
 		for (var i = 0; i <= passwordLength; i++) {
   			var randomNumber = Math.floor(Math.random() * chars.length);
   			password += chars.substring(randomNumber, randomNumber +1);
  }
 	}

  	display.innerHTML="your generated password is : <strong>"+password+"</strong>";
  	let save = localStorage.setItem("last_password", password);

}
function re(){
	var length = document.getElementById("length").value;
	length=".";
	var displays = document.getElementById("password");
	displays.innerHTML="your generated password is : ";
	var not = document.getElementById("alerts").innerHTML="";

}
function update(){
	gen();
}

function load(){
	var display = document.getElementById("password");
	var load = localStorage.getItem("last_password");
	display.innerHTML="<strong> Last saved password : "+load+"</strong>";
}

