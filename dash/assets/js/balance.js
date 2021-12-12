function observador(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Existe usuario activo');
    var uid = user.uid;
    console.log(user);
    // ...
  } else {
    location = '../com/login.html'
    // ...
  }
});
}
observador();

async function logout(){
  return await firebase.auth().signOut()
  .then(function(){
    location = '../index.html'
    console.log('Saliendo...')
  })
  .catch(function(error){
    console.log(error)
  });
}

function verificar(){
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    console.log('Email verification sent');
    // Email verification sent!
    // ...
  });
}

const idUser = document.getElementById('idUser');
const balanceId = document.getElementById("balance");
const investmentId = document.getElementById("investment");
const numberPlanId = document.getElementById("number-plan");
const cicleDay = document.getElementById("cicle-day");
async function setupUI(user) {
  if (user) {
    const userCollection = (await db
      .collection("users")
      .doc(user.uid)
      .get()).data();

    const nameComplet = userCollection.name + ' ' + userCollection.lastname; 
    idUser.innerHTML = nameComplet;
    const balance = `<sup>$</sup>${userCollection.balance}`;
    const investment = `<sup>$</sup>${userCollection.investment}`;
    const numberPlan = `${userCollection.numberPlan}`;
    const day = `${userCollection.day}/15`;

    balanceId.innerHTML = balance;
    investmentId.innerHTML = investment;
    numberPlanId.innerHTML = numberPlan;
    cicleDay.innerHTML = day;
  } else {
    alert("Please, login to enjoy our quotes!");
  }
}

auth.onAuthStateChanged(async user => {
  if (user) {
    const idTokenResult = await user.getIdTokenResult();
    user.uid = idTokenResult.claims.uid;
    db.collection("users").onSnapshot(setupUI(user),
      err => {
        setupUI(user);
      },
      err => {}
    );
  } else {
    setupUI();
  }
});
