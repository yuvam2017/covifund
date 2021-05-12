function signup() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let mobileElem = document.getElementById("mobile");
  let password = document.getElementById("password").value;
  let signupbutton = document.getElementById('submitBtn');



  if (email == "" && mobile != "") {
    console.log("No MObile");


  } else if ((email != "" && mobile == "") || (email != "" && mobile != "")) {
    signupbutton.disabled = true;
    signupbutton.innerText = "Registering your User";
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // setInterval(() => {
        //   signupbutton.innerText = "Sign Up";

        // }, 1000);
        signupbutton.disabled = false;
        signupbutton.innerText = "Sign Up";
        sendEmailVerification(signupbutton);
        savetoDatabase();
        console.log("User Created ");
        setInterval(() => {
          window.location.replace('login.html')
        }, 5000);
        
      })
      .catch((error) => {
        signupbutton.disabled = false;
        signupbutton.innerText = "Sign Up";
        console.log(error);
      })

  } else { // email and mobile == ""

    console.log("Both");

  }

}

function savetoDatabase() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;

  const database = firebase.database();
  const user = firebase.auth().currentUser;
  database.ref(`users/${user.uid}/details`).set({
    FirstName : fname,
    LastName : lname,
    Email: email,
    Mobile: mobile,
    Password : password
  })
}


function sendEmailVerification(signbutton) {
  firebase.auth().currentUser.sendEmailVerification()
    .then((response) => {
      console.log(response)

    })
    .catch((error) => {
      signbutton.disabled = false;
      signbutton.innerText = "User Registered";
      console.log(error.message);
    })
}

