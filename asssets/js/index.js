let login_buttons = document.querySelector('.login_button');
let account = document.querySelector('.account');
firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            login_buttons.style.display = "none";
            account.style.display = "block";
            // ...
      } else {
            login_buttons.style.display = "block";
            account.style.display = "none";
            // User is signed out
            // ...
      }
});

function logout() {
      let request_sign_out = window.confirm("Do you want to logout");
      if (request_sign_out == true) {
            firebase.auth().signOut().then(() => {
                  // Sign-out successful.

                  console.log("User log out")
            }).catch((error) => {
                  alert("Unable to sign out")
                  // An error happened.
            });
      } else {
            console.log("Log out cancelled")
      }

}


function copyText(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
      showCopiedprompt();
}
function showCopiedprompt() {
      let elem = document.getElementById('copied-info');
      elem.style.right = "0%";
      setInterval(() => {
            elem.style.right = "-100%"
      }, 3000);
}
// function closeMedicalProof(){
//       let medicalProof = document.getElementById('medicalProof');
//       medicalProof.style.display = "block";
// }

function makeHelp() {
      window.location.replace('#section1');

}

function askHelp() {
      window.location.replace('askforpayment.html')
}

function showaskedHelp() {
      return true;
}


function getData() {





      //####################### SECTION BODY ########################
      let account_number = 6516515566;
      let ifsccode = 4454565465464654;
      let upiid = '596s4dv4s65d4v6s4@ybl';
      let accordionBody = `<strong>This is the first item's accordion body.</strong> It is shown by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify
      any of this with custom CSS or overriding our default variables. It's
      also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
`
      let section = document.createElement('div');
      section.setAttribute('id', 'section1');
      section.setAttribute('class','help-container my-5 container-fluid')
      // section.classList.add('help-container my-5 container-fluid');
      section.innerHTML = `<div style="border: 0.02rem solid #ebebeb;" class="row">
      <div class="col image-column">
            <img src="./asssets/images/487cef81ea708e992966ce3f9b550e4b.jpg" alt="UPI Code">
      </div>
      <div class="col-6 text-column">
            <div class="row">
                  <div class="col">
                        <h4>For whats</h4>
                        <h6>Click on any details to copy it</h6>
                  </div>
            </div>
            <div class="row d-flex container-fluid">
                  <div class="col">
                        <button onclick="copyText(document.getElementById('user-account-number'))"
                              class="btn my-1 btn-info">
                              Account Number : <span id="user-account-number"
                                    class="user-account-number">ACCOUNTNUMBER</span>
                        </button>
                        <button onclick="copyText(document.getElementById('user-ifsc-code-number'))"
                              class="btn my-1 btn-warning">
                              IFSC CODE : <span class="user-ifsc-code-number"
                                    id="user-ifsc-code-number">IFSCCODE</span>
                        </button>

                        <button onclick="copyText(document.getElementById('user-upi-id'))"
                              class="my-2 btn btn-secondary">
                              UPI ID: <span class="user-upi-id" id="user-upi-id">UPIID@PAYTM OR YBL</span>
                        </button>
                        <button onclick="document.getElementById('medicalProof').style.display = 'block'"
                              class="btn my-2 btn-primary">Medical Proofs
                        </button>


                  </div>
                  <!-- <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div> -->
            </div>
            <div class="w-100 row">
                  <div class="col">
                        <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                          <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">
                                                More About Me..
                                          </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse"
                                          aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div id="accordion-body" class="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element. These classes control the overall appearance,
                                                as well as the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default variables. It's
                                                also worth noting that just about any HTML can go within the
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                          </div>
                                    </div>
                              </div>


                        </div>
                  </div>
            </div>
      </div>
      
</div>`;


      document.body.appendChild(section);

      console.log(section);
      // section.setAttribute(class,'help-container my-5 container-fluid');
      /*#########################################################*/


      /*###################### Medical Proof #####################*/
      let medical_proof = document.createElement('div');
      medical_proof.setAttribute('id','medicalProof');
      medical_proof.setAttribute('class','image-medical-proof');
      // medical_proof.classList.add('image-medical-proof')
      medical_proof.innerHTML = `<div class="proof-image">
      <img src="./asssets/images/cypher2.jpg" alt="Medical Proof">

</div>

<div class="close">
      <button onclick="document.getElementById('medicalProof').style.display = 'none'" class="btn closebtn">
            <i class="bi bi-x-lg"></i>
      </button>
</div>`;

      document.body.appendChild(medical_proof);


      /*##########################################################*/

}
