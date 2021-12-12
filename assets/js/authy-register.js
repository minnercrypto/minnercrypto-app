signupForm.addEventListener("submit", async event => {
  event.preventDefault();

  const alertMessage = document.getElementById('alertLogin');
  const username = signupForm["signup-username"];
  const email = signupForm["signup-email"];
  const password = signupForm["signup-password"];
  const referralCode = signupForm["signup-referral"];

  try {
    if (username.value.length==0 || email.value.length==0 || password.value.length==0 || referralCode.value.length==0) {
      const html = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <span class="alert-icon"><i class="fas fa-exclamation-triangle"></i></span>
      <span class="alert-text"><strong> ¡Hey! -</strong> Debe de rellenar todos los campos requeridos.</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    `;
    alertMessage.innerHTML = html;
    } else {
      const { email, password } = getSignupFormInfo();
      await signup(email, password);
      location = '../dash/next.html';
    }
  } catch (ex) {
    const html = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <span class="alert-icon"><i class="ni ni-support-16"></i></span>
      <span class="alert-text"><strong>¡Oh no! -</strong> ${ex.message}</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `;
    alertMessage.innerHTML = html;
  } finally {
  }
});

function getSignupFormInfo() {
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  return { email, password };
}

async function signup(email, password) {
  const creds = await auth.createUserWithEmailAndPassword(email, password);
  return db
    .collection("users")
    .doc(creds.user.uid)
    .set({
      username: signupForm["signup-username"].value,
      email: signupForm["signup-email"].value,
      password: signupForm["signup-password"].value,
      referralCode: signupForm["signup-referral"].value,
      role: "native",
      balance: "0.00",
      investment: "0.00",
      referral: "0",
    });
}

async function setupUI(user) {
  if (user) {
    if (user.admin) {
      adminItems.forEach(el => (el.style.display = "block"));
    }
    const userCollection = (await db
      .collection("users")
      .doc(user.uid)
      .get()).data();

    const html = `
      
      `;

    accountDetails.innerHTML = html;
    loggedInMenu.forEach(menu => (menu.style.display = "block"));
    loggedOutMenu.forEach(menu => (menu.style.display = "none"));
  } else {
    quotesUl.innerHTML += "<h3 class='center-align'>Please, login to enjoy our quotes!</h3>";
    loggedInMenu.forEach(menu => (menu.style.display = "none"));
    loggedOutMenu.forEach(menu => (menu.style.display = "block"));
    adminItems.forEach(el => (el.style.display = "none"));
  }
}