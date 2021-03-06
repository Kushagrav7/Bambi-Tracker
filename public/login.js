firebase.auth().onAuthStateChanged(function(user) { //checks to see if the uer is signed in or not
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome: " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
// method to log the user in
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) 
  {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    return false; 
  }); 

  // redirects user back to the home page
  if (document.referrer !== document.location.href) {
    setTimeout(function() {
        window.location.href = 'index.html'
  }, 500);
}
return true;
}

// logs the user out
function logout(){
  firebase.auth().signOut();
  location.reload();
}
