function observador(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Redirect to Dashboard
    location = '../dash/dashboard.html'
    // ...
  } else {
    // User is signed out
    console.log('No existe usuario activo');
    // ...
  }
});
}
observador();