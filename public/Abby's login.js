// function validateForm(form){
//   var email = document.getElementById('e').value;
//   var password = document.getElementById('p').value;

//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         if (errorCode === 'auth/wrong-password') {
//           alert('Wrong password.');
//         } if(errorCode === 'auth.wrong-email'){
//           alert('No account is linked with this email, please create an account or try another email')
//         } else {
//           window.open("https://jiaartman.web.app/home.html%22);
//         }
//   }); 
// }


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("signin_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome: " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("signin_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
