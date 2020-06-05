function validation() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    

    if (username.value.length==0 && pass.value.length==0){
        alert ("Please enter username and password!");
    }
    else if (username.value.length==0){
        alert ("Please enter username");
    }
    else if (pass.value.length==0){
        alert("Please enter password");
    }
    else if (username.value == "user" && pass.value == "user"){
        document.getElementById("USR").innerHTML = "It works!";
		document.getElementById("ADM").innerHTML = " ";
    }
    else if(username.value == "admin" && pass.value == "admin"){
        document.getElementById("ADM").innerHTML = "It works!";
		document.getElementById("USR").innerHTML = " ";
    }
    else{
        alert("Sorry,You're a Strange User")
    }
   
   
}