firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in. Show the track and log tabs on the tasbar
        console.log('logged in')
        document.getElementById("track").style.display = "block"
        document.getElementById("log").style.display = "block"    
  
    } else {
      // user is not signed in. Keep the two tabs hidden
        console.log('logged out');
        document.getElementById("track").style.display = "none";
        document.getElementById("log").style.display = "none"; 
    }
  });