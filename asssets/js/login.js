function login() {
      let email = document.getElementById('email');
      let password = document.getElementById('password');
      let loginbutton = document.getElementById('loginbutton');

      loginbutton.disabled = true;
      loginbutton.innerText = "Logging In PLease Wait !!!!"
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((response) => {
                  console.log(response);
                  loginbutton.disabled = false;
                  loginbutton.innerText = "Login"
                  console.log("user logged in");
                  window.location.replace('index.html');

            })
            .catch((error) => {
                  loginbutton.disabled = false;
                  loginbutton.innerText = "Login"
                  console.log(error.message);
                  console.log(error.id);

            })
}

