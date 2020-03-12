firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        console.log('logged in')
        document.getElementById("track").style.display = "block"
        document.getElementById("log").style.display = "block"    
  
    } else {
        console.log('logged out');
        document.getElementById("track").style.display = "none";
        document.getElementById("log").style.display = "none"; 
    }
  });